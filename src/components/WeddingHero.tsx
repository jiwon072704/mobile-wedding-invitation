import { ImageWithFallback } from './figma/ImageWithFallback';
import { useMemo } from 'react';
import weddingImage1 from '../assets/images/w1.png';
import weddingImage2 from '../assets/images/w4.png';
import weddingImage3 from '../assets/images/w9.png';
import weddingImage4 from '../assets/images/w15.png'; 
import jiwonDad from '../assets/images/jiwonDad.png';
import jiwonMom from '../assets/images/jiwonMom.png';
import { ChevronDown } from 'lucide-react';


export function WeddingHero() {
  const randomHeroImage = useMemo(() => {
    const images = [weddingImage1, weddingImage2, weddingImage3, weddingImage4, jiwonDad, jiwonMom];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex]
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src={randomHeroImage}
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