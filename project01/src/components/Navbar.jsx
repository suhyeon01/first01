import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4 font-sans">
        
        <Link to="/" className="flex items-center space-x-2 text-slate-700">
          <span className="text-2xl">📰</span>
          <span className="text-2xl font-bold">쉬운뉴스</span>
        </Link>

        <div className="flex space-x-8 text-lg font-semibold">
          <Link to="/" className="text-gray-800 visited:text-gray-800 hover:text-slate-700 focus:text-slate-700 transition">Home</Link>
          <Link to="/news" className="text-gray-800 visited:text-gray-800 hover:text-slate-700 focus:text-slate-700 transition">News</Link>
          <Link to="/dictionary" className="text-gray-800 visited:text-gray-800 hover:text-slate-700 focus:text-slate-700 transition">Dictionary</Link>
          <Link to="/settings" className="text-gray-800 visited:text-gray-800 hover:text-slate-700 focus:text-slate-700 transition">Settings</Link>
          <Link to="/login" className="text-gray-800 visited:text-gray-800 hover:text-slate-700 focus:text-slate-700 transition">Login</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
