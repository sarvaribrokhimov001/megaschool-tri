export default function TeacherCard({
  name,
  subject,
  image,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl duration-300">
      <img src={image} alt={name} className="w-full h-72 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold"> {name} </h3>
        <p className="text-blue-600 mt-2"> {subject} </p>
      </div>
    </div>
  );
}