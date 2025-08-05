import React, { useState, useRef, useEffect } from 'react';
import { ImageIcon } from 'lucide-react';

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  fallbackIcon = true,
  placeholder = true,
  ...props 
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px', // Start loading 50px before the image comes into view
          threshold: 0.1
        }
      );

      if (imgRef.current) {
        observerRef.current.observe(imgRef.current);
      }
    } else {
      // Fallback for browsers without IntersectionObserver
      setIsInView(true);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Generate optimized image URL with Sanity image transformations
  const getOptimizedImageUrl = (imageUrl) => {
    if (!imageUrl) return null;
    
    try {
      const url = new URL(imageUrl);
      
      // Add Sanity image optimization parameters
      url.searchParams.set('w', '800'); // Max width
      url.searchParams.set('h', '600'); // Max height
      url.searchParams.set('fit', 'crop'); // Crop to fit
      url.searchParams.set('auto', 'format'); // Auto format (webp if supported)
      url.searchParams.set('q', '80'); // Quality
      
      return url.toString();
    } catch {
      return imageUrl;
    }
  };

  const optimizedSrc = getOptimizedImageUrl(src);

  if (hasError) {
    return (
      <div className={`bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center ${className}`}>
        {fallbackIcon && <ImageIcon size={24} className="text-gray-600" />}
      </div>
    );
  }

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder skeleton */}
      {isLoading && placeholder && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse">
          <div className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 animate-shimmer"></div>
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={optimizedSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
          decoding="async"
          {...props}
        />
      )}
    </div>
  );
} 