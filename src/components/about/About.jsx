export default function About() {
  const data = [
    { number: "10+", title: "Years Experience" },
    { number: "2500+", title: "Happy Students" },
    { number: "25+", title: "Professional Teachers" },
    { number: "15+", title: "Courses" },
  ];

  return (
    <section id="about" className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="about" className="rounded-3xl shadow-xl" />
        </div>

        <div>
          <span className="text-blue-600 font-semibold"> ABOUT US </span>
          <h2 className="text-4xl font-bold mt-3"> Welcome to MegaSchool </h2>
          <p className="text-gray-600 mt-6 leading-8"> MegaSchool is one of the leading learning centers providing English, Programming, Mathematics and IT courses.
            We help students build practical skills through experienced teachers and modern teaching methods.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            {data.map((item) => (
              <div key={item.title} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-3xl font-bold text-blue-600"> {item.number} </h3>
                <p className="mt-2 text-gray-600"> {item.title} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}