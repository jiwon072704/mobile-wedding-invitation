import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Utensils, MapPin, Church } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';
import VenueImage from '../assets/images/venueg.jpg';
import WeddingImage from '../assets/images/3_1.png';

type TabType = 'meal' | 'venue' | 'ceremony';

export function GuestInfo() {
  const [activeTab, setActiveTab] = useState<TabType>('meal');

  const tabs = [
    { id: 'meal' as TabType, label: '식사', icon: Utensils },
    { id: 'venue' as TabType, label: '장소', icon: MapPin },
    { id: 'ceremony' as TabType, label: '예식', icon: Church },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-lg text-pink mb-2">Information</h2>
            <p className="text-gray-400 text-sm">안내 사항</p>
          </div>


        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-4 text-center transition-all duration-300 relative ${
                  activeTab === tab.id
                    ? 'text-black'
                    : 'text-gray-400'
                }`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          {/* 식사 탭 */}
          {activeTab === 'meal' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1474221379956-afaf88e3d760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwbWVhbCUyMHN0ZWFrJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjQ2NTc2MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Wedding Meal"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="text-center space-y-4">
                <div className="space-y-2 text-gray-500">
                  <p>식사는 결혼식 및 사진 촬영이 끝난 후</p>
                  <p>웨딩홀 지하1층에서 뷔페식으로 진행됩니다.</p>
                  <p>부족함 없이 즐기실 수 있도록</p>
                  <p>한식을 비롯하여 중식,일식,양식,주류 등</p>
                  <p>다양한 음식을 준비하였으니</p>
                  <p>마음껏 식사를 즐겨주시길 바랍니다.</p>
                </div>
              </div>
            </div>
          )}

          {/* 장소 탭 */}
          {activeTab === 'venue' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={VenueImage}
                  alt="Wedding Venue"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="text-center space-y-4">
                <div className="space-y-2 text-gray-500">
                  <p>예식은 1층 네이처홀에서 진행됩니다.</p>
                  <p>오랜만에 만난 가족,지인분들과</p>
                  <p>여유있는 시간 보내시길 소망합니다.</p>
                  
                </div>
              </div>
            </div>
          )}

          {/* 예식 탭 */}
          {activeTab === 'ceremony' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <ImageWithFallback
                  src={WeddingImage}
                  alt="Wedding Ceremony"
                  className="w-80
                   h-80 object-cover"
                />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-lg text-gray-600">예식 순서</h3>
                <div className="space-y-3 text-gray-500">
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">13:20</span>
                    <span>하객 입장</span>
                  </div>
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">13:40</span>
                    <span>신랑 신부 입장</span>
                  </div>
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">14:00</span>
                    <span>혼인 서약</span>
                  </div>
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">14:10</span>
                    <span>축사 및 축가</span>
                  </div>
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">14:20</span>
                    <span>양가 부모님 인사</span>
                  </div>
                  <div className="flex justify-between items-center px-8">
                    <span className="text-gray-400">14:30</span>
                    <span>폐회 및 사진 촬영</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
