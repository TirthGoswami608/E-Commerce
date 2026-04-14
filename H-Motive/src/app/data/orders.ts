export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export interface OrderItem {
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  date: string;
  shippingAddress: string;
  trackingNumber?: string;
}

export const orders: Order[] = [
  {
    id: 'ORD-001',
    customerId: 'CUST-001',
    customerName: 'Sarah Mitchell',
    customerEmail: 'sarah@example.com',
    items: [
      {
        productId: '1',
        productName: 'Pure Wildflower Honey',
        quantity: 2,
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        productId: '2',
        productName: 'Raw Honeycomb',
        quantity: 1,
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1556316843-732aa92b4765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBob25leWNvbWIlMjBuYXR1cmFsfGVufDF8fHx8MTc3NDQ0NzY1Nnww&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    total: 82.97,
    status: 'Delivered',
    date: '2024-03-10',
    shippingAddress: '123 Main St, Springfield, IL 62701',
    trackingNumber: 'TRK123456789'
  },
  {
    id: 'ORD-002',
    customerId: 'CUST-002',
    customerName: 'John Anderson',
    customerEmail: 'john@example.com',
    items: [
      {
        productId: '7',
        productName: 'Honey Gift Set',
        quantity: 1,
        price: 64.99,
        image: 'https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGRpcHBlciUyMHdvb2RlbnxlbnwxfHx8fDE3NzQ0NDc2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    total: 64.99,
    status: 'Shipped',
    date: '2024-03-18',
    shippingAddress: '456 Oak Ave, Portland, OR 97201',
    trackingNumber: 'TRK987654321'
  },
  {
    id: 'ORD-003',
    customerId: 'CUST-001',
    customerName: 'Sarah Mitchell',
    customerEmail: 'sarah@example.com',
    items: [
      {
        productId: '3',
        productName: 'Organic Clover Honey',
        quantity: 3,
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1573697610008-4c72b4e9508f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGRpcHBlciUyMHdvb2RlbnxlbnwxfHx8fDE3NzQ0NDc2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    total: 59.97,
    status: 'Processing',
    date: '2024-03-20',
    shippingAddress: '123 Main St, Springfield, IL 62701'
  },
  {
    id: 'ORD-004',
    customerId: 'CUST-003',
    customerName: 'Emily Carter',
    customerEmail: 'emily@example.com',
    items: [
      {
        productId: '2',
        productName: 'Raw Honeycomb',
        quantity: 2,
        price: 32.99,
        image: 'https://images.unsplash.com/photo-1556316843-732aa92b4765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXclMjBob25leWNvbWIlMjBuYXR1cmFsfGVufDF8fHx8MTc3NDQ0NzY1Nnww&ixlib=rb-4.1.0&q=80&w=1080'
      },
      {
        productId: '6',
        productName: 'Lavender Honey',
        quantity: 1,
        price: 29.99,
        image: 'https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080'
      }
    ],
    total: 95.97,
    status: 'Pending',
    date: '2024-03-22',
    shippingAddress: '789 Pine Rd, Seattle, WA 98101'
  }
];
