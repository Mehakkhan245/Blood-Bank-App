import { useState } from "react";

function EditProfile() {
    const handleUpdate = () => {
  alert("Profile Updated Successfully ❤️");
};
    const [profileImage, setProfileImage] = useState("/images/profile.png");

const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (file) {
    setProfileImage(URL.createObjectURL(file));
  }
};
  const [name, setName] = useState("Mehak Khan");
  const [email, setEmail] = useState("mehak@gmail.com");
  const [phone, setPhone] = useState("+92 300 1234567");
  const [bloodGroup, setBloodGroup] = useState("O+");
  const [city, setCity] = useState("Karachi");
  return (
  <div className="min-h-screen bg-gray-100 p-8">

    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8">

      <h1 className="text-4xl font-bold text-red-600 mb-8">
        Edit Profile
      </h1>

      <div className="flex flex-col items-center mb-8">
        <img
          src={profileImage}
          alt="Profile"
          className="w-36 h-36 rounded-full border-4 border-red-600 object-cover"
        />

        <label className="mt-4 bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg cursor-pointer">
          Change Photo

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </label>
      </div>

      <div className="space-y-5">
  <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <select
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <option>O+</option>
            <option>O-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>

          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            onClick={handleUpdate}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
          >
            Update Profile
          </button>

        </div>
        </div>
        </div>
  );
}

export default EditProfile;