import { Link } from 'react-router';
import { ArrowRight, Truck, Shield, Award, Star } from 'lucide-react';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      rating: 5,
      comment: 'The best honey I\'ve ever tasted! Pure, natural, and absolutely delicious.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah'
    },
    {
      name: 'John Anderson',
      rating: 5,
      comment: 'Fast shipping and excellent quality. Will definitely order again!',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John'
    },
    {
      name: 'Emily Carter',
      rating: 5,
      comment: 'Love the variety of honey options. Perfect for gifts and personal use.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-amber-200 rounded-full text-amber-900 text-sm">
                🐝 Pure & Natural Honey
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Nature's Golden
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  Sweetness
                </span>
              </h1>
              <p className="text-lg text-gray-600">
                Experience the pure taste of organic honey, sourced directly from local bee farms. 
                100% natural, unfiltered, and packed with health benefits.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center px-8 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="px-8 py-3 border-2 border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-yellow-400/20 rounded-3xl blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1676313816468-2c944d4fb27d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25leSUyMGphciUyMGdvbGRlbnxlbnwxfHx8fDE3NzQzNTk1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Honey Jar"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
                <Truck className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Free Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $50</p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
                <Shield className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">100% Organic</h3>
              <p className="text-gray-600">Certified organic and natural honey</p>
            </div>
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Quality Guaranteed</h3>
              <p className="text-gray-600">Premium quality or your money back</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600">Discover our most popular honey selections</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Discount Banner */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Special Offer: 20% Off Your First Order!
          </h2>
          <p className="text-xl mb-6">Use code HONEY20 at checkout</p>
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 bg-white text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-600">Real reviews from real honey lovers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-amber-50 rounded-lg p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
