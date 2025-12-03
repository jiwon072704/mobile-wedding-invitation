import { ImageWithFallback } from './figma/ImageWithFallback';
import weddingImage from '../assets/images/wedding1.jpeg';


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
    </div>
  );
}