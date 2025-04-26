// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-blue-100 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 왼쪽: 로고 + 쉬운뉴스 */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-blue-400"></div>
          <Link to="/" className="text-2xl font-extrabold text-blue-700 font-sans">
            쉬운뉴스
          </Link>
        </div>

        {/* 오른쪽: 메뉴 */}
        <div className="flex space-x-6 text-lg font-medium text-gray-800 font-sans">
          <Link to="/">Home</Link>
          <Link to="/news">News</Link>
          <Link to="/dictionary">Dictionary</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
