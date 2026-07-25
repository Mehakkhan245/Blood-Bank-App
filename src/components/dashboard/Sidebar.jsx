import {
  FaTachometerAlt,
  FaUsers,
  FaTint,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-red-600 text-white flex flex-col">

      {/* Logo */}

      <div className="p-6 border-b border-red-500">

        <h1 className="text-3xl font-bold">
          Blood Bank
        </h1>

        <p className="text-red-100 mt-1 text-sm">
          Save Lives ❤️
        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 mt-8">

        <ul className="space-y-3 px-5">
            <li>
  <Link
    to="/dashboard"
    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl bg-white text-red-600 font-semibold"
  >
    <FaTachometerAlt />
    Dashboard
  </Link>
</li>

          <li>
  <Link
    to="/donors"
    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500 transition"
  >
    <FaUsers />
    Donors
  </Link>
</li>

       <li>
  <Link
    to="/requests"
    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500 transition"
  >
    <FaTint />
    Requests
  </Link>
</li>

         <li>
  <Link
    to="/profile"
    className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-red-500 transition"
  >
    <FaUserCircle />
    Profile
  </Link>
</li>

        </ul>

      </nav>

      {/* Logout */}

      <div className="p-5">

        <button className="w-full flex items-center justify-center gap-3 bg-white text-red-600 py-3 rounded-xl font-semibold hover:bg-red-100 transition">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;