"use client";

import { useEffect, useState } from "react";

export default function Cookie() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");

    if (!accepted) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookieAccepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-auto md:w-[400px] bg-white shadow-2xl rounded-2xl p-6 z-50">
      <h3 className="font-bold text-xl"> Cookie Notice </h3>
      <p className="text-gray-600 mt-3"> We use cookies to improve your experience. </p>
      <button onClick={accept} className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl"> Accept </button>
    </div>
  );
}