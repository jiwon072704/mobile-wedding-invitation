import { MapPin, Navigation, Car, Train } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

export function Location() {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const appKey =
      (import.meta as any).env?.VITE_KAKAO_APP_KEY ?? '582bad0acb82f7e49b65c36376853c99';

    const initMap = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.error('kakao.maps not available');
        return;
      }
      window.kakao.maps.load(() => {
        if (!mapContainer.current) return;
        const options = {
          center: new window.kakao.maps.LatLng(37.560105, 126.839320), // 더베뉴지 서울
          level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 마커 추가
        const markerPosition = new window.kakao.maps.LatLng(37.560105, 126.839320);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition
        });
        marker.setMap(map);

        // 인포윈도우 추가
        // const infowindow = new window.kakao.maps.InfoWindow({
        //   content: '<div style="padding:20px;text-align:center;"></div>'
        // });
        //infowindow.open(map, marker);
      });
    };

    if (window.kakao && window.kakao.maps) {
      initMap();    
      return;
    }

    let script = document.getElementById('kakao-map-sdk') as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.id = 'kakao-map-sdk';
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
      script.async = true;
      script.addEventListener('load', initMap);
      script.addEventListener('error', (e) => {
        console.error('Failed to load Kakao Maps SDK', e);
      });
      document.head.appendChild(script);
    } else {
      if (window.kakao && window.kakao.maps) {
        initMap();
      } else {
        script.addEventListener('load', initMap);
      }
    }

    return () => {
      const existing = document.getElementById('kakao-map-sdk');
      if (existing) {
        existing.removeEventListener('load', initMap);
      }
    };
  }, []);



  const openNaverMap = () => {
    window.open('https://map.naver.com/p/search/%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8', '_blank');
  };

  const openKakaoMap = () => {
    window.open('https://map.kakao.com/?q=%EB%8D%94%EB%B2%A0%EB%89%B4%EC%A7%80%EC%84%9C%EC%9A%B8', '_blank');
  };

  const openTmap = () => {
    window.open('https://www.tmap.co.kr/tmap2/mobile/route.jsp?name=더%20베뉴지%20서울', '_blank');
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-lg text-pink mb-2">Location</h2>
            <p className="text-gray-400 text-sm">오시는 길</p>
          </div>
        </ScrollAnimation>

        {/* Map Placeholder */}
        <ScrollAnimation delay={200}>
          <div className="bg-gray-200 rounded-2xl overflow-hidden mb-6 shadow-lg">
            <div 
              ref={mapContainer}
              className="aspect-video w-full"
              style={{ minHeight: '300px' }}
            ></div>
          </div>
        </ScrollAnimation>

        {/* Map Links */}
        <ScrollAnimation delay={300}>

          <div className="bg-white rounded-xl shadow-md p-4 mb-8 border border-gray-200">
          <div className="grid grid-cols-3 gap-2">
              <button 
                className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={openNaverMap}
              >
                <div className="items-center justify-center">
                <div className="w-12 h-12 mb-2 rounded-xl bg-green-500 flex items-center justify-center shadow-sm">
                  <span className="text-white text-2xl font-semibold">N</span>
                </div>
                <div className="text-sm">네이버지도</div>
                </div>
              </button>
              <button 
                className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={openKakaoMap}
              >
                <div className="items-center justify-center">
                <div className="w-12 h-12 mb-2 rounded-xl bg-yellow-500 flex items-center justify-center shadow-sm">
                  <span className="text-white text-2xl font-semibold">K</span>
                </div>
                <div className="text-sm">카카오내비</div>
                </div>
              </button>
              <button 
                className="flex flex-col items-center justify-center py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={openTmap}
              >
                <div className="items-center justify-center">
                <div className="w-12 h-12 mb-2 rounded-xl bg-blue-500 flex items-center justify-center shadow-sm">
                  <span className="text-white text-2xl font-semibold">T</span>
                </div>
                <div className="text-sm">티맵</div>
                </div>
              </button>
            
            </div>
          </div>
        </ScrollAnimation>

        {/* Transportation Info */}
        <ScrollAnimation delay={400}>
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Train className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="mb-1">지하철</div>
                <div className="text-sm text-gray-600">
                5호선 발산역 3번 출구 방향 1분 이내 <br />
                9호선 양천향교역 6번 출구 도보 10분 직진
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="mb-1">자동차</div>
                <div className="text-sm text-gray-600">
                  건물 지하 주차장 이용 가능 (3시간 무료)<br />
                  내비게이션: 더 베뉴지 서울
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Navigation className="w-5 h-5 text-gray-700" />
              </div>
              <div className="flex-1">
                <div className="mb-1">버스</div>
                <div className="text-sm text-gray-600">발산역 정류장 하차</div>
                <div className="text-sm text-gray-600">
                  지선버스 : 6630, 6632, 6642, 6645, 6648, 6657, 6712
                  <br />간선버스 : 601, 605, 652, 654, 661
                  <br />공항버스 : 6003
                  <br />일반버스 : 60, 60-3, 88, 1002
                  <br />직행버스 : 3000, 8000
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}