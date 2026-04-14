import { useParams, Link } from 'react-router';
import { ShoppingCart, Star, Truck, Shield, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState } from 'react';
import { toast } from 'sonner';

export const ProductDetailPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-amber-600 hover:text-amber-700">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    toast.success(`${quantity} x ${product.name} added to cart!`);
  };

  return (
    <div className="bg-amber-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/products"
            className="inline-flex items-center text-amber-600 hover:text-amber-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm rounded-full mb-3">
                  {product.category}
                </span>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-amber-500 text-amber-500'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews.length} reviews)
                  </span>
                </div>
                <p className="text-3xl font-bold text-amber-600 mb-6">${product.price}</p>
              </div>

              <div className="prose">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>

              {/* Stock Status */}
              <div>
                {product.stock > 0 ? (
                  <p className="text-green-600">
                    ✓ In Stock ({product.stock} available)
                  </p>
                ) : (
                  <p className="text-red-600">✗ Out of Stock</p>
                )}
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="font-semibold text-gray-900">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-16 text-center border-x border-gray-300 py-2 outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="font-semibold">Add to Cart</span>
                </button>
              </div>

              {/* Features */}
              <div className="border-t pt-6 space-y-3">
                <div className="flex items-center space-x-3 text-gray-600">
                  <Truck className="w-5 h-5 text-amber-600" />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Shield className="w-5 h-5 text-amber-600" />
                  <span>100% organic and natural</span>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          {product.reviews.length > 0 && (
            <div className="border-t p-6 lg:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
              <div className="space-y-6">
                {product.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{review.author}</h4>
                      <span className="text-sm text-gray-500">{review.date}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'fill-amber-500 text-amber-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
