export default function TeacherCard({
  name,
  subject,
  image,
  result
}) {
  return (
    <div className="bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
      <img src={image} alt={name} className="w-full h-160 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-secondary"> {name} </h3>
        <p className="text-secondary font-bold mt-2"> {subject} </p>
        <p className="text-secondary font-bold mt-2"> {result} </p>
      </div>
    </div>
  );
}