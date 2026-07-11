"use client";

import { useState } from "react";

export default function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Your application has been sent successfully !");

    setForm({
      name: "",
      phone: "",
      course: "",
    });
  };

  return (
    <section id="order" className="py-24 bg-gray-900">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold"> Register Now </h2>
          <p className="text-gray-600 mt-3"> Fill in the form and our manager will contact you. </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} className="w-full border rounded-xl p-4" />
          <input type="tel" name="phone" placeholder="+998" required value={form.phone} onChange={handleChange} className="w-full border rounded-xl p-4" />
            <select name="course" value={form.course} onChange={handleChange} required className="w-full border rounded-xl p-4">
              <option value=""> Choose Course </option>
              <option> Frontend </option>
              <option> Backend </option>
              <option> IELTS </option>
              <option> Mathematics </option>
              <option> Graphic Design </option>
            </select>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700"> Submit </button>
        </form>
      </div>
    </section>
  );
}