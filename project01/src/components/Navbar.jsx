// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-blue-100 shadow-md">
      {/* 로고와 웹 이름 */}
      <div className="text-xl font-bold text-blue-700">
        <Link to="/">쉬운뉴스</Link>
      </div>

      {/* 오른쪽 메뉴들 */}
      <div className="space-x-6 text-base text-gray-700">
        <Link to="/">Home</Link>
        <Link to="/news">News</Link>
        <Link to="/dictionary">Dictionary</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
