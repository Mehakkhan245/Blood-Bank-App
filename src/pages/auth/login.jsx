import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    navigate("/dashboard");
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center px-6 py-10">

      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Side */}

        <div className="hidden lg:flex relative items-center justify-center bg-gradient-to-br from-red-700 via-red-600 to-red-500 overflow-hidden p-10">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>

          <div className="absolute w-96 h-96 bg-white/10 rounded-full -bottom-40 -right-32"></div>

          <img
            src="public/images/login-left-side-image.png"
            alt="Blood Donation"
            className="relative z-10 w-[420px] hover:scale-105 duration-500"
          />

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center p-10">

          <div className="w-full max-w-md">

            <h2 className="text-5xl font-bold text-gray-800">
              Welcome Back ❤️
            </h2>

            <p className="text-gray-500 mt-3 mb-8">
              Login to continue saving lives.
            </p>

            {/* Email */}

            <div className="mb-5">

              <label className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>

              <div className="relative">

                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

               <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full pl-12 py-3 pr-4 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-200 focus:border-red-600 outline-none"
/>

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="block mb-2 font-medium text-gray-700">
                Password
              </label>

              <div className="relative">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
<input
  type={showPassword ? "text" : "password"}
  placeholder="Enter your password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full pl-12 pr-12 py-3 rounded-xl border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-200 focus:border-red-600 outline-none"
/>

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Forgot Password */}

            <div className="flex justify-end mt-3">

              <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                Forgot Password?
              </button>

            </div>

            {/* Login Button */}

           <button
  onClick={handleLogin}
  className="w-full mt-7 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-105 duration-300"
>
  Login
</button>

            {/* Register */}

            <p className="text-center mt-6 text-gray-600">

              Don't have an account?{" "}

              <Link
                to="/register"
                className="text-red-600 font-bold hover:text-red-700"
              >
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;