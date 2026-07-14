"use client";

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-5">
      <h1 className="text-4xl font-bold text-red-600"> Something went wrong ! </h1>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg" onClick={() => reset()}> Try Again ! </button>
    </div>
  );
}