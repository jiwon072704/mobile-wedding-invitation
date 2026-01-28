import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';
import { ScrollAnimation } from './ScrollAnimation';
import WeddingImage1 from '../assets/images/hm1.png';
import WeddingImage3 from '../assets/images/jw2.png';
import WeddingImage6 from '../assets/images/w2.png';
import WeddingImage9 from '../assets/images/w5.png';
import WeddingImage14 from '../assets/images/w10.png';
import WeddingImage16 from '../assets/images/w12.png'; 
import WeddingImage18 from '../assets/images/w14.png';
import WeddingImage20 from '../assets/images/w16.png';
import WeddingImage22 from '../assets/images/w17.png';



const galleryImages = [
  {
    id: 1,
    url: WeddingImage6,
    alt: 'Wedding photo 2'
  },
  {
    id: 2,
    url: WeddingImage1,
    alt: 'hm'
  },
  {
    id: 3,
    url: WeddingImage3,
    alt: 'jw2'
  },
  {
    id: 4,
    url: WeddingImage9,
    alt: 'Wedding photo 5'
  },
  {
    id: 5,
    url: WeddingImage20,
    alt: 'Wedding photo 20'
  },
  {
    id: 6,
    url: WeddingImage14,
    alt: 'Wedding photo 14'
  },
  {
    id: 7,
    url: WeddingImage16,
    alt: 'Wedding photo 16'
  },
  {
    id: 8,
    url: WeddingImage22,
    alt: 'Wedding photo 20'
  },
  {
    id: 9,
    url: WeddingImage18,
    alt: 'Wedding photo 18'
  }
];
export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  const touchStartXRef = useRef(null);
  const touchStartTimeRef = useRef(null);

  const openImage = (index) => {
    setSelectedImageIndex(index);
    setShowSwipeHint(true);
    setTimeout(() => setShowSwipeHint(false), 2500);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setShowSwipeHint(false);
    setDragOffset(0);
  };

  const goToPrevious = () => {
    if (selectedImageIndex === null) return;
    setShowSwipeHint(false);
    const nextIndex = selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1;
    setSelectedImageIndex(nextIndex);
  };

  const goToNext = () => {
    if (selectedImageIndex === null) return;
    setShowSwipeHint(false);
    const nextIndex = selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1;
    setSelectedImageIndex(nextIndex);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartTimeRef.current = Date.now();
    setIsDragging(true);
    setShowSwipeHint(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging || touchStartXRef.current === null) return;
    
    const touch = e.touches[0];
    const dx = touch.clientX - touchStartXRef.current;
    
    // 저항감 적용 (양 끝에서)
    const resistance = 0.5;
    const adjustedOffset = dx * resistance;
    
    setDragOffset(adjustedOffset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    
    const SWIPE_THRESHOLD = 50;
    const VELOCITY_THRESHOLD = 0.5;
    
    const timeDiff = Date.now() - touchStartTimeRef.current;
    const velocity = Math.abs(dragOffset) / timeDiff;
    
    // 빠른 스와이프 또는 충분한 거리 이동 시 페이지 전환
    if (Math.abs(dragOffset) > SWIPE_THRESHOLD || velocity > VELOCITY_THRESHOLD) {
      if (dragOffset < 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
    
    // 리셋
    setDragOffset(0);
    setIsDragging(false);
    touchStartXRef.current = null;
    touchStartTimeRef.current = null;
  };

  // 이미지 슬라이드 스타일
  const getImageStyle = () => {
    return {
      transform: `translateX(${dragOffset}px)`,
      transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      opacity: 1 - Math.abs(dragOffset) / 400 // 드래그 시 약간 투명해짐
    };
  };

  return (
    <div className="py-16 px-6 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-lg text-pink-500 mb-2">Gallery</h2>
          <p className="text-gray-400 text-sm">갤러리</p>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openImage(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeImage}
          >
            {showSwipeHint && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm animate-pulse pointer-events-none text-sm">
                ← 사진을 밀어서 넘겨보세요 →
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                closeImage();
              }}
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

            {/* Image Container - 드래그 가능 */}
            <div
              className="w-full h-[80vh] flex items-center justify-center px-16 select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                style={getImageStyle()}
                className="relative"
              >
                <img
                  src={galleryImages[selectedImageIndex].url}
                  alt={galleryImages[selectedImageIndex].alt}
                  className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-lg pointer-events-none"
                  draggable="false"
                />
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
              {selectedImageIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}