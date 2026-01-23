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
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [showSwipeHint, setShowSwipeHint] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const touchMovedRef = useRef<boolean>(false);
  const [isFading, setIsFading] = useState(false);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [fadeProgress, setFadeProgress] = useState(false);

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    setShowSwipeHint(true);
  };

  const closeImage = () => {
    setSelectedImageIndex(null);
    setShowSwipeHint(false);
  };

  const goToPrevious = () => {
    if (selectedImageIndex === null) return;
    setShowSwipeHint(false);
    const nextIndex =
      selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1;
    startFade(nextIndex);
  };

  const goToNext = () => {
    if (selectedImageIndex === null) return;
    setShowSwipeHint(false);
    const nextIndex =
      selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1;
    startFade(nextIndex);
  };

  const startFade = (targetIndex: number) => {
    if (selectedImageIndex === null) return;
    setPrevIndex(selectedImageIndex);
    setIsFading(true);
    setFadeProgress(false);
    setSelectedImageIndex(targetIndex);
    // 다음 프레임에 실제 전환 시작
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setFadeProgress(true));
    });
    window.setTimeout(() => {
      setIsFading(false);
      setPrevIndex(null);
      setFadeProgress(false);
    }, 320);
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
      setShowSwipeHint(false);
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


        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
            onClick={closeImage}
          >
            {showSwipeHint && (
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-white px-4 py-2 animate-pulse pointer-events-none">
                옆으로 밀어 넘겨보세요
              </div>
            )}
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
              className="max-w-5xl h-[80vh] w-full px-4 overflow-hidden relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {/* 기본 표시: 페이드 전환 중이 아닐 때는 단일 이미지로 렌더 */}
              {!isFading && selectedImageIndex !== null && (
                <ImageWithFallback
                  src={galleryImages[selectedImageIndex].url}
                  alt={galleryImages[selectedImageIndex].alt}
                  className="max-h-[80vh] max-w-full w-auto h-auto mx-auto object-contain rounded-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToNext();
                  }}
                  loading="eager"
                  disableFade
                />
              )}
              {/* 페이드 전환 중: 겹쳐놓고 교차 페이드 */}
              {isFading && prevIndex !== null && (
                <div
                  className="absolute inset-0 transition-opacity duration-300 ease-out"
                  style={{ opacity: fadeProgress ? 0 : 1 }}
                >
                  <ImageWithFallback
                    src={galleryImages[prevIndex].url}
                    alt={galleryImages[prevIndex].alt}
                    className="max-h-[80vh] max-w-full w-auto h-auto mx-auto object-contain rounded-lg"
                    onClick={(e) => e.stopPropagation()}
                    loading="eager"
                    disableFade
                  />
                </div>
              )}
              {/* 현재 이미지(페이드 인) */}
              {isFading && selectedImageIndex !== null && (
                <div
                  className="absolute inset-0 transition-opacity duration-300 ease-out"
                  style={{ opacity: isFading ? (fadeProgress ? 1 : 0) : 1 }}
                >
                  <ImageWithFallback
                    src={galleryImages[selectedImageIndex].url}
                    alt={galleryImages[selectedImageIndex].alt}
                    className="max-h-[80vh] max-w-full w-auto h-auto mx-auto object-contain rounded-lg"
                    onClick={(e) => {
                      e.stopPropagation();
                      goToNext();
                    }}
                    loading="eager"
                    disableFade
                  />
                </div>
              )}
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