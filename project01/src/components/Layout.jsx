// src/components/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="w-screen min-h-screen overflow-x-hidden 
                  bg-gradient-to-b from-blue-50 to-cyan-50">
      
      {/* 고정된 Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <Navbar />
      </div>

      {/* 본문: 스크롤 방지 + 중앙정렬 */}
      <main className="pt-24 flex justify-center w-full">
        <div className="w-full max-w-6xl px-4">
          <Outlet />
        </div>
      </main>

    </div>
  );
}

export default Layout;
