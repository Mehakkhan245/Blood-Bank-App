import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaMapMarkerAlt,
  FaEdit,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Profile() {
    const navigate = useNavigate();
  return (
    <div className="p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-red-600">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your profile information.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl">

        <div className="flex flex-col md:flex-row items-center gap-8">

          {/* Avatar */}
          <div className="flex flex-col items-center">

            <img
              src="https://i.pravatar.cc/200?img=12"
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-red-500"
            />
<button
  onClick={() => navigate("/edit-profile")}
  className="mt-5 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl flex items-center gap-2 transition"
>
  <FaEdit />
  Edit Profile
</button>
          </div>

          {/* Info */}
          <div className="flex-1 space-y-5">

            <div className="flex items-center gap-4">
              <FaUser className="text-red-600 text-xl" />
              <span className="text-lg font-medium">
                Mehak Khan
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-600 text-xl" />
              <span className="text-lg">
                mehak@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-red-600 text-xl" />
              <span className="text-lg">
                +92 300 1234567
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaTint className="text-red-600 text-xl" />
              <span className="text-lg font-bold text-red-600">
                O+
              </span>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-600 text-xl" />
              <span className="text-lg">
                Karachi, Pakistan
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;