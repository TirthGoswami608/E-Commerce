import { useState } from 'react';
import { Save } from 'lucide-react';
import { toast } from 'sonner';

interface UISettings {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroButtonText: string;
  featuredSectionTitle: string;
  featuredSectionSubtitle: string;
  discountBannerTitle: string;
  discountBannerSubtitle: string;
  footerDescription: string;
  primaryColor: string;
  secondaryColor: string;
}

export const AdminSettings = () => {
  const [settings, setSettings] = useState<UISettings>({
    siteName: 'Golden Honey',
    heroTitle: "Nature's Golden Sweetness",
    heroSubtitle:
      'Experience the pure taste of organic honey, sourced directly from local bee farms. 100% natural, unfiltered, and packed with health benefits.',
    heroButtonText: 'Shop Now',
    featuredSectionTitle: 'Featured Products',
    featuredSectionSubtitle: 'Discover our most popular honey selections',
    discountBannerTitle: 'Special Offer: 20% Off Your First Order!',
    discountBannerSubtitle: 'Use code HONEY20 at checkout',
    footerDescription:
      'Premium, organic honey sourced from the finest local bee farms. Pure quality you can taste.',
    primaryColor: '#d97706',
    secondaryColor: '#eab308',
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a backend
    toast.success('Settings saved successfully!');
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to default?')) {
      setSettings({
        siteName: 'Golden Honey',
        heroTitle: "Nature's Golden Sweetness",
        heroSubtitle:
          'Experience the pure taste of organic honey, sourced directly from local bee farms. 100% natural, unfiltered, and packed with health benefits.',
        heroButtonText: 'Shop Now',
        featuredSectionTitle: 'Featured Products',
        featuredSectionSubtitle: 'Discover our most popular honey selections',
        discountBannerTitle: 'Special Offer: 20% Off Your First Order!',
        discountBannerSubtitle: 'Use code HONEY20 at checkout',
        footerDescription:
          'Premium, organic honey sourced from the finest local bee farms. Pure quality you can taste.',
        primaryColor: '#d97706',
        secondaryColor: '#eab308',
      });
      toast.success('Settings reset to default!');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-1">
          Customize UI text, content, and appearance of your store
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* General Settings */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">General Settings</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
              <input
                type="text"
                value={settings.siteName}
                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Hero Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Hero Title</label>
              <input
                type="text"
                value={settings.heroTitle}
                onChange={(e) => setSettings({ ...settings, heroTitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hero Subtitle
              </label>
              <textarea
                rows={3}
                value={settings.heroSubtitle}
                onChange={(e) => setSettings({ ...settings, heroSubtitle: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={settings.heroButtonText}
                onChange={(e) => setSettings({ ...settings, heroButtonText: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Featured Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Featured Products Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Section Title</label>
              <input
                type="text"
                value={settings.featuredSectionTitle}
                onChange={(e) =>
                  setSettings({ ...settings, featuredSectionTitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Section Subtitle
              </label>
              <input
                type="text"
                value={settings.featuredSectionSubtitle}
                onChange={(e) =>
                  setSettings({ ...settings, featuredSectionSubtitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Discount Banner */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Discount Banner</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Banner Title</label>
              <input
                type="text"
                value={settings.discountBannerTitle}
                onChange={(e) =>
                  setSettings({ ...settings, discountBannerTitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Subtitle
              </label>
              <input
                type="text"
                value={settings.discountBannerSubtitle}
                onChange={(e) =>
                  setSettings({ ...settings, discountBannerSubtitle: e.target.value })
                }
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Footer</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Footer Description
              </label>
              <textarea
                rows={3}
                value={settings.footerDescription}
                onChange={(e) => setSettings({ ...settings, footerDescription: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
              />
            </div>
          </div>
        </div>

        {/* Color Theme */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Color Theme</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Color (Amber)
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.primaryColor}
                  onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                  className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.primaryColor}
                  onChange={(e) => setSettings({ ...settings, primaryColor: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Secondary Color (Yellow)
              </label>
              <div className="flex items-center space-x-3">
                <input
                  type="color"
                  value={settings.secondaryColor}
                  onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                  className="h-10 w-20 border border-gray-300 rounded cursor-pointer"
                />
                <input
                  type="text"
                  value={settings.secondaryColor}
                  onChange={(e) => setSettings({ ...settings, secondaryColor: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                />
              </div>
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Note: Color changes will apply after saving and refreshing the page.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-50 transition-colors"
          >
            Reset to Default
          </button>
          <button
            type="submit"
            className="flex items-center space-x-2 px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            <Save className="w-5 h-5" />
            <span>Save Changes</span>
          </button>
        </div>
      </form>
    </div>
  );
};
