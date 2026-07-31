import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

function Donate() {
  const [form, setForm] = useState({
    name: "",
    blood: "",
    city: "",
    phone: "",
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "users"), form);

      alert("Donor Added Successfully ❤️");

      setForm({
        name: "",
        blood: "",
        city: "",
        phone: "",
        available: true,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-red-50 flex justify-center items-center p-6">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg"
      >

        <h1 className="text-3xl font-bold text-center text-red-600 mb-6">
          Donate Blood ❤️
        </h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <select
          name="blood"
          value={form.blood}
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
          name="city"
          placeholder="City"
          value={form.city}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg mb-4"
          required
        />

        <button
          className="w-full bg-red-600 hover:bg-red-700 text-white p-3 rounded-lg font-bold"
        >
          Donate Blood
        </button>

      </form>

    </div>
  );
}

export default Donate;