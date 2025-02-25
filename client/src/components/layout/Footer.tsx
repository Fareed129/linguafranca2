import { Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-primary mb-4">LINGUA FRANCA</h2>
            <p className="text-gray-600 max-w-md">
              Empowering students with quality IT education and language skills in Haldwani, Uttarakhand.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li><a href="/courses" className="text-gray-600 hover:text-primary">Courses</a></li>
              <li><a href="/admissions" className="text-gray-600 hover:text-primary">Admissions</a></li>
              <li><a href="/contact" className="text-gray-600 hover:text-primary">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} LINGUA FRANCA SCHOOL OF IT AND LANGUAGES. All rights reserved.
          </p>
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} design by mo fareed
          </p>
        </div>
      </div>
    </footer>
  );
}
