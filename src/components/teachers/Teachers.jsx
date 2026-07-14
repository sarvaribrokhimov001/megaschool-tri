import TeacherCard from "./TeacherCard";

export default function Teachers() {
  const teachers = [
    {
      name: "Mr.Dilshod",
      subject: "Frontend Mentor",
      image: "/images/Mr__Dilshod.jpg",
    },
    {
      name: "Mr.Ibrokhimov",
      subject: `IELTS Instructor`,
      result: `IELTS result Overall: 9`,
      image: "/images/Mr__Ibrokhimov.jpg",
    },
    {
      name: "Mr.Olimjon",
      subject: "Backend Mentor",
      image: "/images/Mr__Olimjon.jpg",
    },
    {
      name: "Mr.Otabek",
      subject: "Mathematics Teacher",
      image: "/images/Mr__Otabek.jpg",
    },
    {
      name: "Mr.Timur",
      subject: "General English",
      image: "/images/Mr__Timur.jpg",
    },
    {
      name: "MS.Madina",
      subject: "Mother Tongue Teacher",
      image: "/images/MS__Madina.webp",
    }
  ];

  return (
    <section id="teachers" className="bg-gray-900 border-3 border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-secondary text-2xl font-bold"> OUR TEAM </span>
          <h2 className="text-4xl font-bold text-secondary mt-3"> Meet Our Teachers </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-14 w-[1500px]">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} {...teacher} />
          ))}
        </div>
      </div>
    </section>
  );
}