import { ImageWithFallback } from './figma/ImageWithFallback';
import weddingImage from '../assets/images/wedding1.jpeg';
import { ChevronDown } from 'lucide-react';


export function WeddingHero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={weddingImage}
          alt="Wedding"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      {/* Scroll Down Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 z-10">
        <a href="#info" aria-label="Scroll to information section" className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center animate-bounce">
          <ChevronDown className="w-6 h-6 text-white opacity-90" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}