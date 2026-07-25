import Sidebar from "../../components/dashboard/Sidebar";
import Topbar from "../../components/dashboard/Topbar";
import StatsCards from "../../components/dashboard/StatsCards";
import RecentRequests from "../../components/dashboard/RecentRequests";


function Dashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">

        {/* Topbar */}
        <Topbar />

        {/* Content */}
        <div className="p-8">

          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 rounded-3xl p-8 text-white shadow-xl mb-8">

            <h1 className="text-4xl font-bold">
              Welcome Back, Mehak 👋
            </h1>

            <p className="mt-3 text-red-100 text-lg">
              Manage donors, blood requests and help save more lives every day.
            </p>

          </div>

          {/* Stats Cards */}
          <StatsCards />

          {/* Recent Requests */}
          <div className="mt-8">
            <RecentRequests />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;