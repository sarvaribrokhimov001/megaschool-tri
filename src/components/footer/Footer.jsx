import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold"> MegaSchool </h2>
          <p className="text-gray-400 mt-4"> Modern Learning Center for everyone. </p>
        </div>

        <div>
          <h3 className="font-bold mb-4"> Navigation </h3>
          <ul className="space-y-3 text-gray-400">
            <li> <Link href="/"> Home </Link> </li>
            <li> <a href="#about"> About </a> </li>
            <li> <a href="#courses"> Courses </a> </li>
            <li> <a href="#contact"> Contact </a> </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4"> Courses </h3>
          <ul className="space-y-3 text-gray-400">
            <li> Frontend </li>
            <li> Backend </li>
            <li> IELTS </li>
            <li> Mathematics </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4"> Contact </h3>
          <p className="text-gray-400"> +998 90 123 45 67 </p>
          <p className="text-gray-400 mt-2"> info@megaschool.uz </p>
        </div>
      </div>

      <p className="border-t border-gray-700 text-center py-6 text-gray-400"> © 2026 MegaSchool. All Rights Reserved. </p>
    </footer>
  );
}