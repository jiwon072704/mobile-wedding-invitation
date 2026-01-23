import { Phone, X } from 'lucide-react';
import { useState } from 'react';
import { ScrollAnimation } from './ScrollAnimation';

export function CoupleInfo() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleCall = (phoneNumber: string) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="py-16 px-6 max-w-2xl mx-auto">
      <ScrollAnimation>
      <div className="text-center mb-12">
            <h2 className="text-lg mb-2 text-pink">Invitation</h2>
            <p className="text-gray-400 text-sm">초대합니다</p>
          </div>
        <div className="text-center mb-12 space-y-6 text-gray-700 leading-relaxed">
          <p>
            "함께 모든 계절을 보내자"<br />
            라는 한마디에서 저희의 이야기가 시작되었습니다.
          </p>
          <p>
            6년 전, 사랑을 얘기하며 나눴던 그 약속을<br />
            여러분들 앞에서 다시한번 다짐하려 합니다.
            </p>
            <p>
            저희만의 색으로 채워갈 일곱번째 여름을 맞이하며<br />
            항상 곁에서 아껴주셨던 고마운 분들을 모십니다.
           
          </p>
        </div>
      </ScrollAnimation>

      {/* Couple Names with Contact */}
      <ScrollAnimation delay={200}>
        <div className="text-center space-y-3 mb-8 text-gray-700">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm">김병오 · 진은선</span>
            <span className="text-sm text-gray-400">의 아들</span>
            <span>김현민</span>
            <button
              onClick={() => handleCall('01040411972')}
              className="inline-flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 text-pink" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-2">
            <span className="text-sm">이경민 · 남경애</span>
            <span className="text-sm text-gray-400">의 딸</span>
            <span>이지원</span>
            <button
              onClick={() => handleCall('01075695163')}
              className="inline-flex items-center justify-center w-8 h-8 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Phone className="w-4 h-4 text-pink" />
            </button>
          </div>
        </div>
      </ScrollAnimation>

      {/* Parents Contact Button */}
      <ScrollAnimation delay={400}>
        <div className="mb-12">
          <button
            onClick={() => setContactModalOpen(true)}
            className="w-full px-6 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            혼주에게 연락하기
          </button>
        </div>
      </ScrollAnimation>

      {/* Parents Contact Modal */}
      {contactModalOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-6"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-xl">혼주에게 연락하기</h3>
              <button
                onClick={() => setContactModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Groom Parents */}
              <div className="space-y-3">
                <div className="text-sm text-gray-500 mb-3">신랑측 혼주</div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">아버지 김병오</span>
                  <button
                    onClick={() => handleCall('01091999422')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">전화하기</span>
                  </button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">어머니 진은선</span>
                  <button
                    onClick={() => handleCall('01088688466')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">전화하기</span>
                  </button>
                </div>
              </div>

              {/* Bride Parents */}
              <div className="space-y-3">
                <div className="text-sm text-gray-500 mb-3">신부측 혼주</div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">아버지 이경민</span>
                  <button
                    onClick={() => handleCall('01093695163')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">전화하기</span>
                  </button>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-700">어머니 남경애</span>
                  <button
                    onClick={() => handleCall('01030695163')}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">전화하기</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}