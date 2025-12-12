import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollAnimation } from './ScrollAnimation';
import jiwonParents from '../assets/images/jiwonParents.png';

export function ParentsInfo() {
  return (
    <div className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-lg text-pink mb-2">Our Parents</h2>
            <p className="text-gray-400 text-sm">
              두 사람의 소중한 인연을 맺어주신<br />
              양가 부모님을 소개합니다
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom's Parents */}
          <ScrollAnimation delay={200}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1731335150363-0dcd7db3b908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwc2VuaW9yJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NjQyNTAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="신랑 부모님"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-xl mb-2">신랑측 혼주</div>
                <div className="space-y-1 text-gray-600">
                  <div>
                    <span className="text-sm text-gray-500">아버지</span>
                    <span className="ml-2"> 김병오</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">어머니</span>
                    <span className="ml-2"> 진은선</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Bride's Parents */}
          <ScrollAnimation delay={400}>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 mb-8">
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={jiwonParents}
                  alt="신부 부모님"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-xl mb-2">신부측 혼주</div>
                <div className="space-y-1 text-gray-600">
                  <div>
                    <span className="text-sm text-gray-500">아버지</span>
                    <span className="ml-2"> 이경민</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">어머니</span>
                    <span className="ml-2"> 남경애</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        <ScrollAnimation delay={600}>
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm leading-relaxed">
              평생을 살아오시며 쌓아오신 사랑과 지혜로<br />
              저희 두 사람을 이 자리까지 인도해 주셨습니다
            </p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}
