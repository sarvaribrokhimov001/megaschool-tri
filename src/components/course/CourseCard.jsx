export default function CourseCard({
  title,
  description,
  duration,
  students,
}) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg p-7 hover:-translate-y-2 duration-300">
      <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center text-3xl"> 📘 </div>
        <h3 className="text-2xl text-secondary font-bold mt-5"> {title} </h3>
        <p className="text-secondary font-bold mt-4"> {description} </p>

      <div className="flex justify-between mt-6 text-sm text-secondary font-bold">
        <span> {duration} </span>
        <span> {students} </span>
      </div>

      <button className="w-full mt-6 border-3 border-secondary text-secondary font-bold text-[20px] py-3 rounded-xl hover:bg-secondary hover:text-gray-900 "> Learn More </button>
    </div>
  );
}