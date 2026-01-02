import { WeddingHero } from './components/WeddingHero';
import { CoupleInfo } from './components/CoupleInfo';
import { WeddingDetails } from './components/WeddingDetails';
import { Gallery } from './components/Gallery';
import { Location } from './components/Location';
import { AccountInfo } from './components/AccountInfo';
import { GuestBook } from './components/GuestBook';
import { ParentsInfo } from './components/ParentsInfo';
import { Info } from './components/Info';
import { GuestInfo } from './components/GuestInfo';
import shareImage from '../assets/images/w4.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b  via-white ">
      <WeddingHero />
      <Info />
      <CoupleInfo />
      <WeddingDetails />
      <ParentsInfo />
      <Gallery />
      <Location />
      <GuestInfo />
      <AccountInfo />
      
      
      {/* Footer */}
      <div className="py-8 text-center text-gray-400 text-sm">
        <p>저희 두사람의 시작을 진심으로 축복해주시는 <br /> 모든 분들께 머리숙여 깊은 감사드립니다. </p>
        <p>행복하게 잘 살겠습니다.</p><br />
        <p>신랑 김현민 · 신부 이지원</p>
      </div>
    </div>
  );
}