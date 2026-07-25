import { FaBell, FaSearch } from "react-icons/fa";

function Topbar() {
  return (
    <header className="h-20 bg-white shadow-sm px-8 flex items-center justify-between">

      {/* Left Side */}
      <div>

        <h2 className="text-3xl font-bold text-gray-800">
          Welcome Back 👋
        </h2>

        <p className="text-gray-500 mt-1">
          Manage your Blood Bank Dashboard
        </p>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="relative hidden md:block">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 pl-11 pr-4 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-200 focus:border-red-600 outline-none"
          />

        </div>

        {/* Notification */}
        <button className="relative w-12 h-12 rounded-full bg-red-50 hover:bg-red-100 flex items-center justify-center transition">

          <FaBell className="text-red-600 text-lg" />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full"></span>

        </button>

        {/* User */}
        <div className="flex items-center gap-3">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="User"
            className="w-12 h-12 rounded-full border-2 border-red-500"
          />

          <div className="hidden md:block">

            <h4 className="font-semibold text-gray-800">
              Mehak Khan
            </h4>

            <p className="text-sm text-gray-500">
              Administrator
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;