import {
FaFacebookF,
FaInstagram,
FaLinkedinIn,
FaTwitter,
FaMapMarkerAlt,
FaPhoneAlt,
FaEnvelope,
FaTint,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
return (

<footer className="bg-[#C1121F] text-white pt-20 pb-8">

<div className="max-w-7xl mx-auto px-6">

<div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
    {/* Company */}

<div>

<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">

<FaTint className="text-white text-xl"/>

</div>

<h2 className="text-3xl text-white font-bold">

Blood
<span className="text-white">

Bank

</span>

</h2>

</div>

<p className="text-black leading-8 mt-6">

Connecting donors, patients and hospitals through
a secure platform to save lives every day.

</p>

<div className="space-y-4 mt-8">

<div className="flex items-center gap-3">

<FaMapMarkerAlt className="text-red-500"/>

<span className="text-gray-300">

Karachi, Pakistan

</span>

</div>

<div className="flex items-center gap-3">

<FaPhoneAlt className="text-red-500"/>

<span className="text-gray-300">

+92 300 1234567

</span>

</div>

<div className="flex items-center gap-3">

<FaEnvelope className="text-red-500"/>

<span className="text-gray-300">

support@bloodbank.com

</span>

</div>

</div>

</div>
{/* Quick Links */}

<div>

<h3 className="text-2xl font-bold mb-6">

Quick Links

</h3>

<ul className=" text-black space-y-4">

<li><a href="#">Home</a></li>

<li><a href="#how-it-works">How It Works</a></li>

<li><a href="#compatibility">Compatibility</a></li>

<li><a href="#features">Features</a></li>

<li><a href="#about">About</a></li>

</ul>

</div>
{/* Services */}

<div>

<h3 className="text-2xl  font-bold mb-6">

Services

</h3>

<ul className=" text-black space-y-4">

<li>Find Blood</li>

<li>Become a Donor</li>

<li>Emergency Requests</li>

<li>Blood Compatibility</li>

</ul>

</div>
{/* Social */}

<div>

<h3 className="text-2xl font-bold mb-6">

Follow Us

</h3>

<div className="flex gap-4">

<div className="w-12 h-12 rounded-full bg-black hover:bg-red-600 transition flex items-center justify-center cursor-pointer">

<FaFacebookF/>

</div>

<div className="w-12 h-12 rounded-full bg-black hover:bg-red-600 transition flex items-center justify-center cursor-pointer">

<FaInstagram/>

</div>

<div className="w-12 h-12 rounded-full bg-black hover:bg-red-600 transition flex items-center justify-center cursor-pointer">

<FaLinkedinIn/>

</div>

<div className="w-12 h-12 rounded-full bg-black hover:bg-red-600 transition flex items-center justify-center cursor-pointer">

<FaTwitter/>

</div>

</div>

<p className="text-black mt-8 leading-8">

Join our community and help save lives through blood donation.

</p>

</div>

</div>

<hr className="border-black my-12"/>

<div className="flex flex-col md:flex-row justify-between items-center gap-4">

<p className="text-gray-400">

© 2026 BloodBank. All Rights Reserved.

</p>

<p className="text-gray-400">

Made with ❤️ for Saving Lives

</p>

</div>

</div>

</footer>

);
}

export default Footer;