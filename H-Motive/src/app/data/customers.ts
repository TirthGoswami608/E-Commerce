export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  rewardPoints: number;
  totalOrders: number;
  totalSpent: number;
  joinDate: string;
}

export const customers: Customer[] = [
  {
    id: 'CUST-001',
    name: 'Sarah Mitchell',
    email: 'sarah@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Springfield, IL 62701',
    rewardPoints: 450,
    totalOrders: 12,
    totalSpent: 589.45,
    joinDate: '2023-08-15'
  },
  {
    id: 'CUST-002',
    name: 'John Anderson',
    email: 'john@example.com',
    phone: '+1 (555) 234-5678',
    address: '456 Oak Ave, Portland, OR 97201',
    rewardPoints: 280,
    totalOrders: 8,
    totalSpent: 356.78,
    joinDate: '2023-10-22'
  },
  {
    id: 'CUST-003',
    name: 'Emily Carter',
    email: 'emily@example.com',
    phone: '+1 (555) 345-6789',
    address: '789 Pine Rd, Seattle, WA 98101',
    rewardPoints: 620,
    totalOrders: 15,
    totalSpent: 892.34,
    joinDate: '2023-06-10'
  },
  {
    id: 'CUST-004',
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '+1 (555) 456-7890',
    address: '321 Elm St, Austin, TX 78701',
    rewardPoints: 195,
    totalOrders: 5,
    totalSpent: 234.56,
    joinDate: '2024-01-05'
  },
  {
    id: 'CUST-005',
    name: 'Jennifer Lee',
    email: 'jennifer@example.com',
    phone: '+1 (555) 567-8901',
    address: '654 Maple Dr, Boston, MA 02101',
    rewardPoints: 510,
    totalOrders: 11,
    totalSpent: 678.90,
    joinDate: '2023-09-18'
  }
];
