
import { ScrollAnimation } from './ScrollAnimation';


import shareImage from '../assets/images/w4.png';

export function Info() {
  const shareToKatalk = () => {
    const kakao = (window as any).Kakao;
    if (!kakao) {
      alert('카카오 SDK를 불러오지 못했습니다.');
      return;
    }
    if (!kakao.isInitialized()) {
      const appKey = (import.meta as any).env?.VITE_KAKAO_APP_KEY;
      if (appKey) {
        kakao.init(appKey);
      } else {
        alert('Kakao SDK가 초기화되지 않았습니다. 앱 키 설정을 확인해주세요.');
        return;
      }
    }

    const siteUrl = 'https://hyeonminjiwon-wedding-invitation.vercel.app';
    const imageUrl = `${window.location.origin}${shareImage}`;

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '김현민 ❤️ 이지원 결혼합니다.',
        description: '2026년 06월 27일 토요일 저희의 결혼식에 초대합니다.',
        imageUrl,
        link: {
          mobileWebUrl: siteUrl,
          webUrl: siteUrl,
        },
      },
      buttons: [
        {
          title: '모바일 청첩장 보기',
          link: {
            mobileWebUrl: siteUrl,
            webUrl: siteUrl,
          },
        },
      ],
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
            onClick={shareToKatalk}
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
