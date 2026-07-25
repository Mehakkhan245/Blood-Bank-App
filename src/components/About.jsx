import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
<section
id="about"
className="py-24 bg-[#FFF5F5] scroll-mt-32"
>

<div className="max-w-7xl mx-auto px-6">

{/* Heading */}

<div className="text-center mb-16">

<span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold uppercase tracking-wide">

❤️ ABOUT US

</span>

<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">

Saving Lives,
<br/>
<span className="text-red-600">
 One Donation At A Time
</span>

</h2>

<p className="text-gray-600 text-lg mt-6 max-w-3xl mx-auto leading-8">

Our mission is to build a trusted blood donation community by
<br/>
connecting donors, patients, and hospitals through a secure,
<br/>
fast, and reliable platform.

</p>

</div>

{/* Main Content */}

<div className="grid lg:grid-cols-2 gap-16 items-center">
{/* Left Side */}

<div className="relative">

<img
src="public/images/About-left-side-image.png"
alt="About Blood Bank"
className="w-full rounded-[35px] shadow-2xl"
/>

<div className="absolute -bottom-6 -right-6 bg-white rounded-3xl shadow-xl px-8 py-5">

<h3 className="text-3xl font-bold text-red-600">

10K+

</h3>

<p className="text-gray-600">

Lives Impacted

</p>

</div>

</div>
{/* Right Side */}

<div>

<span className="text-red-600 font-semibold uppercase tracking-wider">

OUR MISSION

</span>

<h2 className="text-4xl font-bold text-gray-900 mt-4 leading-tight">

Together We Can
<br/>
<span className="text-red-600">
 Save More Lives
</span>

</h2>

<p className="text-gray-600 leading-8 mt-6">

We believe that every blood donation is a gift of life.
<br/>
Our platform makes it easier for donors and patients to
<br/>
connect quickly during emergencies while promoting safe
<br/>
and voluntary blood donation.

</p>
<div className="space-y-5 mt-8">

<div className="flex items-center gap-4">

<FaCheckCircle className="text-red-600 text-xl"/>

<p className="font-medium text-gray-700">

Compassion & Care

</p>

</div>

<div className="flex items-center gap-4">

<FaCheckCircle className="text-red-600 text-xl"/>

<p className="font-medium text-gray-700">

Fast & Reliable Service

</p>

</div>

<div className="flex items-center gap-4">

<FaCheckCircle className="text-red-600 text-xl"/>

<p className="font-medium text-gray-700">

Safe Donation Process

</p>

</div>

<div className="flex items-center gap-4">

<FaCheckCircle className="text-red-600 text-xl"/>

<p className="font-medium text-gray-700">

Trusted Blood Donation Platform

</p>

</div>

</div></div>

</div>
</div>
</section>

  );
}

export default About;