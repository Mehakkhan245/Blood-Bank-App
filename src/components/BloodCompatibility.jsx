import { useState } from "react";
import {
  FaTint,
  FaArrowRight,
  FaArrowLeft,
  FaHeartbeat,
  FaShieldAlt,
} from "react-icons/fa";
function BloodCompatibility() {
  const bloodGroups = [
  {
    group: "O+",
    donate: "O+, A+, B+, AB+",
    receive: "O-, O+",
  },
  {
    group: "O-",
    donate: "Everyone",
    receive: "O-",
  },
  {
    group: "A+",
    donate: "A+, AB+",
    receive: "O-, O+, A-, A+",
  },
  {
    group: "A-",
    donate: "A-, A+, AB-, AB+",
    receive: "O-, A-",
  },
  {
    group: "B+",
    donate: "B+, AB+",
    receive: "O-, O+, B-, B+",
  },
  {
    group: "B-",
    donate: "B-, B+, AB-, AB+",
    receive: "O-, B-",
  },
  {
    group: "AB+",
    donate: "AB+",
    receive: "Everyone",
  },
  {
    group: "AB-",
    donate: "AB-, AB+",
    receive: "O-, A-, B-, AB-",
  },
];
const [selectedBlood, setSelectedBlood] = useState(bloodGroups[0]);
  return (
    <section 
     id="compatibility"
    className="py-20 bg-[#FFF5F5]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">

  <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold uppercase text-sm">
    🩸 BLOOD COMPATIBILITY
  </span>

  <h2 className="text-4xl md:text-5xl font-bold mt-6">
    Know Your
    <span className="text-red-600"> Blood Type</span>
  </h2>

  <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg leading-8">
    Select a blood group below to instantly check donation and
    receiving compatibility.
  </p>

</div>
<div className="flex flex-wrap justify-center gap-4 mb-12">

  {bloodGroups.map((blood) => (

    <button
      key={blood.group}
      onClick={() => setSelectedBlood(blood)}
      className={`
        px-6
        py-3
        rounded-full
        font-bold
        transition-all
        duration-300
        ${
          selectedBlood.group === blood.group
            ? "bg-red-600 text-white shadow-lg"
            : "bg-white text-red-600 border border-red-200 hover:bg-red-50"
        }
      `}
    >
      {blood.group}
    </button>

  ))}


</div>

<div
  className="
    max-w-4xl
    mx-auto
    bg-white
    rounded-[32px]
    shadow-2xl
    border
    border-red-100
    overflow-hidden
  "
>
 <div className="grid md:grid-cols-2">
  
<div className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-rose-500 text-white p-10 flex flex-col justify-center items-center">

  {/* Background Circle */}
  <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full"></div>
  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/5 rounded-full"></div>

  {/* Blood Group Circle */}
  <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-md border-4 border-white/30 flex items-center justify-center shadow-2xl">

    <h1 className="text-5xl font-extrabold">
      {selectedBlood.group}
    </h1>

  </div>

  <h2 className="text-3xl font-bold mt-8">
    Blood Group
  </h2>

  <p className="text-red-100 text-center mt-4 leading-8 max-w-xs">

    Check blood donation compatibility instantly before donating or requesting blood.

  </p>

  <div className="flex items-center gap-2 mt-8 bg-white/20 px-5 py-3 rounded-full backdrop-blur-sm">

    <FaShieldAlt />

    <span className="font-medium">
      Verified Compatibility
    </span>

  </div>

</div>
<div className="p-10">

  {/* Donate */}

  <div className="bg-green-50 border border-green-200 rounded-2xl p-6">

    <div className="flex items-center gap-3 mb-4">

      <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">

        <FaArrowRight />

      </div>

      <h3 className="text-2xl font-bold text-gray-800">

        Can Donate To

      </h3>

    </div>

    <div className="flex flex-wrap gap-3">

      {selectedBlood.donate.split(", ").map((item, index) => (

        <span
          key={index}
          className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-semibold"
        >
          {item}
        </span>

      ))}

    </div>

  </div>

  {/* Receive */}

  <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mt-8">

    <div className="flex items-center gap-3 mb-4">

      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white">

        <FaArrowLeft />

      </div>

      <h3 className="text-2xl font-bold text-gray-800">

        Can Receive From

      </h3>

    </div>

    <div className="flex flex-wrap gap-3">

      {selectedBlood.receive.split(", ").map((item, index) => (

        <span
          key={index}
          className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold"
        >
          {item}
        </span>

      ))}

    </div>

  </div>

  {/* Bottom Card */}

  <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-5 flex items-center gap-4">

    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white">

      <FaHeartbeat className="text-2xl" />

    </div>

    <div>

      <h4 className="font-bold text-gray-800">
        Medical Reminder
      </h4>

      <p className="text-gray-600 text-sm mt-1">
        Always consult healthcare professionals before any blood transfusion.
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

export default BloodCompatibility;