const results = [
  { number: "2500+", title: "Students" },
  { number: "98%", title: "Success Rate" },
  { number: "150+", title: "Certificates" },
  { number: "25+", title: "Teachers" },
];

export default function Results() {
  return (
    <section id="results" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold"> Our Results </h2>
          <p className="mt-4 text-blue-100"> Thousands of students have achieved success with MegaSchool. </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mt-14">
          {results.map((item) => (
            <div key={item.title} className="bg-white text-black rounded-2xl p-8 text-center">
              <h3 className="text-5xl font-bold text-blue-600"> {item.number} </h3>
              <p className="mt-3 text-gray-600"> {item.title} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}