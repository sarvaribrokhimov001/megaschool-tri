import TeacherCard from "./TeacherCard";

export default function Teachers() {
  const teachers = [
    {
      name: "John Smith",
      subject: "Frontend Mentor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Brown",
      subject: "IELTS Instructor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Lee",
      subject: "Backend Mentor",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
    {
      name: "Sarah Wilson",
      subject: "Mathematics Teacher",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  return (
    <section id="teachers" className="bg-gray-900 border-3 border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-secondary text-2xl font-bold"> OUR TEAM </span>
          <h2 className="text-4xl font-bold text-secondary mt-3"> Meet Our Teachers </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}