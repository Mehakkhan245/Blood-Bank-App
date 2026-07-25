// import Navbar from "../components/Navbar";
// import {
//   FaSearch,
//   FaPlus,
//   FaMapMarkerAlt,
//   FaHospital,
//   FaPhoneAlt,
//   FaUserCircle,
// } from "react-icons/fa";
// function Requests() {
//   return (
//     <>
//     <Navbar/>
//     <div className="bg-[#FFF5F5] min-h-screen">

//       {/* ================= Hero Section ================= */}
//       <section className="bg-gradient-to-r from-[#FFF5F5] to-[#FFECEC] py-16">
//         <div className="max-w-7xl mx-auto px-8">

//           <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

//             {/* Left */}
//             <div className="flex-1">

//               <h1 className="text-4xl font-bold text-gray-900  mt-[72px] leading-tight">
//                 Urgent Blood
//                   Requests
//               </h1>

//               <p className="mt-6 text-lg text-gray-800 leading-8 max-w-lg">
//                 View active blood requests from patients in need.
//                 <br/>
//                 Your help can save a life.
//               </p>
//             </div>

//             {/* Right */}
//             <div className="flex-1 flex justify-end">

//               <button className="flex items-center gap-3 bg-[#C51616] hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition duration-300 shadow-lg">

//                 <FaPlus />

//                 Post New Request

//               </button>

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* ================= Search Section ================= */}

//       <section className="-mt-8">
//         <div className="max-w-7xl mx-auto px-8">

//           <div className="bg-white rounded-2xl shadow-lg p-6">

//             <div className="grid grid-cols-1 md:grid-cols-4 gap-5">

//               {/* Search */}

//               <div className="relative md:col-span-2">

//                 <FaSearch className="absolute left-4 top-4 text-gray-400" />

//                 <input
//                   type="text"
//                   placeholder="Search by city or hospital..."
//                   className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 />

//               </div>

//               {/* Blood Group */}

//               <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">

//                 <option>All Blood Groups</option>
//                 <option>A+</option>
//                 <option>A-</option>
//                 <option>B+</option>
//                 <option>B-</option>
//                 <option>AB+</option>
//                 <option>AB-</option>
//                 <option>O+</option>
//                 <option>O-</option>

//               </select>

//               {/* Status */}

//               <select className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">

//                 <option>All Status</option>
//                 <option>Urgent</option>
//                 <option>Active</option>
//                 <option>Completed</option>

//               </select>

//             </div>

//           </div>

//         </div>
//       </section>
//       {/* ================= Blood Request Cards ================= */}

//       <section className="py-16">
//         <div className="max-w-7xl mx-auto px-8">

//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

//             {/* Card 1 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

//               <div className="flex justify-between items-center mb-6">
//                 <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
//                   Urgent
//                 </span>

//                 <span className="text-gray-400 text-sm">
//                   2 hours ago
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 mb-6">

//                 <FaUserCircle className="text-6xl text-red-300" />

//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Ali Raza
//                   </h2>

//                   <p className="text-red-600 font-bold text-xl">
//                     A+
//                   </p>
//                 </div>

//               </div>

//               <div className="space-y-4 text-gray-700">

//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   <span>Karachi</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaHospital className="text-red-500" />
//                   <span>Aga Khan Hospital</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-red-500" />
//                   <span>0300-1234567</span>
//                 </div>

//               </div>

//               <button className="w-full mt-8 bg-[#C51616] hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
//                 Contact Now
//               </button>

//             </div>

//             {/* Card 2 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

//               <div className="flex justify-between items-center mb-6">
//                 <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
//                   Active
//                 </span>

//                 <span className="text-gray-400 text-sm">
//                   5 hours ago
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 mb-6">

//                 <FaUserCircle className="text-6xl text-red-300" />

//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Sara Khan
//                   </h2>

//                   <p className="text-red-600 font-bold text-xl">
//                     O-
//                   </p>
//                 </div>

//               </div>

//               <div className="space-y-4 text-gray-700">

//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   <span>Lahore</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaHospital className="text-red-500" />
//                   <span>Services Hospital</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-red-500" />
//                   <span>0311-7654321</span>
//                 </div>

//               </div>

//               <button className="w-full mt-8 bg-[#C51616] hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
//                 Contact Now
//               </button>

//             </div>

//             {/* Card 3 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

//               <div className="flex justify-between items-center mb-6">
//                 <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
//                   Active
//                 </span>

//                 <span className="text-gray-400 text-sm">
//                   1 day ago
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 mb-6">

//                 <FaUserCircle className="text-6xl text-red-300" />

//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Hassan Ali
//                   </h2>

//                   <p className="text-red-600 font-bold text-xl">
//                     B+
//                   </p>
//                 </div>

//               </div>

//               <div className="space-y-4 text-gray-700">

