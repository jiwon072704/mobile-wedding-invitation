
import { ScrollAnimation } from './ScrollAnimation';



export function Info() {
  const handleShare = () => {
    const kakao = (window as any).Kakao;
    if (!kakao) {
      alert('Kakao SDK 로드 실패');
      return;
    }
    if (!kakao.isInitialized()) {
      const appKey = (import.meta as any).env?.VITE_KAKAO_APP_KEY as string | undefined;
      if (!appKey) {
        alert('VITE_KAKAO_APP_KEY를 설정해 주세요.');
        return;
      }
      kakao.init(appKey);
    }

    kakao.Share.sendCustom({
      templateId: 127287,
      templateArgs: {
        title: '김현민 ❤️ 이지원 결혼합니다',
        description: '2026년 06월 27일 토요일 저희의 결혼식에 초대합니다.',
        imageUrl: 'https://kimhyeonminandjiwon.com/og.jpg',
        mobileWebUrl: 'https://kimhyeonminandjiwon.com',
        webUrl: 'https://kimhyeonminandjiwon.com',
      },
    });
  };

  return (
    <div id="info" className="py-8 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
            <div className="text-center bg-gray-50 space-y-6 text-gray-700 leading-relaxed">
          <p>
            2026년 06월 27일 토요일 오후 1시 40분
            <br />
            더 베뉴지 서울 1층 네이처홀
          </p>
          <button
            type="button"
            onClick={handleShare}
            className="mt-4 inline-flex items-center rounded-lg bg-yellow-400 px-4 py-2 text-sm font-medium text-black"
          >
            카카오톡으로 공유
          </button>
          </div>
        </ScrollAnimation>

      </div>
    </div>
  );
}
