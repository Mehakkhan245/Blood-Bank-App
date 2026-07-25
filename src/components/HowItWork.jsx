import { FaUserPlus, FaSearch, FaHeartbeat } from "react-icons/fa";

function HowItWorks() {
  return (
    <section 
    id="howitworks"
     className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="inline-block bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold tracking-wide uppercase text-sm">
            ❤️ HOW IT WORKS
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-6">
            Find Blood In
            <span className="text-red-600"> 3 Simple Steps</span>
          </h2>

          <p className="text-gray-600 text-lg mt-5 max-w-2xl mx-auto leading-8">
            Register as a donor, search for compatible blood, and connect
            instantly to help save lives during emergencies.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="group bg-white rounded-3xl border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center relative">

            <span className="absolute top-6 left-6 text-5xl font-bold text-red-100">
              01
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-red-50 group-hover:bg-red-600 transition-all duration-500 flex items-center justify-center mb-6 relative z-10">
              <FaUserPlus className="text-red-600 text-4xl group-hover:text-white transition-all duration-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Register
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Create your donor profile and become part of our trusted blood
              donation community.
            </p>

          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-3xl border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center relative">

            <span className="absolute top-6 left-6 text-5xl font-bold text-red-100">
              02
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-red-50 group-hover:bg-red-600 transition-all duration-500 flex items-center justify-center mb-6 relative z-10">
              <FaSearch className="text-red-600 text-4xl group-hover:text-white transition-all duration-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Search Blood
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Search verified donors by blood group, city, and availability in
              just a few clicks.
            </p>

          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-3xl border border-red-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8 text-center relative">

            <span className="absolute top-6 left-6 text-5xl font-bold text-red-100">
              03
            </span>

            <div className="w-20 h-20 mx-auto rounded-full bg-red-50 group-hover:bg-red-600 transition-all duration-500 flex items-center justify-center mb-6 relative z-10">
              <FaHeartbeat className="text-red-600 text-4xl group-hover:text-white transition-all duration-500" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900">
              Save Lives
            </h3>

            <p className="text-gray-500 mt-4 leading-7">
              Contact a verified donor instantly and help patients receive blood
              when every second matters.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;