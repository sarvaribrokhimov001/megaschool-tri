export default function Hero() {
  return (
    <section className="pt-40 bg-gray-900 border-3 border-secondary min-h-[800px] flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        <div className="text-white">
          <span className="bg-inherit text-secondary border-3 border-secondary px-4 py-2 rounded-full font-bold"> #1 Learning Center </span>
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mt-8 leading-tight"> Learn Today <br /> Lead Tomorrow </h1>
          <p className="mt-6 text-lg text-secondary"> MegaSchool is a modern learning center where students improve
            English, Programming, Mathematics and IT skills with experienced teachers.
          </p>

          <div className="mt-10 flex gap-5 flex-wrap">
            <button className="bg-secondary text-gray-900 text-[20px] px-8 py-4 rounded-xl font-bold hover:scale-105 duration-300"> Start Learning </button>
            <button className="border-2 bg-inherit text-secondary border-secondary font-bold text-[20px] px-8 py-4 rounded-xl hover:bg-secondary hover:text-gray-900 duration-300"> Explore Courses </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-16">
            <div>
              <h2 className="text-4xl font-bold text-secondary"> 2500+ </h2>
              <p className="text-secondary"> Students </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-secondary"> 25+ </h2>
              <p className="text-secondary"> Teachers </p>
            </div>

            <div>
              <h2 className="text-4xl font-bold text-secondary"> 15+ </h2>
              <p className="text-secondary"> Courses </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" alt="students" className="rounded-3xl shadow-2xl w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
}