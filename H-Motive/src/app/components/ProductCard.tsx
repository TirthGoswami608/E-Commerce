import { Link } from 'react-router';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
            Low Stock
          </div>
        )}
        {product.stock === 0 && (
          <div className="absolute top-2 right-2 bg-gray-900 text-white text-xs px-2 py-1 rounded">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs text-amber-600 bg-amber-50 px-2 py-1 rounded">
            {product.category}
          </span>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-semibold text-gray-900 line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-bold text-amber-600">${product.price}</span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add</span>
          </button>
        </div>
      </div>
    </Link>
  );
};