//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   <span>Islamabad</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaHospital className="text-red-500" />
//                   <span>PIMS Hospital</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-red-500" />
//                   <span>0322-1112233</span>
//                 </div>

//               </div>

//               <button className="w-full mt-8 bg-[#C51616] hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
//                 Contact Now
//               </button>

//             </div>

//             {/* Card 4 */}
//             <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6">

//               <div className="flex justify-between items-center mb-6">
//                 <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
//                   Urgent
//                 </span>

//                 <span className="text-gray-400 text-sm">
//                   3 hours ago
//                 </span>
//               </div>

//               <div className="flex items-center gap-4 mb-6">

//                 <FaUserCircle className="text-6xl text-red-300" />

//                 <div>
//                   <h2 className="text-xl font-bold">
//                     Fatima Noor
//                   </h2>

//                   <p className="text-red-600 font-bold text-xl">
//                     AB-
//                   </p>
//                 </div>

//               </div>

//               <div className="space-y-4 text-gray-700">

//                 <div className="flex items-center gap-3">
//                   <FaMapMarkerAlt className="text-red-500" />
//                   <span>Rawalpindi</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaHospital className="text-red-500" />
//                   <span>Holy Family Hospital</span>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <FaPhoneAlt className="text-red-500" />
//                   <span>0333-9876543</span>
//                 </div>

//               </div>

//               <button className="w-full mt-8 bg-[#C51616] hover:bg-red-700 text-white py-3 rounded-xl font-semibold transition">
//                 Contact Now
//               </button>

//             </div>

//           </div>
//         </div>
//       </section>
//             {/* ================= Call To Action ================= */}

//       <section className="py-20 bg-[#C51616] mt-10">
//         <div className="max-w-5xl mx-auto px-8 text-center">

//           <h2 className="text-4xl font-bold text-white">
//             Every Drop Counts ❤️
//           </h2>

//           <p className="text-red-100 text-lg mt-6 leading-8 max-w-3xl mx-auto">
//             Thousands of patients need blood every day.
//             Your kindness can save someone's mother, father,
//             brother or child. Join our Blood Bank community
//             and become a lifesaver today.
//           </p>

//           <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

//             <button className="bg-white text-[#C51616] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition">
//               Become a Donor
//             </button>

//             <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-[#C51616] transition">
//               Learn More
//             </button>

//           </div>

//         </div>
//       </section>

//       {/* ================= Footer ================= */}

//       <footer className="bg-[#111827] text-gray-300">

//         <div className="max-w-7xl mx-auto px-8 py-14">

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

//             {/* Logo */}

//             <div>

//               <h2 className="text-3xl font-bold text-white">
//                 Blood Bank
//               </h2>

//               <p className="mt-5 leading-7">
//                 Connecting blood donors with patients in need.
//                 Together we can save lives and build a healthier
//                 community.
//               </p>

//             </div>

//             {/* Quick Links */}

//             <div>

//               <h3 className="text-white text-xl font-semibold mb-5">
//                 Quick Links
//               </h3>

//               <ul className="space-y-3">

//                 <li className="hover:text-red-400 cursor-pointer">
//                   Home
//                 </li>

//                 <li className="hover:text-red-400 cursor-pointer">
//                   Donors
//                 </li>

//                 <li className="hover:text-red-400 cursor-pointer">
//                   Requests
//                 </li>

//                 <li className="hover:text-red-400 cursor-pointer">
//                   How It Works
//                 </li>

//               </ul>

//             </div>

//             {/* Contact */}

//             <div>

//               <h3 className="text-white text-xl font-semibold mb-5">
//                 Contact
//               </h3>

//               <div className="space-y-3">

//                 <p>📍 Karachi, Pakistan</p>

//                 <p>📞 +92 300 1234567</p>

//                 <p>✉ support@bloodbank.com</p>

//               </div>

//             </div>

//             {/* Blood Groups */}

//             <div>

//               <h3 className="text-white text-xl font-semibold mb-5">
//                 Available Blood Groups
//               </h3>

//               <div className="flex flex-wrap gap-3">

//                 <span className="bg-red-600 px-3 py-2 rounded-lg">A+</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">A-</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">B+</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">B-</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">AB+</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">AB-</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">O+</span>
//                 <span className="bg-red-600 px-3 py-2 rounded-lg">O-</span>

//               </div>

//             </div>

//           </div>

//           <hr className="border-gray-700 my-10" />

//           <div className="flex flex-col md:flex-row justify-between items-center gap-4">

//             <p className="text-sm">
//               © 2026 Blood Bank. All Rights Reserved.
//             </p>

//             <p className="text-sm text-red-400">
//               ❤️ Donate Blood • Save Lives
//             </p>

//           </div>

//         </div>

//       </footer>
//     </div>
//     </>
//   );
// }

// export default Requests;