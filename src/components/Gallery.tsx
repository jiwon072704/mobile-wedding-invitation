import { ImageWithFallback } from './figma/ImageWithFallback';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { ScrollAnimation } from './ScrollAnimation';

const galleryImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1762941744800-385b067dff21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQ2MTQ4OTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 1'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1700142611715-8a023c5eb8c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZmxvd2VycyUyMHdoaXRlfGVufDF8fHx8MTc2NDU5NjQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 2'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1581720848209-9721f8fa30ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMHJvbWFudGljfGVufDF8fHx8MTc2NDYwMTU3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 3'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1696204868916-cda7380ae72b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjB2ZW51ZXxlbnwxfHx8fDE3NjQ2Mzc2MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 4'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1738694242379-ef21044985bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc2NDYwNTk1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 5'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1648854607533-d6ff6af33b47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMHJvc2VzfGVufDF8fHx8MTc2NDUyOTE3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 6'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1613067532743-33c628bc7e1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2NDU5MTQwMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 7'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY0NTM3NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Wedding photo 8'
  }
];

export function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const displayedImages = showAll ? galleryImages : galleryImages.slice(0, 4);

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
          <div className="grid grid-cols-2 gap-3">
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

        {/* More Button */}
        {!showAll && galleryImages.length > 4 && (
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

        {showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
            >
              접기
            </button>
          </div>
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
              className="absolute left-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div
              className="max-w-5xl max-h-[90vh] w-full px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={galleryImages[selectedImageIndex].url}
                alt={galleryImages[selectedImageIndex].alt}
                className="w-full h-full object-contain rounded-lg"
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