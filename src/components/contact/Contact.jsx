export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-900 border-3 border-secondary">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-secondary"> Contact Us </h2>
          <p className="text-secondary font-bold text-[20px] mt-5"> Feel free to contact us anytime. </p>

          <div className="mt-8 space-y-4">
            <p className="font-bold text-secondary text-2xl"> 📍 Tashkent, Uzbekistan </p>
            <p className="font-bold text-secondary text-2xl"> 📞 +998 90 123 45 67 </p>
            <p className="font-bold text-secondary text-2xl"> 📧 info@megaschool.uz </p>
            <p className="font-bold text-secondary text-2xl"> 🕒 Mon - Sat | 09:00 - 20:00 </p>
          </div>
        </div>

        <div>
          <iframe title="map" className="rounded-2xl w-full h-[400px]" src="https://maps.google.com/maps?q=Tashkent&t=&z=13&ie=UTF8&iwloc=&output=embed" />
        </div>
      </div>
    </section>
  );
}