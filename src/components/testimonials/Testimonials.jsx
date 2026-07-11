const testimonials = [
  {
    name: "Ali",
    course: "Frontend",
    comment: "The teachers explain everything clearly. I got my first job after completing the course.",
  },
  {
    name: "Madina",
    course: "IELTS",
    comment: "I increased my IELTS score from 5.5 to 7.5. Thank you MegaSchool !",
  },
  {
    name: "Bekzod",
    course: "Backend",
    comment: "The practical lessons were amazing. Highly recommended !",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-900 border-3 border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-secondary text-2xl font-bold"> TESTIMONIALS </span>
          <h2 className="text-4xl font-bold mt-2 text-secondary"> What Students Say </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-gray-800 rounded-2xl shadow-lg p-8">
              <div className="text-yellow-500 text-2xl"> ⭐⭐⭐⭐⭐ </div>
                <p className="text-secondary font-bold mt-5 leading-7"> "{item.comment}" </p>

              <div className="mt-8">
                <h3 className="font-bold text-2xl text-secondary"> {item.name} </h3>
                <p className="text-secondary font-bold"> {item.course} Student </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}