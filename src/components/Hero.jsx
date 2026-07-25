import { FaTint, FaUserCheck, FaClock, FaBolt, FaSearch } from "react-icons/fa";

function Hero() {

  return (
<section
id="home"
className="
relative
min-h-[100vh]
flex
items-center
bg-cover
bg-center
"
style={{
  backgroundImage: "url('public/images/bacgimage.png')",
  backgroundSize: "100%"
}}
>

{/* Background Overlay */}

  <div className="absolute inset-0 bg-white/40"></div>


<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">

<div className="flex justify-end items-center w-full">


{/* Right Side */}

<div className="max-w-xl mx-auto text-center">

<span className="bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
❤️ TOGETHER, WE CAN SAVE LIVES
</span>


<h1 className="text-6xl font-bold text-gray-900 leading-tight mt-6">

Every Drop,
<br />

Can <span className="text-red-600">
Save a Life
</span>

</h1>


<p className="text-gray-700 text-lg mt-6 leading-8">

Connect blood donors with patients instantly.
Find the right blood group quickly and help save lives
with our trusted Blood Bank platform.

</p>



<div className="flex justify-center gap-5 mt-8">


<button 
className="
bg-red-600 
text-white 
px-8 
py-4 
rounded-full 
hover:bg-red-700 
transition 
flex 
items-center 
gap-2
">

<FaTint />

Become a Donor

</button>



<button 
className="
border-2 
border-red-600 
text-red-600 
px-8 
py-4 
rounded-full 
hover:bg-red-600 
hover:text-white 
transition 
flex 
items-center 
gap-2
">

<FaSearch />

Find Blood

</button>


</div>



{/* Three Features */}

<div className="flex justify-between items-center gap-6 mt-10 w-full">

  {/* Card 1 */}
  <div className="flex items-center gap-3 min-w-[180px]">

    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
      <FaUserCheck className="text-red-600 text-xl" />
    </div>

    <div>
      <h3 className="text-gray-900 font-semibold">
        Verified Donors
      </h3>

      <p className="text-sm text-gray-500">
        Trusted & Active
      </p>
    </div>

  </div>

  {/* Card 2 */}
  <div className="flex items-center gap-3 min-w-[180px]">

    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
      <FaClock className="text-red-600 text-xl" />
    </div>

    <div>
      <h3 className="text-gray-900 font-semibold">
        24/7 Available
      </h3>

      <p className="text-sm text-gray-500">
        Emergency Support
      </p>
    </div>

  </div>

  {/* Card 3 */}
  <div className="flex items-center gap-3 min-w-[180px]">

    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
      <FaBolt className="text-red-600 text-xl" />
    </div>

    <div>
      <h3 className="text-gray-900 font-semibold">
        Fast Response
      </h3>

      <p className="text-sm text-gray-500">
        Find Blood Quickly
      </p>
    </div>

  </div>

</div>
</div>

</div>

</div>

</section>
);
}
export default Hero;