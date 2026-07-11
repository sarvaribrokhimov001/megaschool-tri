export default function CourseCard({
  title,
  description,
  duration,
  students,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl"> 📘 </div>
        <h3 className="text-2xl font-bold mt-5"> {title} </h3>
        <p className="text-gray-600 mt-4"> {description} </p>

      <div className="flex justify-between mt-6 text-sm text-gray-500">
        <span> {duration} </span>
        <span> {students} </span>
      </div>

      <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"> Learn More </button>
    </div>
  );
}