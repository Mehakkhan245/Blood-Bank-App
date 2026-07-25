import { Link } from "react-router-dom";

function Navbar({ showBar }) {
  return (
    <nav
      className={`fixed left-0 w-full  bg-[#FFF5F5] backdrop-blur-md shadow-sm border-b border-gray-100 z-40 transition-all duration-300 ${
        showBar ? "top-10" : "top-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">

          {/* Replace with your logo image */}
          <div className="w-12 h-12 rounded-full bg-[#C1121F] flex items-center justify-center text-white font-bold text-xl">
            B
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Blood<span className="text-[#C1121F]">Bank</span>
            </h1>
            <p className="text-xs text-gray-500 -mt-1">
              Save Lives
            </p>
          </div>
        </div>
        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-10 font-medium text-gray-700">
          <li>
          <a
  href="#home"
  className="hover:text-red-600 transition duration-300"
>
  Home
</a>
</li>

          <li>
            <a
              href="#howitworks"
              className="hover:text-red-600 transition duration-300"
            >
              How It Works
              
            </a>
          </li>

          <li>
            <a
              href="#compatibility"
              className="hover:text-red-600 transition duration-300"
            >
              Compatibility
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="hover:text-red-600 transition duration-300"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-red-600 transition duration-300"
            >
              About
            </a>
          </li>

        </ul>

      {/* Buttons */}
<div className="hidden lg:flex items-center gap-3">

  <Link to="/login">
    <button className="px-6 py-2.5 rounded-full border border-red-600 text-red-600 font-medium hover:bg-red-50 transition duration-300 cursor-pointer">
      Login
    </button>
  </Link>

  <Link to="/register">
    <button className="px-6 py-2.5 rounded-full bg-red-600 text-white font-medium hover:bg-red-700 transition duration-300 shadow-lg shadow-red-200 cursor-pointer">
      Register
    </button>
  </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;