import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [totalDonors, setTotalDonors] = useState(0);
  const [availableDonors, setAvailableDonors] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
      alert("Logout Successfully ❤️");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersSnapshot = await getDocs(collection(db, "users"));
        const users = usersSnapshot.docs.map((doc) => doc.data());

        setTotalDonors(users.length);
        setAvailableDonors(
          users.filter((user) => user.available === true).length
        );

        const requestsSnapshot = await getDocs(collection(db, "requests"));
        setTotalRequests(requestsSnapshot.size);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-600 text-white p-5 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-bold">🩸 Blood Bank Dashboard</h1>

        <button
          onClick={handleLogout}
          className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Total Donors
          </h2>

          <p className="text-4xl font-bold text-red-600 mt-3">
            {totalDonors}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Blood Requests
          </h2>

          <p className="text-4xl font-bold text-red-600 mt-3">
            {totalRequests}
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-700">
            Available Donors
          </h2>

          <p className="text-4xl font-bold text-red-600 mt-3">
            {availableDonors}
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="mx-6 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-3">
          Welcome ❤️
        </h2>

        <p className="text-gray-600">
          Welcome to the Blood Bank Management System. You can manage donors,
          view blood requests and help save lives.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-red-50 p-5 rounded-xl">
            <h3 className="font-bold text-red-600">🩸 Donors</h3>
            <p className="text-gray-600 text-sm mt-2">
              View and manage registered blood donors.
            </p>
          </div>

          <div className="bg-red-50 p-5 rounded-xl">
            <h3 className="font-bold text-red-600">📋 Requests</h3>
            <p className="text-gray-600 text-sm mt-2">
              Check urgent blood requests.
            </p>
          </div>

          <div className="bg-red-50 p-5 rounded-xl">
            <h3 className="font-bold text-red-600">❤️ Save Lives</h3>
            <p className="text-gray-600 text-sm mt-2">
              Every donation can save someone's life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;