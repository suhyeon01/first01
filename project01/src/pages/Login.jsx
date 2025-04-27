import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGoogle, FaTwitter, FaFacebookF } from "react-icons/fa";

function Login() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="min-h-[calc(100vh-4rem)] w-full flex justify-center items-center bg-slate-50">
      <div className="relative flex w-[700px] h-[430px] rounded-xl shadow-2xl overflow-hidden animate-fade-in-up">

        {/* 왼쪽 탭 영역 */}
        <div className="w-2/5 bg-white flex flex-col justify-center items-center p-8 relative">
          {/* 돌아가기 버튼 */}
          <button className="absolute top-4 left-4 text-gray-400 hover:text-gray-600">
            <FaArrowLeft size={20} />
          </button>

          {/* 탭 버튼 */}
          <div className="flex flex-col space-y-2 mt-10">
            {['login', 'find', 'signup'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  activeTab === tab
                    ? 'bg-sky-100 text-sky-600'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                {tab === 'login' ? 'Login' : tab === 'find' ? 'Find Account' : 'Sign Up'}
              </button>
            ))}
          </div>
        </div>

        {/* 오른쪽 콘텐츠 영역 */}
        <div className="w-3/5 bg-gradient-to-br from-sky-100 to-cyan-100 flex flex-col justify-center items-center text-gray-700 p-10">

          {activeTab === 'login' && (
            <>
              <h2 className="text-3xl font-bold mb-8">Sign In</h2>

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-6 focus:outline-none focus:border-sky-400 transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-8 focus:outline-none focus:border-sky-400 transition-colors"
              />

              <div className="flex space-x-4 mb-6">
                <FaGoogle className="text-gray-500 hover:text-sky-500 cursor-pointer hover:scale-110 transition-transform" size={20} />
                <FaTwitter className="text-gray-500 hover:text-sky-500 cursor-pointer hover:scale-110 transition-transform" size={20} />
                <FaFacebookF className="text-gray-500 hover:text-sky-500 cursor-pointer hover:scale-110 transition-transform" size={20} />
              </div>

              <button className="bg-white text-sky-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition transform active:scale-95">
                <FaArrowRight size={20} />
              </button>

              <p className="mt-4 text-sm underline cursor-pointer text-gray-500 hover:text-gray-700">
                Forgot password?
              </p>
            </>
          )}

          {activeTab === 'find' && (
            <>
              <h2 className="text-3xl font-bold mb-8">Find Account</h2>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-8 focus:outline-none focus:border-sky-400 transition-colors"
              />

              <button className="w-full bg-white text-sky-600 font-semibold py-2 rounded-full hover:bg-gray-100 transition transform active:scale-95">
                Send Recovery Email
              </button>
            </>
          )}

          {activeTab === 'signup' && (
            <>
              <h2 className="text-3xl font-bold mb-8">Sign Up</h2>

              <input
                type="text"
                placeholder="Username"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-4 focus:outline-none focus:border-sky-400 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-4 focus:outline-none focus:border-sky-400 transition-colors"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-b-2 border-gray-300 placeholder-gray-400 mb-8 focus:outline-none focus:border-sky-400 transition-colors"
              />

              <button className="w-full bg-white text-sky-600 font-semibold py-2 rounded-full hover:bg-gray-100 transition transform active:scale-95">
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
