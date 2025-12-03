import { useState } from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { ScrollAnimation } from './ScrollAnimation';

interface Message {
  id: number;
  name: string;
  message: string;
  date: string;
}

export function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: '김하늘',
      message: '결혼을 진심으로 축하합니다! 행복하세요 ♥',
      date: '2025-06-01'
    },
    {
      id: 2,
      name: '박서준',
      message: '두 분의 앞날에 행복이 가득하길 바랍니다.',
      date: '2025-06-02'
    }
  ]);
  
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString().split('T')[0]
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setMessage('');
  };

  return (
    <div className="py-16 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
              <MessageCircle className="w-8 h-8 text-gray-700" />
            </div>
            <h2 className="text-3xl mb-2">축하 메시지</h2>
            <div className="w-16 h-1 bg-gray-300 mx-auto rounded-full"></div>
          </div>
        </ScrollAnimation>

        {/* Message Form */}
        <ScrollAnimation delay={200}>
          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-md border border-gray-200">
            <div className="mb-4">
              <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 bg-white"
                maxLength={20}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="축하 메시지를 남겨주세요"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-gray-500 resize-none bg-white h-24"
                maxLength={200}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Send className="w-5 h-5" />
              메시지 남기기
            </button>
          </form>
        </ScrollAnimation>

        {/* Messages List */}
        <ScrollAnimation delay={400}>
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-gray-900">{msg.name}</div>
                  <div className="text-sm text-gray-400">{msg.date}</div>
                </div>
                <div className="text-gray-700">{msg.message}</div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
}