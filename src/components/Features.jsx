import {
  FaUserCheck,
  FaSearch,
  FaAmbulance,
  FaHospital,
  FaLock,
  FaClock,
} from "react-icons/fa";

function Features() {
  return (


<section
  id="features"
  className="py-24 bg-white scroll-mt-32"
>

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold uppercase tracking-wide">

❤️ FEATURES

</span>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">

Why People Choose

<span className="text-red-600">
 Our Blood Bank
</span>

</h2>

<p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">

Our platform connects verified donors, hospitals, and patients
through a secure, reliable, and easy-to-use blood donation system.

</p>

</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaUserCheck className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

Verified Donors

</h3>

<p className="text-gray-600 leading-8 mt-4">

Every registered donor is verified to provide safe,
trusted, and reliable blood donations.

</p>

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaSearch className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

Smart Search

</h3>

<p className="text-gray-600 leading-8 mt-4">

Search blood donors quickly by blood group and find the right match during emergencies.

</p>

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaAmbulance className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

Emergency Requests

</h3>

<p className="text-gray-600 leading-8 mt-4">

Create urgent blood requests and connect with available donors without delay.

</p>

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaHospital className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

Hospital Network

</h3>

<p className="text-gray-600 leading-8 mt-4">

Partner hospitals ensure faster communication and reliable blood availability.

</p>

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaLock className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

Secure Platform

</h3>

<p className="text-gray-600 leading-8 mt-4">

Your personal information is protected with secure authentication and privacy.

</p>

</div>
<div
className="
group
bg-white
rounded-3xl
border
border-red-100
shadow-lg
hover:shadow-2xl
hover:-translate-y-3
transition-all
duration-500
p-8
"
>

<div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center group-hover:bg-red-600 transition-all duration-500">

<FaClock className="text-red-600 text-3xl group-hover:text-white transition-all duration-500"/>

</div>

<h3 className="text-2xl font-bold text-gray-900 mt-8">

24/7 Support

</h3>

<p className="text-gray-600 leading-8 mt-4">

Access blood donation services anytime with round-the-clock emergency support.

</p>

</div>
  </div>
    </section>
  );
}

export default Features;