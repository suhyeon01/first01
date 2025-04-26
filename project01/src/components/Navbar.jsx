import { Link } from "react-router-dom";

function Navbar() {
  return (
    // nav 자체를 너비 제한+가운데 배치
    <nav className="bg-blue-100 shadow-md w-full max-w-4xl mx-auto">
      <div className="flex justify-between items-center px-6 py-4">
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
