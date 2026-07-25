import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/dashboard/Dashboard";
import Donors from "./pages/dashboard/Donors";
import Requests from "./pages/dashboard/Requests";
import Profile from "./pages/dashboard/Profile";
import EditProfile from "./pages/dashboard/EditProfile";
function App() {
   return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={<Dashboard />} />
<Route path="/donors" element={<Donors />} />
<Route path="/requests" element={<Requests />} />
<Route path="/profile" element={<Profile />} />
<Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
}

export default App;