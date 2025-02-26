import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cabaImage from './images/CABA-MDTP.jpg';
import pythonImage from './images/python.jpg';
import webImage from './images/web.jpg';
import typingImage from './images/typing.jpg';
import pcImage from './images/pc.jpg';
import officeImage from './images/office.jpg';
import excelImage from './images/excel.png';
import accessImage from './images/access.jpg';
import tallyImage from './images/tally.jpg';
import basicImage from './images/basic.jpg';

const courses = [
  {
    title: "CABA-MDTP",
    description: "Enroll in the CABA-MDTP course at LINGUA FRANCA and master computer applications, business accounting, and multilingual DTP. This NIELIT-certified program covers IT fundamentals, programming, office tools, graphic design, and more for a successful tech career.",
    duration: "12 months",
    image: cabaImage
  },
  {
    title: "Programming in Python",
    description: "Learn Python programming from basics to advanced concepts with practical projects.",
    duration: "3 months",
    image: pythonImage
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript and modern web development frameworks.",
    duration: "6 months",
    image: webImage
  },
  {
    title: "Hindi & English Typing",
    description: "Professional typing course for both Hindi and English languages.",
    duration: "2 months",
    image: typingImage
  },
  {
    title: "Computer Basics",
    description: "Learn Computer Basics at LINGUA FRANCA and build a strong foundation in essential skills like operating systems, file management, internet usage, and basic software applications. Perfect for beginners to start their digital journey with confidence!",
    duration: "3 months",
    image: basicImage
  },
  {
    title: "Photoshop & Corel Draw",
    description: "Learn professional graphic design tools and techniques.",
    duration: "3 months",
    image: pcImage
  },
  {
    title: "Accounting in Tally Prime + GST + Payroll",
    description: "Learn Accounting with Tally Prime at LINGUA FRANCA and master GST, invoicing, and financial management. Our course also covers Payroll for salary processing, tax deductions, and employee records management.",
    duration: "3 months",
    image: tallyImage
  },
  {
    title: "Complete MS Office",
    description: "Comprehensive training in Microsoft Office applications including Word, Excel, PowerPoint and Access.",
    duration: "3 months",
    image: officeImage
  },
  {
    title: "Advanced Excel",
    description: "Master advanced Excel features including macros, VBA, and data analysis.",
    duration: "2 month",
    image: excelImage
  },
  {
    title: "Database Management",
    description: "Learn database concepts and practical implementation using MS Access.",
    duration: "2 months",
    image: accessImage
  }
];

export default function Courses() {
  useEffect(() => {
    setPageMeta("Courses", "Explore our comprehensive IT and language courses");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of professional IT and language courses designed to boost your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Duration: {course.duration}</span>
                  <Link href="/admissions">
                    <Button variant="outline">Enroll Now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
