// src/pages/Home.jsx
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full flex justify-center pb-20">
      {/* 중앙 레이아웃 */}
      <div className="w-full max-w-6xl flex flex-col space-y-20 px-4">

        {/* Hero Section */}
        <section className="text-center mt-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            쉬운 뉴스, 세상을 쉽게 읽다
          </h1>
          <p className="text-gray-500 mb-8">
            누구나 쉽게 이해할 수 있는 오늘의 뉴스
          </p>
          <Link to="/news">
            <button className="px-6 py-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition">
              오늘의 뉴스 보기
            </button>
          </Link>
        </section>

        {/* 오늘의 뉴스 Section */}
        <section>
          <h2 className="text-2xl font-bold text-center mb-8">오늘의 뉴스</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <NewsCard title="전문가 긍정 평가" />
            <NewsCard title="탄소중립 발표" />
            <NewsCard title="교육 정책 추진" />
          </div>
        </section>

        {/* Dictionary Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">쉬운 단어사전</h2>
          <Link to="/dictionary">
            <button className="px-6 py-3 bg-green-300 text-white rounded-lg hover:bg-green-400 transition">
              단어사전 가기
            </button>
          </Link>
        </section>

        {/* Settings Section */}
        <section className="text-center">
          <h2 className="text-2xl font-bold mb-8">개인 설정</h2>
          <Link to="/settings">
            <button className="px-6 py-3 bg-purple-300 text-white rounded-lg hover:bg-purple-400 transition">
              설정하러 가기
            </button>
          </Link>
        </section>

      </div>
    </div>
  );
}

// 뉴스 카드 컴포넌트
function NewsCard({ title }) {
  return (
    <div className="bg-white w-72 p-6 rounded-lg shadow hover:shadow-lg transition">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <Link to="/news" className="text-blue-400 hover:underline">
        자세히 보기 →
      </Link>
    </div>
  );
}

export default Home;
