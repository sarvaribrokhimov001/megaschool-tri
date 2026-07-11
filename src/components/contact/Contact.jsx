export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold"> Contact Us </h2>
          <p className="text-gray-600 mt-5"> Feel free to contact us anytime. </p>

          <div className="mt-8 space-y-4">
            <p> 📍 Tashkent, Uzbekistan </p>
            <p> 📞 +998 90 123 45 67 </p>
            <p> 📧 info@megaschool.uz </p>
            <p> 🕒 Mon - Sat | 09:00 - 20:00 </p>
          </div>
        </div>

        <div>
          <iframe title="map" className="rounded-2xl w-full h-[400px]" src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </div>
    </section>
  );
}