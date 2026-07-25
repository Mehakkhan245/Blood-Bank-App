function Requests() {
  return (
    <div className="p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-red-600">
          Blood Requests
        </h1>

        <p className="text-gray-500 mt-2">
          Manage all blood requests here.
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

        <table className="w-full">

          <thead className="bg-red-600 text-white">

            <tr>

              <th className="text-left px-6 py-4">Patient</th>

              <th className="text-left px-6 py-4">Blood Group</th>

              <th className="text-left px-6 py-4">Hospital</th>

              <th className="text-left px-6 py-4">City</th>

              <th className="text-left px-6 py-4">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-red-50">

              <td className="px-6 py-4">Ahmed Ali</td>

              <td>O+</td>

              <td>JPMC</td>

              <td>Karachi</td>

              <td>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Pending
                </span>
              </td>

            </tr>

            <tr className="border-b hover:bg-red-50">

              <td className="px-6 py-4">Sara Khan</td>

              <td>A-</td>

              <td>Civil Hospital</td>

              <td>Lahore</td>

              <td>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Approved
                </span>
              </td>

            </tr>

            <tr className="hover:bg-red-50">

              <td className="px-6 py-4">Ali Raza</td>

              <td>B+</td>

              <td>Aga Khan</td>

              <td>Karachi</td>

              <td>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                  Urgent
                </span>
              </td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Requests;