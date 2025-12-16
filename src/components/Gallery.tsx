import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import WeddingImage1 from '../assets/images/hm1.png';
import WeddingImage2 from '../assets/images/jw1.png';
import WeddingImage3 from '../assets/images/jw2.png';
import WeddingImage4 from '../assets/images/jw3.png';
import WeddingImage5 from '../assets/images/w1.png';
import WeddingImage6 from '../assets/images/w2.png';
import WeddingImage7 from '../assets/images/w3.png';
import WeddingImage8 from '../assets/images/w4.png';
import WeddingImage9 from '../assets/images/w5.png';
import WeddingImage10 from '../assets/images/w6.png';
import WeddingImage11 from '../assets/images/w7.png';
import WeddingImage12 from '../assets/images/w8.png';

import WeddingImage14 from '../assets/images/w10.png';
import WeddingImage15 from '../assets/images/w11.png';
import WeddingImage16 from '../assets/images/w12.png'; 
import WeddingImage17 from '../assets/images/w13.png';
import WeddingImage18 from '../assets/images/w14.png';
import WeddingImage19 from '../assets/images/w15.png';  
import WeddingImage20 from '../assets/images/w16.png';
import WeddingImage21 from '../assets/images/w20.png';


const galleryImages = [
  {
    id: 5,
    url: WeddingImage5,
    alt: 'Wedding photo 1'
  },
  {
    id: 4,
    url: WeddingImage4,
    alt: 'jw3'
  },
  {
    id: 6,
    url: WeddingImage6,
    alt: 'Wedding photo 2'
  },
  {
    id: 1,
    url: WeddingImage1,
    alt: 'hm'
  },
  {
    id: 3,
    url: WeddingImage3,
    alt: 'jw2'
  },
  {
    id: 2,
    url: WeddingImage2,
    alt: 'jw1'
  },
  {
    id: 7,
    url: WeddingImage7,
    alt: 'Wedding photo 3'
  },
  {
    id: 8,
    url: WeddingImage8,
    alt: 'Wedding photo 4'
  },
  {
    id: 9,
    url: WeddingImage9,
    alt: 'Wedding photo 5'
  },
  {
    id: 20,
    url: WeddingImage20,
    alt: 'Wedding photo 20'
  },
  {
    id: 10,
    url: WeddingImage10,
    alt: 'Wedding photo 6'
  },
  {
    id: 11,
    url: WeddingImage11,
    alt: 'Wedding photo 7'
  },
  {
    id: 12,
    url: WeddingImage12,
    alt: 'Wedding photo 8'
  },
  {
    id: 13, 
    url: WeddingImage21,
    alt: 'Wedding photo 13'
  },
  {
    id: 14,
    url: WeddingImage14,
    alt: 'Wedding photo 14'
  },
  {
    id: 15,
    url: WeddingImage15,
    alt: 'Wedding photo 15'
  },
  {
    id: 16,
    url: WeddingImage16,
    alt: 'Wedding photo 16'
  },
  {
    id: 17,
    url: WeddingImage17,
    alt: 'Wedding photo 17'
  },
  {
    id: 18,
    url: WeddingImage18,
    alt: 'Wedding photo 18'
  },
  {
    id: 19,
    url: WeddingImage19,
    alt: 'Wedding photo 19'
  }
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchMovedRef = useRef<boolean>(false);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1
      );
    }
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
    touchMovedRef.current = false;
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const touch = e.touches[0];
    const startX = touchStartXRef.current;
    const startY = touchStartYRef.current;
    if (startX == null || startY == null) return;
    const dx = touch.clientX - startX;
    const dy = touch.clientY - startY;
    if (Math.abs(dx) > 10 || Math.abs(dy) > 10) {
      touchMovedRef.current = true;
    }
  };

  const handleTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const startX = touchStartXRef.current;
    if (startX == null) return;
    const touch = e.changedTouches[0];
    const dx = touch.clientX - startX;
    const SWIPE_THRESHOLD = 50;
    if (Math.abs(dx) >= SWIPE_THRESHOLD) {
      if (dx < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    touchStartXRef.current = null;
    touchStartYRef.current = null;
    touchMovedRef.current = false;
  };

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 9);

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-lg text-pink mb-2">Gallery</h2>
            <p className="text-gray-400 text-sm">갤러리</p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <div className="grid grid-cols-3 gap-2">
            {displayedImages.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => openImage(index)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </ScrollAnimation>
        {!showAll && galleryImages.length > 9 && (
          <ScrollAnimation delay={400}>
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                더보기
              </button>
            </div>
          </ScrollAnimation>
        )}
        {showAll && galleryImages.length > 9 && (
          <ScrollAnimation delay={400}>
            <div className="mt-8 text-center">
              <button
                onClick={() => setShowAll(false)}
                className="px-8 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
              >
                접기
              </button>
            </div>
          </ScrollAnimation>
        )}

        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeImage}
          >
            {/* Close Button */}
            <button
              onClick={closeImage}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={3} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={3} />
            </button>

            {/* Image */}
            <div
              className="max-w-5xl max-h-[90vh] w-full px-4"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <ImageWithFallback
                src={galleryImages[selectedImageIndex].url}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}