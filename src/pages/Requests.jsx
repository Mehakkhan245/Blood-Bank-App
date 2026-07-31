import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { addRequest } from "../services/jsonService";

function Requests() {
  const [name, setName] = useState("");
  const [blood, setBlood] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState([]);
 const handleRequest = async () => {
  if (!name || !blood || !city || !phone) {
    alert("Please fill all fields");
    return;
  }

  try {
    await addDoc(collection(db, "requests"), {
      name,
      blood,
      city,
      phone,
      createdAt: new Date(),
    });

    alert("Blood Request Submitted Successfully ❤️");
    fetchRequests();
    
  } catch (error) {
    try {
      await addRequest({
        name,
        blood,
        city,
        phone,
        createdAt: new Date(),
      });

      alert("Saved in JSON Server ❤️");
    } catch (err) {
      alert("Both Firebase and JSON Server failed");
      return;
    }
  }
  setName("");
  setBlood("");
  setCity("");
  setPhone("");
};
const fetchRequests = async () => {
  try {
    const snapshot = await getDocs(collection(db, "requests"));

    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setRequests(data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchRequests();
}, []);

const handleDelete = async (id) => {
  const confirmDelete = window.confirm(
    "Delete this request?"
  );

  if (!confirmDelete) return;

  await deleteDoc(doc(db, "requests", id));

  alert("Request Deleted ❤️");

  fetchRequests();
};
  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">

        <h1 className="text-3xl font-bold text-red-600 text-center mb-6">
          Blood Request
        </h1>

        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <select
          value={blood}
          onChange={(e) => setBlood(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        >
          <option value="">Select Blood Group</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />
        <button
          onClick={handleRequest}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold"
        >
          Submit Request
        </button>
<div className="mt-8">
  <h2 className="text-2xl font-bold mb-4">
    Blood Requests
  </h2>

  {requests.map((request) => (
    <div
      key={request.id}
      className="border rounded-lg p-4 mb-3"
    >
      <h3 className="font-bold">{request.name}</h3>

      <p>Blood: {request.blood}</p>

      <p>City: {request.city}</p>

      <p>Phone: {request.phone}</p>

      <button
        onClick={() => handleDelete(request.id)}
        className="mt-3 bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  ))}
</div>
      </div>

    </div>
  );
}

export default Requests;