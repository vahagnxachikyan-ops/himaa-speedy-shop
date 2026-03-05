export interface SubCategory {
  key: string;
  nameEn: string;
}

export interface CategoryData {
  key: string;
  path: string;
  subcategories: SubCategory[];
}

export const categoriesData: Record<string, CategoryData> = {
  electronics: {
    key: "electronics",
    path: "/electronics",
    subcategories: [
      { key: "phones", nameEn: "Phones" },
      { key: "headphones", nameEn: "Headphones" },
      { key: "chargers", nameEn: "Chargers" },
      { key: "cables", nameEn: "Cables" },
      { key: "powerbanks", nameEn: "Powerbanks" },
      { key: "smartwatches", nameEn: "Smart Watches" },
      { key: "cameras", nameEn: "Cameras" },
    ],
  },
  "smart-home": {
    key: "smartHome",
    path: "/smart-home",
    subcategories: [
      { key: "smartBulbs", nameEn: "Smart Bulbs" },
      { key: "smartPlugs", nameEn: "Smart Plugs" },
      { key: "securityCameras", nameEn: "Security Cameras" },
      { key: "motionSensors", nameEn: "Motion Sensors" },
      { key: "smartLocks", nameEn: "Smart Locks" },
      { key: "smartSpeakers", nameEn: "Smart Speakers" },
    ],
  },
  home: {
    key: "home",
    path: "/home",
    subcategories: [
      { key: "lighting", nameEn: "Lighting" },
      { key: "decor", nameEn: "Decor" },
      { key: "storage", nameEn: "Storage" },
      { key: "furniture", nameEn: "Furniture" },
    ],
  },
  kitchen: {
    key: "kitchen",
    path: "/kitchen",
    subcategories: [
      { key: "cookware", nameEn: "Cookware" },
      { key: "knives", nameEn: "Knives" },
      { key: "kitchenGadgets", nameEn: "Kitchen Gadgets" },
      { key: "foodStorage", nameEn: "Food Storage" },
    ],
  },
  accessories: {
    key: "accessories",
    path: "/accessories",
    subcategories: [
      { key: "bags", nameEn: "Bags" },
      { key: "wallets", nameEn: "Wallets" },
      { key: "belts", nameEn: "Belts" },
      { key: "phoneCases", nameEn: "Phone Cases" },
    ],
  },
  tools: {
    key: "tools",
    path: "/tools",
    subcategories: [
      { key: "repairTools", nameEn: "Repair Tools" },
      { key: "homeTools", nameEn: "Home Tools" },
      { key: "electricTools", nameEn: "Electric Tools" },
    ],
  },
};

// Placeholder products per category
export interface PlaceholderProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  rating: number;
  deliveryToday: boolean;
}

export const placeholderProducts: PlaceholderProduct[] = [
  { id: "e1", name: "Wireless Bluetooth Headphones", price: 49.99, category: "electronics", subcategory: "headphones", rating: 4.5, deliveryToday: true },
  { id: "e2", name: "USB-C Fast Charger 65W", price: 29.99, category: "electronics", subcategory: "chargers", rating: 4.7, deliveryToday: true },
  { id: "e3", name: "Smart Watch Pro", price: 199.99, category: "electronics", subcategory: "smartwatches", rating: 4.3, deliveryToday: false },
  { id: "e4", name: "Portable Power Bank 20000mAh", price: 39.99, category: "electronics", subcategory: "powerbanks", rating: 4.6, deliveryToday: true },
  { id: "e5", name: "Smartphone Premium 128GB", price: 699.99, category: "electronics", subcategory: "phones", rating: 4.8, deliveryToday: true },
  { id: "e6", name: "USB-C to Lightning Cable 2m", price: 14.99, category: "electronics", subcategory: "cables", rating: 4.2, deliveryToday: true },
  { id: "e7", name: "Action Camera 4K", price: 249.99, category: "electronics", subcategory: "cameras", rating: 4.4, deliveryToday: false },
  { id: "e8", name: "Noise Cancelling Earbuds", price: 79.99, category: "electronics", subcategory: "headphones", rating: 4.6, deliveryToday: true },
  { id: "s1", name: "Smart LED Bulb RGB", price: 19.99, category: "smart-home", subcategory: "smartBulbs", rating: 4.3, deliveryToday: true },
  { id: "s2", name: "Smart Plug WiFi", price: 24.99, category: "smart-home", subcategory: "smartPlugs", rating: 4.5, deliveryToday: true },
  { id: "s3", name: "Indoor Security Camera", price: 89.99, category: "smart-home", subcategory: "securityCameras", rating: 4.7, deliveryToday: false },
  { id: "s4", name: "Motion Sensor PIR", price: 15.99, category: "smart-home", subcategory: "motionSensors", rating: 4.1, deliveryToday: true },
  { id: "s5", name: "Smart Door Lock", price: 159.99, category: "smart-home", subcategory: "smartLocks", rating: 4.4, deliveryToday: false },
  { id: "s6", name: "Smart Speaker Voice Assistant", price: 49.99, category: "smart-home", subcategory: "smartSpeakers", rating: 4.6, deliveryToday: true },
  { id: "h1", name: "LED Desk Lamp", price: 34.99, category: "home", subcategory: "lighting", rating: 4.5, deliveryToday: true },
  { id: "h2", name: "Wall Art Canvas", price: 29.99, category: "home", subcategory: "decor", rating: 4.2, deliveryToday: false },
  { id: "h3", name: "Storage Organizer Box", price: 19.99, category: "home", subcategory: "storage", rating: 4.0, deliveryToday: true },
  { id: "h4", name: "Modern Bookshelf", price: 129.99, category: "home", subcategory: "furniture", rating: 4.3, deliveryToday: false },
  { id: "k1", name: "Kitchen Knife Set", price: 59.99, category: "kitchen", subcategory: "knives", rating: 4.7, deliveryToday: true },
  { id: "k2", name: "Non-Stick Cookware Set", price: 89.99, category: "kitchen", subcategory: "cookware", rating: 4.5, deliveryToday: false },
  { id: "k3", name: "Vegetable Spiralizer", price: 24.99, category: "kitchen", subcategory: "kitchenGadgets", rating: 4.1, deliveryToday: true },
  { id: "k4", name: "Glass Food Containers", price: 34.99, category: "kitchen", subcategory: "foodStorage", rating: 4.4, deliveryToday: true },
  { id: "a1", name: "Laptop Backpack", price: 49.99, category: "accessories", subcategory: "bags", rating: 4.6, deliveryToday: true },
  { id: "a2", name: "Leather Wallet", price: 39.99, category: "accessories", subcategory: "wallets", rating: 4.3, deliveryToday: true },
  { id: "a3", name: "Premium Leather Belt", price: 29.99, category: "accessories", subcategory: "belts", rating: 4.2, deliveryToday: true },
  { id: "a4", name: "Phone Case Premium", price: 19.99, category: "accessories", subcategory: "phoneCases", rating: 4.5, deliveryToday: true },
  { id: "t1", name: "Precision Screwdriver Set", price: 24.99, category: "tools", subcategory: "repairTools", rating: 4.6, deliveryToday: true },
  { id: "t2", name: "Cordless Drill", price: 79.99, category: "tools", subcategory: "electricTools", rating: 4.7, deliveryToday: false },
  { id: "t3", name: "Home Tool Kit 100pc", price: 49.99, category: "tools", subcategory: "homeTools", rating: 4.4, deliveryToday: true },
];
