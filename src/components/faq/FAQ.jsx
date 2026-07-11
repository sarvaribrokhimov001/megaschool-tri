"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const faq = [
    {
      question: "How do I register?",
      answer: "You can register online or visit our learning center.",
    },
    {
      question: "Do you provide certificates?",
      answer: "Yes. Every student receives an official certificate.",
    },
    {
      question: "Can I study online?",
      answer: "Yes. Both online and offline courses are available.",
    },
    {
      question: "How long are the courses?",
      answer: "Usually between 2 and 8 months depending on the course.",
    },
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold"> FAQ </span>
          <h2 className="text-4xl font-bold mt-3"> Frequently Asked Questions </h2>
        </div>

        <div className="mt-12">
          {faq.map((item, index) => (
            <div key={index} className="border rounded-xl mb-5 overflow-hidden">
              <button className="w-full flex justify-between items-center p-6 text-left font-semibold" onClick={() => setOpen(open === index ? null : index)}> {item.question}
                <span> {open === index ? "-" : "+"} </span>
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-600"> {item.answer} </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}