import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Dictionary from './pages/Dictionary';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      {/* ① 여기 flex:row + justify-center 만 줘서 전체를 가운데로 */}
      <div className="min-h-screen bg-gray-900 flex justify-center">
        
        {/* ② 실제 너비를 제한하는 래퍼 */}
        <div className="w-full max-w-4xl flex flex-col">
          
          {/* Navbar */}
          <Navbar />

          {/* 메인 영역 */}
          <main className="flex-1 flex justify-center items-center">
            <div className="w-full px-4 text-center">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/news" element={<News />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </main>

        </div>
      </div>
    </Router>
  );
}

export default App;
