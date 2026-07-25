function RecentRequests() {
  const requests = [
    {
      patient: "Ahmed Ali",
      blood: "O+",
      city: "Karachi",
      hospital: "JPMC",
      status: "Pending",
    },
    {
      patient: "Sara Khan",
      blood: "A-",
      city: "Lahore",
      hospital: "Civil Hospital",
      status: "Completed",
    },
    {
      patient: "Ali Raza",
      blood: "B+",
      city: "Islamabad",
      hospital: "PIMS",
      status: "Pending",
    },
    {
      patient: "Fatima Noor",
      blood: "AB+",
      city: "Karachi",
      hospital: "Aga Khan",
      status: "Completed",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-lg p-6">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Recent Blood Requests
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Latest requests from patients
          </p>
        </div>

        <button className="bg-red-600 text-white px-5 py-2 rounded-xl hover:bg-red-700 transition">
          View All
        </button>

      </div>

      {/* Table */}

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-4 font-semibold text-gray-600">
                Patient
              </th>

              <th className="text-left py-4 font-semibold text-gray-600">
                Blood
              </th>

              <th className="text-left py-4 font-semibold text-gray-600">
                City
              </th>

              <th className="text-left py-4 font-semibold text-gray-600">
                Hospital
              </th>

              <th className="text-left py-4 font-semibold text-gray-600">
                Status
              </th>

            </tr>

          </thead>

          <tbody>

            {requests.map((item, index) => (

              <tr
                key={index}
                className="border-b hover:bg-red-50 transition"
              >

                <td className="py-4 font-medium text-gray-800">
                  {item.patient}
                </td>

                <td>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {item.blood}
                  </span>
                </td>

                <td className="text-gray-600">
                  {item.city}
                </td>

                <td className="text-gray-600">
                  {item.hospital}
                </td>

                <td>

                  {item.status === "Pending" ? (
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Pending
                    </span>
                  ) : (
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Completed
                    </span>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default RecentRequests;