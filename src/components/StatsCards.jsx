import {
  FaUsers,
  FaTint,
  FaHeartbeat,
  FaHospital,
} from "react-icons/fa";

function StatsCards() {
  return (
    <section className="py-16 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">

  <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold tracking-wide uppercase text-sm">
    ❤️ OUR IMPACT
  </span>

  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
    Making Every
    <span className="text-red-600"> Donation Count</span>
  </h2>

  <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-8">
    Our growing network of blood donors, volunteers, and life-saving requests
    is making a real difference every day. Together, we connect donors with
    patients when every second matters.
  </p>


</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Total Donors */}
<div
  className="
  group
  bg-white
  rounded-3xl
  border border-red-100
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-3
  transition-all
  duration-500
  p-8
  text-center
  "
>
  <div
    className="
    w-16
    h-16
    mx-auto
    rounded-full
    bg-red-50
    group-hover:bg-red-600
    flex
    items-center
    justify-center
    mb-6
    transition-all
    duration-500
    "
  >
    <FaUsers className="text-red-600 text-3xl group-hover:text-white transition-all duration-500" />
  </div>

  <h2 className="text-5xl font-extrabold text-red-600">
    2,500+
  </h2>

  <p className="text-xl font-bold text-gray-800 mt-3">
    Total Donors
  </p>

  <p className="text-gray-500 text-sm mt-3 leading-6">
    Registered donors ready to help patients across Pakistan.
  </p>
</div>

{/* Active Requests */}
<div
  className="
  group
  bg-white
  rounded-3xl
  border border-red-100
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-3
  transition-all
  duration-500
  p-8
  text-center
  "
>
  <div
    className="
    w-16
    h-16
    mx-auto
    rounded-full
    bg-red-50
    group-hover:bg-red-600
    flex
    items-center
    justify-center
    mb-6
    transition-all
    duration-500
    "
  >
    <FaTint className="text-red-600 text-3xl group-hover:text-white transition-all duration-500" />
  </div>

  <h2 className="text-5xl font-extrabold text-red-600">
    180+
  </h2>

  <p className="text-xl font-bold text-gray-800 mt-3">
    Active Requests
  </p>

  <p className="text-gray-500 text-sm mt-3 leading-6">
    Urgent blood requests waiting for generous donors.
  </p>
</div>

  {/* Lives Saved */}
<div
  className="
  group
  bg-white
  rounded-3xl
  border border-red-100
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-3
  transition-all
  duration-500
  p-8
  text-center
  "
>
  <div
    className="
    w-16
    h-16
    mx-auto
    rounded-full
    bg-red-50
    group-hover:bg-red-600
    flex
    items-center
    justify-center
    mb-6
    transition-all
    duration-500
    "
  >
    <FaHeartbeat className="text-red-600 text-3xl group-hover:text-white transition-all duration-500" />
  </div>

  <h2 className="text-5xl font-extrabold text-red-600">
    12K+
  </h2>

  <p className="text-xl font-bold text-gray-800 mt-3">
    Lives Saved
  </p>

  <p className="text-gray-500 text-sm mt-3 leading-6">
    Successful donations that helped save thousands of lives.
  </p>
  
</div>
{/* Blood Groups */}
<div
  className="
  group
  bg-white
  rounded-3xl
  border border-red-100
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-3
  transition-all
  duration-500
  p-8
  text-center
  "
>
  <div
    className="
    w-16
    h-16
    mx-auto
    rounded-full
    bg-red-50
    group-hover:bg-red-600
    flex
    items-center
    justify-center
    mb-6
    transition-all
    duration-500
    "
  >
    <FaTint className="text-red-600 text-3xl group-hover:text-white transition-all duration-500" />
  </div>

  <h2 className="text-5xl font-extrabold text-red-600">
    8
  </h2>

  <p className="text-xl font-bold text-gray-800 mt-3">
    Blood Groups
  </p>

  <p className="text-gray-500 text-sm mt-3 leading-6">
    Support available for all major blood groups and compatibility.
  </p>

</div>
</div>
</div>
</section>
  );
}

export default StatsCards;