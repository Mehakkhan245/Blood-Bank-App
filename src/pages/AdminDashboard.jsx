import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

function AdminDashboard() {
  const [users, setUsers] = useState(0);
  const [requests, setRequests] = useState(0);
  const [available, setAvailable] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const usersSnap = await getDocs(collection(db, "users"));
      const requestsSnap = await getDocs(collection(db, "requests"));

      const userData = usersSnap.docs.map((doc) => doc.data());

      setUsers(userData.length);
      setRequests(requestsSnap.size);
      setAvailable(userData.filter((u) => u.available).length);
    };

    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      <div className="bg-red-700 text-white p-5 shadow-lg">
        <h1 className="text-3xl font-bold">
          Admin Dashboard
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="font-bold text-gray-700">
            Total Users
          </h2>

          <p className="text-4xl text-red-600 font-bold mt-3">
            {users}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="font-bold text-gray-700">
            Available Donors
          </h2>

          <p className="text-4xl text-green-600 font-bold mt-3">
            {available}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="font-bold text-gray-700">
            Blood Requests
          </h2>

          <p className="text-4xl text-blue-600 font-bold mt-3">
            {requests}
          </p>
        </div>

      </div>

      <div className="mx-6 bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Admin Panel
        </h2>

        <ul className="space-y-3 text-gray-700">
          <li>✅ View All Users</li>
          <li>✅ Manage Donors</li>
          <li>✅ Manage Blood Requests</li>
          <li>✅ Monitor Blood Availability</li>
        </ul>

      </div>

    </div>
  );
}

export default AdminDashboard;