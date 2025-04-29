// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import Img1 from '../assets/images/notebook.png';
import Img2 from '../assets/images/forest.png';
import Img3 from '../assets/images/sea.png';

function Home() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="w-full flex justify-center pb-20 bg-gradient-to-br from-blue-50 via-sky-100 to-cyan-100">
      {/* 메인 레이아웃 */}
      <div className="w-full max-w-6xl flex flex-col space-y-24 px-6">

        {/* Hero 섹션 */}
        <section className="relative text-center mt-16">
          {/* 배경 이미지 */}
          <img src={Img1} alt="Hero background" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
          <div className="relative z-10">
            <h1 className="text-5xl font-bold text-gray-900 mb-4 drop-shadow-md">쉬운 뉴스, 세상을 쉽게 읽다</h1>
            <p className="text-gray-700 mb-8 text-lg">누구나 쉽게 이해할 수 있는 오늘의 뉴스</p>
            <Link to="/news">
              <button className="px-8 py-4 bg-blue-400 hover:bg-blue-500 text-white rounded-full transition text-lg shadow-lg">
                오늘의 뉴스 보기
              </button>
            </Link>
          </div>
        </section>

        {/* 오늘의 뉴스 + 날짜별 뉴스 */}
        <section className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-start gap-12">
          {/* 오늘의 뉴스 */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">오늘의 뉴스</h2>
            <div className="grid grid-cols-1 gap-6">
              <NewsCard title="전문가 긍정 평가" />
              <NewsCard title="탄소중립 발표" />
              <NewsCard title="교육 정책 추진" />
            </div>
          </div>

          {/* 날짜별 뉴스 */}
          <div className="flex-1 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">날짜별 뉴스 보기</h2>
            <div className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-md p-6 flex justify-center">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                className="text-gray-800"
                tileClassName={({ date, view }) =>
                  view === 'month' ? 'text-gray-800' : ''
                }
                nextLabel="▶"
                prevLabel="◀"
                navigationLabel={({ date }) => (
                  <span className="text-gray-800 font-semibold">
                    {date.getFullYear()}년 {date.getMonth() + 1}월
                  </span>
                )}
                formatShortWeekday={(locale, date) =>
                  ['일', '월', '화', '수', '목', '금', '토'][date.getDay()]
                }
              />
            </div>
          </div>
        </section>

        {/* 쉬운 단어사전 섹션 */}
        <section className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-md p-12 text-center">
          <img src={Img2} alt="Dictionary" className="mx-auto mb-6 w-24 h-24 object-cover rounded-full" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">쉬운 단어사전</h2>
          <p className="text-gray-600 mb-8">뉴스 속 어려운 단어를 쉽게 풀어드립니다.</p>
          <Link to="/dictionary">
            <button className="px-6 py-3 bg-green-300 hover:bg-green-400 text-white rounded-full transition">
              단어사전 가기
            </button>
          </Link>
        </section>

        {/* 개인 설정 섹션 */}
        <section className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-md p-12 text-center">
          <img src={Img3} alt="Settings" className="mx-auto mb-6 w-24 h-24 object-cover rounded-full" />
          <h2 className="text-3xl font-bold text-gray-800 mb-4">개인 설정</h2>
          <p className="text-gray-600 mb-8">글자 크기, 색상, 음성 기능을 설정해보세요.</p>
          <Link to="/settings">
            <button className="px-6 py-3 bg-purple-300 hover:bg-purple-400 text-white rounded-full transition">
              설정하러 가기
            </button>
          </Link>
        </section>

      </div>
    </div>
  );
}

function NewsCard({ title }) {
  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">{title}</h3>
      <Link to="/news" className="text-blue-400 hover:underline text-sm">
        자세히 보기 →
      </Link>
    </div>
  );
}

export default Home;
