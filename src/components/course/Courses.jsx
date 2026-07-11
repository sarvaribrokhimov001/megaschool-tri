import CourseCard from "./CourseCard";

export default function Course() {
  const courses = [
    {
      title: "Frontend Development",
      description: "HTML, CSS, JavaScript, React, Next.js",
      duration: "6 Months",
      students: "350 Students",
    },
    {
      title: "Backend Development",
      description: "Node.js, Express, MongoDB",
      duration: "8 Months",
      students: "220 Students",
    },
    {
      title: "IELTS Preparation",
      description: "Listening, Reading, Writing, Speaking",
      duration: "4 Months",
      students: "480 Students",
    },
    {
      title: "Mathematics",
      description: "School & University Mathematics",
      duration: "5 Months",
      students: "260 Students",
    },
    {
      title: "Graphic Design",
      description: "Photoshop, Illustrator, Figma",
      duration: "5 Months",
      students: "180 Students",
    },
    {
      title: "Computer Literacy",
      description: "Word, Excel, PowerPoint, Internet",
      duration: "2 Months",
      students: "500 Students",
    },
  ];

  return (
    <section id="courses bg-gray-900" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold"> OUR COURSES </span>
          <h2 className="text-4xl font-bold mt-3"> Popular Courses </h2>
          <p className="text-gray-600 mt-4"> Choose your favorite course and start your career today. </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}