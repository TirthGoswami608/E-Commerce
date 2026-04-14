import { useState } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { customers as initialCustomers } from '../../data/customers';
import { toast } from 'sonner';

interface RewardRule {
  id: string;
  name: string;
  description: string;
  pointsPerDollar: number;
  bonusPoints: number;
}

export const AdminRewards = () => {
  const [customers, setCustomers] = useState(initialCustomers);
  const [rewardRules, setRewardRules] = useState<RewardRule[]>([
    {
      id: '1',
      name: 'Purchase Points',
      description: 'Earn points on every purchase',
      pointsPerDollar: 10,
      bonusPoints: 0,
    },
    {
      id: '2',
      name: 'Product Review',
      description: 'Write a review for any product',
      pointsPerDollar: 0,
      bonusPoints: 50,
    },
    {
      id: '3',
      name: 'Referral Bonus',
      description: 'Refer a friend to our store',
      pointsPerDollar: 0,
      bonusPoints: 100,
    },
  ]);

  const [showAddRule, setShowAddRule] = useState(false);
  const [showAdjustPoints, setShowAdjustPoints] = useState(false);
  const [selectedCustomerId, setSelectedCustomerId] = useState('');
  const [pointsAdjustment, setPointsAdjustment] = useState('');
  const [adjustmentReason, setAdjustmentReason] = useState('');

  const [ruleForm, setRuleForm] = useState({
    name: '',
    description: '',
    pointsPerDollar: '',
    bonusPoints: '',
  });

  const handleAddRule = (e: React.FormEvent) => {
    e.preventDefault();
    const newRule: RewardRule = {
      id: String(rewardRules.length + 1),
      name: ruleForm.name,
      description: ruleForm.description,
      pointsPerDollar: parseFloat(ruleForm.pointsPerDollar),
      bonusPoints: parseInt(ruleForm.bonusPoints),
    };
    setRewardRules([...rewardRules, newRule]);
    setRuleForm({ name: '', description: '', pointsPerDollar: '', bonusPoints: '' });
    setShowAddRule(false);
    toast.success('Reward rule added successfully!');
  };

  const handleDeleteRule = (id: string) => {
    if (confirm('Are you sure you want to delete this reward rule?')) {
      setRewardRules(rewardRules.filter((rule) => rule.id !== id));
      toast.success('Reward rule deleted successfully!');
    }
  };

  const handleAdjustPoints = (e: React.FormEvent) => {
    e.preventDefault();
    const adjustment = parseInt(pointsAdjustment);
    setCustomers(
      customers.map((customer) =>
        customer.id === selectedCustomerId
          ? { ...customer, rewardPoints: Math.max(0, customer.rewardPoints + adjustment) }
          : customer
      )
    );
    toast.success('Customer points adjusted successfully!');
    setShowAdjustPoints(false);
    setSelectedCustomerId('');
    setPointsAdjustment('');
    setAdjustmentReason('');
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reward Points System</h1>
        <p className="text-gray-600 mt-1">Manage reward point rules and customer points</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Total Points Distributed</p>
          <p className="text-3xl font-bold text-amber-600">
            {customers.reduce((sum, c) => sum + c.rewardPoints, 0)}
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Active Customers</p>
          <p className="text-3xl font-bold text-gray-900">{customers.length}</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <p className="text-gray-600 mb-1">Reward Rules</p>
          <p className="text-3xl font-bold text-gray-900">{rewardRules.length}</p>
        </div>
      </div>

      {/* Reward Rules */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Reward Rules</h2>
          <button
            onClick={() => setShowAddRule(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Plus className="w-5 h-5" />
            <span>Add Rule</span>
          </button>
        </div>

        <div className="space-y-3">
          {rewardRules.map((rule) => (
            <div
              key={rule.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-amber-300 transition-colors"
            >
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{rule.name}</h3>
                <p className="text-sm text-gray-600">{rule.description}</p>
                <div className="mt-2 flex gap-4 text-sm">
                  {rule.pointsPerDollar > 0 && (
                    <span className="text-amber-600 font-medium">
                      {rule.pointsPerDollar} pts per $1
                    </span>
                  )}
                  {rule.bonusPoints > 0 && (
                    <span className="text-amber-600 font-medium">{rule.bonusPoints} bonus pts</span>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors">
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDeleteRule(rule.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Points Management */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Customer Points</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Customer</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Email</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Current Points</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Total Spent</th>
                <th className="text-left py-3 px-4 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-3 px-4 font-medium text-gray-900">{customer.name}</td>
                  <td className="py-3 px-4 text-gray-600">{customer.email}</td>
                  <td className="py-3 px-4">
                    <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">
                      {customer.rewardPoints} pts
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-700">${customer.totalSpent.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => {
                        setSelectedCustomerId(customer.id);
                        setShowAdjustPoints(true);
                      }}
                      className="px-3 py-1 text-sm text-amber-600 hover:bg-amber-50 rounded transition-colors"
                    >
                      Adjust Points
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Rule Modal */}
      {showAddRule && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Add Reward Rule</h2>
              <form onSubmit={handleAddRule} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rule Name</label>
                  <input
                    type="text"
                    required
                    value={ruleForm.name}
                    onChange={(e) => setRuleForm({ ...ruleForm, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={ruleForm.description}
                    onChange={(e) => setRuleForm({ ...ruleForm, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points per Dollar
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    required
                    value={ruleForm.pointsPerDollar}
                    onChange={(e) => setRuleForm({ ...ruleForm, pointsPerDollar: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bonus Points
                  </label>
                  <input
                    type="number"
                    required
                    value={ruleForm.bonusPoints}
                    onChange={(e) => setRuleForm({ ...ruleForm, bonusPoints: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAddRule(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Add Rule
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Adjust Points Modal */}
      {showAdjustPoints && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Adjust Customer Points</h2>
              <form onSubmit={handleAdjustPoints} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Points Adjustment (use negative for deduction)
                  </label>
                  <input
                    type="number"
                    required
                    value={pointsAdjustment}
                    onChange={(e) => setPointsAdjustment(e.target.value)}
                    placeholder="e.g., 100 or -50"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
                  <textarea
                    required
                    rows={3}
                    value={adjustmentReason}
                    onChange={(e) => setAdjustmentReason(e.target.value)}
                    placeholder="Reason for adjustment..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                  />
                </div>
                <div className="flex justify-end space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowAdjustPoints(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                  >
                    Adjust Points
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
