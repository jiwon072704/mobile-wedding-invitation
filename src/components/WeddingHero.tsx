import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMemo, useEffect } from 'react';
import weddingImage1 from '../assets/images/letter1.png';
import weddingImage2 from '../assets/images/letter2.png';
import weddingImage3 from '../assets/images/letter3.png';
import weddingImage4 from '../assets/images/letter4.png'; 
import { ChevronDown } from 'lucide-react';


export function WeddingHero() {
  const randomHeroImage = useMemo(() => {
    const images = [weddingImage1, weddingImage2, weddingImage3, weddingImage4];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex]
  }, []);

  // Preload all possible hero images to speed up first paint on slow networks
  useEffect(() => {
    const images = [weddingImage1, weddingImage2, weddingImage3, weddingImage4];
    const links: HTMLLinkElement[] = [];
    images.forEach((href) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      // fetchpriority is not widely supported on link, but safe to set
      (link as any).fetchpriority = 'high';
      link.href = href;
      document.head.appendChild(link);
      links.push(link);
    });
    return () => {
      links.forEach((l) => document.head.removeChild(l));
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={randomHeroImage}
          alt="Wedding"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10 items-center animate-bounce">
        <div className="text-white text-sm opacity-90 leading-none">아래로 내려주세요</div>
        <a href="#info" aria-label="Scroll to information section" className="flex items-center justify-center">
          <ChevronDown className="w-6 h-6 text-white opacity-90" aria-hidden="true" />
        </a> 
      </div>
    </div>
  );
}