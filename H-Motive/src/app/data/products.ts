export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  stock: number;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Pure Wildflower Honey',
    description: 'Raw, unfiltered wildflower honey sourced from local bee farms. Rich in natural enzymes and antioxidants.',
    price: 24.99,
    category: 'Wildflower',
    image: 'https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 50,
    rating: 4.8,
    reviews: [
      { id: '1', author: 'Sarah M.', rating: 5, comment: 'Best honey I\'ve ever tasted! So pure and delicious.', date: '2024-03-15' },
      { id: '2', author: 'John D.', rating: 4, comment: 'Great quality, arrived well packaged.', date: '2024-03-10' }
    ]
  },
  {
    id: '2',
    name: 'Raw Honeycomb',
    description: 'Natural honeycomb straight from the hive. Experience honey in its most natural form with edible beeswax.',
    price: 32.99,
    category: 'Honeycomb',
    image: 'https://images.unsplash.com/photo-1556316843-732aa92b4765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBob25leWNvbWIlMjBuYXR1cmFsfGVufDF8fHx8MTc3NDQ0NzY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 30,
    rating: 4.9,
    reviews: [
      { id: '3', author: 'Emily R.', rating: 5, comment: 'Amazing! Love the natural taste and texture.', date: '2024-03-18' }
    ]
  },
  {
    id: '3',
    name: 'Organic Clover Honey',
    description: 'Certified organic clover honey with a mild, sweet flavor. Perfect for tea and baking.',
    price: 19.99,
    category: 'Clover',
    image: 'https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGRpcHBlciUyMHdvb2RlbnxlbnwxfHx8fDE3NzQ0NDc2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 75,
    rating: 4.7,
    reviews: []
  },
  {
    id: '4',
    name: 'Premium Acacia Honey',
    description: 'Light-colored honey with a delicate floral aroma. Known for its high fructose content and clarity.',
    price: 28.99,
    category: 'Acacia',
    image: 'https://images.unsplash.com/photo-1622994879525-1248ab63e163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwaG9uZXklMjBib3R0bGV8ZW58MXx8fHwxNzc0NDQ3NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 40,
    rating: 4.6,
    reviews: []
  },
  {
    id: '5',
    name: 'Buckwheat Honey',
    description: 'Dark, robust honey with a distinctive malty flavor. High in antioxidants and minerals.',
    price: 26.99,
    category: 'Buckwheat',
    image: 'https://images.unsplash.com/photo-1594813593052-9e550ccfafa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwaG9uZXklMjBjb250YWluZXJ8ZW58MXx8fHwxNzc0NDQ3NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 35,
    rating: 4.5,
    reviews: []
  },
  {
    id: '6',
    name: 'Lavender Honey',
    description: 'Infused with natural lavender essence. Perfect for relaxation and culinary creativity.',
    price: 29.99,
    category: 'Flavored',
    image: 'https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 45,
    rating: 4.8,
    reviews: []
  },
  {
    id: '7',
    name: 'Honey Gift Set',
    description: 'Curated selection of 3 premium honeys in a beautiful gift box. Perfect for honey lovers.',
    price: 64.99,
    category: 'Gift Sets',
    image: 'https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGRpcHBlciUyMHdvb2RlbnxlbnwxfHx8fDE3NzQ0NDc2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 20,
    rating: 5.0,
    reviews: []
  },
  {
    id: '8',
    name: 'Creamed Honey',
    description: 'Smooth, spreadable honey with a creamy texture. Great on toast and pastries.',
    price: 22.99,
    category: 'Creamed',
    image: 'https://images.unsplash.com/photo-1622994879525-1248ab63e163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwaG9uZXklMjBib3R0bGV8ZW58MXx8fHwxNzc0NDQ3NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    stock: 60,
    rating: 4.7,
    reviews: []
  }
];

export const categories = [
  'All',
  'Wildflower',
  'Honeycomb',
  'Clover',
  'Acacia',
  'Buckwheat',
  'Flavored',
  'Gift Sets',
  'Creamed'
];
