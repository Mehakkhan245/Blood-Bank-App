import { FaUser, FaTint, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Link } from "react-router-dom";
import { db } from "../firebase/config";
import { getDonors } from "../services/JsonService";
function Donors() {
const [donors, setDonors] = useState([]);
const [bloodGroup, setBloodGroup] = useState("");
const [city, setCity] = useState("");
const [availability, setAvailability] = useState("");
const [editingId, setEditingId] = useState(null);
const [editName, setEditName] = useState("");
const [editPhone, setEditPhone] = useState("");

useEffect(() => {
  const fetchDonors = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setDonors(data);
    } catch (error) {
      console.log("Firebase failed. Loading JSON Server...");

      const data = await getDonors();
      setDonors(data);
    }
  };

  fetchDonors();
}, []);
const filteredDonors = donors.filter((donor) => {
  return (
    (bloodGroup === "" || donor.blood === bloodGroup) &&
    (city === "" || donor.city === city) &&
    (
      availability === "" ||
      (availability === "available" && donor.available) ||
      (availability === "not" && !donor.available)
    )
  );
});
const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this donor?"
  );

  if (!confirmDelete) return;

  try {
    await deleteDoc(doc(db, "users", id));

    setDonors(donors.filter((donor) => donor.id !== id));

    alert("Donor Deleted Successfully ❤️");
  } catch (error) {
    alert(error.message);
  }
};
const handleEdit = async (donor) => {
  const newName = prompt("Enter New Name", donor.name);

  if (!newName) return;

  try {
    await updateDoc(doc(db, "users", donor.id), {
      name: newName,
    });

    setDonors(
      donors.map((d) =>
        d.id === donor.id ? { ...d, name: newName } : d
      )
    );

    alert("Donor Updated Successfully ❤️");
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <div className="min-h-screen bg-[#FFF5F5]">


      {/* Navbar */}

      <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-red-600">
          🩸 Blood Bank
        </h1>


        <div className="flex gap-6 text-gray-700">

      <Link to="/">
            Home
          </Link>

        <Link to="/donors">
            Donors
          </Link>

        <Link to="/requests">
            Requests
          </Link>

        </div>

      </nav>



      {/* Heading */}

      <section className="text-center mt-10">


        <h2 className="text-4xl font-bold text-gray-800">
          Find Blood Donors
        </h2>


        <p className="text-gray-600 mt-3">
          Search and filter registered blood donors
        </p>


      </section>



      {/* Filters */}

      <div className="max-w-5xl mx-auto mt-8 bg-white p-6 rounded-xl shadow flex gap-5">


        <select
        className="border p-3 rounded-lg w-full"
        value={bloodGroup}
        onChange={(e)=>setBloodGroup(e.target.value)}
        >

          <option value="">Blood Group</option>
<option value="O+">O+</option>
<option value="O-">O-</option>
<option value="A+">A+</option>
<option value="A-">A-</option>
<option value="B+">B+</option>
<option value="B-">B-</option>
<option value="AB+">AB+</option>
<option value="AB-">AB-</option>
</select>


        <select
        className="border p-3 rounded-lg w-full"
        value={city}
        onChange={(e)=>setCity(e.target.value)}
        >

          <option value="">City</option>
<option value="Karachi">Karachi</option>
<option value="Lahore">Lahore</option>

        </select>




        <select
        className="border p-3 rounded-lg w-full"
        value={availability}
        onChange={(e)=>setAvailability(e.target.value)}
        >

          <option value="">
            Availability
          </option>

          <option value="available">
            Available
          </option>

          <option value="not">
            Not Available
          </option>

        </select>


      </div>




      {/* Donor Cards */}

      <div className="max-w-5xl mx-auto mt-10 grid md:grid-cols-2 gap-6">


      {
        filteredDonors.map((donor)=>(


          <div
          key={donor.id}
          className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
          >


            <div className="flex items-center gap-3">

              <FaUser className="text-red-600 text-xl"/>
{editingId === donor.id ? (
  <input
    value={editName}
    onChange={(e) => setEditName(e.target.value)}
    className="border p-2 rounded w-full"
  />
) : (
  <h3 className="text-xl font-bold">{donor.name}</h3>
)}
            </div>



            <div className="mt-4 space-y-3 text-gray-700">


              <p className="flex gap-2 items-center">
                <FaTint className="text-red-600"/>
                {donor.blood}
              </p>



              <p className="flex gap-2 items-center">
                <FaMapMarkerAlt className="text-red-600"/>
                {donor.city}
              </p>


{editingId === donor.id ? (
  <input
    value={editPhone}
    onChange={(e) => setEditPhone(e.target.value)}
    className="border p-2 rounded w-full"
  />
) : (
  <p className="flex gap-2 items-center">
    <FaPhone className="text-red-600" />
    {donor.phone}
  </p>
)}


            </div>




            <div className="mt-5">

              {
                donor.available ?

                <span className="text-green-600 font-semibold">
                  🟢 Available
                </span>

                :

                <span className="text-red-600 font-semibold">
                  🔴 Not Available
                </span>
              }
<div className="mt-5 flex gap-3">
 {editingId === donor.id ? (
  <button
    onClick={handleUpdate}
    className="bg-green-600 text-white px-4 py-2 rounded-lg"
  >
    Save
  </button>
) : (
  <button
    onClick={() => handleEdit(donor)}
    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
  >
    Edit
  </button>
)}

  <button
    onClick={() => handleDelete(donor.id)}
    className="bg-red-600 text-white px-4 py-2 rounded-lg"
  >
    Delete
  </button>
</div>
            </div>



          </div>


        ))
      }


      </div>


    </div>
  )
}


export default Donors;