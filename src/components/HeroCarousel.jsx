// Auto-sliding hero carousel component
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { banners } from '../data/products';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  // Handle CTA button clicks based on banner
  const handleCtaClick = (bannerId) => {
    switch(bannerId) {
      case 1: // New Winter Collection
        navigate('/products?type=winterwear');
        break;
      case 2: // Summer Sale
        navigate('/products');
        break;
      case 3: // Trending Styles
        navigate('/products');
        break;
      default:
        navigate('/products');
    }
  };

  return (
    <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="max-w-3xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {banner.title}
              </h2>
              <p className="text-xl md:text-2xl text-white mb-8">
                {banner.subtitle}
              </p>
              <button 
                onClick={() => handleCtaClick(banner.id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold 
                         py-3 px-8 rounded-lg transition-colors transform hover:scale-105 
                         active:scale-95 shadow-lg hover:shadow-xl"
              >
                {banner.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                   p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-900 dark:text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 
                   p-2 rounded-full hover:bg-white dark:hover:bg-gray-800 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-900 dark:text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-yellow-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
