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
    <section id="order" className="py-24 bg-gray-900 border-3 border-secondary">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-3xl shadow-xl p-10">
        <div className="text-center">
          <h2 className="text-4xl text-secondary font-bold"> Register Now </h2>
          <p className="text-secondary font-bold mt-3"> Fill in the form and our manager will contact you. </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <input type="text" name="name" placeholder="Full Name" required value={form.name} onChange={handleChange} className="w-full pl-6 border-3 border-secondary text-secondary text-2xl font-bold rounded-xl p-4" />
          <input type="tel" name="phone" placeholder="+998" required value={form.phone} onChange={handleChange} className="w-full border-3 pl-6 border-secondary text-secondary font-bold text-2xl rounded-xl p-4" />
            <select name="course" value={form.course} onChange={handleChange} required className="w-full border-3 rounded-xl p-4 border-secondary pl-6 text-secondary font-bold text-2xl">
              <option className="font-bold text-2xl text-secondary bg-gray-900"> Choose Course </option>
              <option className="font-bold text-2xl text-secondary bg-gray-900"> Frontend </option>
              <option className="font-bold text-2xl text-secondary bg-gray-900"> Backend </option>
              <option className="font-bold text-2xl text-secondary bg-gray-900"> IELTS </option>
              <option className="font-bold text-2xl text-secondary bg-gray-900"> Mathematics </option>
              <option className="font-bold text-2xl text-secondary bg-gray-900"> Graphic Design </option>
            </select>

          <button className="w-full bg-secondary text-gray-900 font-bold text-2xl hover:bg-gray-900 transition hover:text-secondary py-4 rounded-xl"> Submit </button>
        </form>
      </div>
    </section>
  );
}