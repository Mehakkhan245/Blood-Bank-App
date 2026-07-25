function Donors() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold text-red-600">
        Donors
      </h1>

      <p className="mt-2 text-gray-500">
        Manage all blood donors here.
      </p>

      <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">

        <h2 className="text-2xl font-semibold mb-4">
          Registered Donors
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="text-left py-3">Name</th>
              <th className="text-left py-3">Blood Group</th>
              <th className="text-left py-3">City</th>
              <th className="text-left py-3">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b hover:bg-red-50">

              <td className="py-4">Ahmed Ali</td>
              <td>O+</td>
              <td>Karachi</td>
              <td className="text-green-600 font-semibold">Available</td>

            </tr>

            <tr className="border-b hover:bg-red-50">

              <td className="py-4">Sara Khan</td>
              <td>A-</td>
              <td>Lahore</td>
              <td className="text-green-600 font-semibold">Available</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Donors;