import { useState, useRef, useEffect } from "react";

const OptimizedImage = ({
  src,
  alt,
  className = "",
  loading = "lazy",
  width,
  height,
  sizes,
  placeholder = "blur",
  quality = 85,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    console.warn(`Failed to load image: ${src}`);
    e.target.style.display = "none";
  };

  // Generate responsive srcSet for better performance
  const generateSrcSet = (baseSrc) => {
    // This would ideally be handled by a build process or CDN
    // For now, we'll use the original image
    return baseSrc;
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholder === "blur" ? "#f3f4f6" : "transparent",
        minHeight: height ? `${height}px` : "200px",
      }}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && placeholder === "blur" && (
        <div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse"
          style={{
            backgroundSize: "200% 100%",
            animation: "shimmer 1.5s infinite",
          }}
        />
      )}

      {/* Actual image */}
      {(isInView || loading === "eager") && (
        <img
          src={src}
          srcSet={generateSrcSet(src)}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={loading}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={`
            transition-opacity duration-300 
            ${isLoaded ? "opacity-100" : "opacity-0"}
            ${className}
          `}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          {...props}
        />
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default OptimizedImage;

