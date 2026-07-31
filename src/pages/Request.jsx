import { useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";

function Request() {
  const [form, setForm] = useState({
    patientName: "",
    bloodGroup: "",
    city: "",
    hospital: "",
    contact: "",
    units: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "requests"), {
        ...form,
        createdAt: Timestamp.now(),
        status: "Pending",
      });

      alert("Blood Request Submitted ❤️");

      setForm({
        patientName: "",
        bloodGroup: "",
        city: "",
        hospital: "",
        contact: "",
        units: "",
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl"
      >
        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Blood Request
        </h1>

        <input
          type="text"
          name="patientName"
          placeholder="Patient Name"
          value={form.patientName}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <select
          name="bloodGroup"
          value={form.bloodGroup}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        >
          <option value="">Select Blood Group</option>
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
          name="hospital"
          placeholder="Hospital Name"
          value={form.hospital}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={form.contact}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="number"
          name="units"
          placeholder="Blood Units Required"
          value={form.units}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-6"
          required
        />

        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold">
          Submit Request
        </button>
      </form>
    </div>
  );
}

export default Request;