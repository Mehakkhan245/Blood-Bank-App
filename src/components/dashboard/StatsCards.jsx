 import { Link } from "react-router-dom";
 import {
  FaUsers,
  FaTint,
  FaHospital,
  FaHeartbeat,
} from "react-icons/fa";

function StatsCards() {
  const cards = [
    {
      title: "Total Donors",
      value: "2,540",
      icon: <FaUsers />,
      color: "bg-red-500",
    },
    {
      title: "Blood Requests",
      value: "186",
      icon: <FaTint />,
      color: "bg-rose-500",
    },
    {
      title: "Partner Hospitals",
      value: "28",
      icon: <FaHospital />,
      color: "bg-pink-500",
    },
    {
      title: "Lives Saved",
      value: "1,245",
      icon: <FaHeartbeat />,
      color: "bg-red-700",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6"
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 text-sm">
                {card.title}
              </p>

              <h2 className="text-3xl font-bold text-gray-800 mt-2">
                {card.value}
              </h2>

            </div>

            <div
              className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg`}
            >
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </div>
  );
}

export default StatsCards;