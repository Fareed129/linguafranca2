import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import cabaImage from './images/CABA-MDTP.jpg';

const courses = [
  {
    title: "CABA-MDTP",
    description: "Comprehensive computer applications and multimedia development training program covering essential IT skills.",
    duration: "6 months",
    image: cabaImage
  },
  {
    title: "Programming in Python",
    description: "Learn Python programming from basics to advanced concepts with practical projects.",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript and modern web development frameworks.",
    duration: "4 months",
    image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70"
  },
  {
    title: "Hindi & English Typing",
    description: "Professional typing course for both Hindi and English languages.",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1596496181848-3091d4878b24"
  },
  {
    title: "Photoshop & Corel Draw",
    description: "Learn professional graphic design tools and techniques.",
    duration: "3 months",
    image: "https://images.unsplash.com/photo-1468912637438-582f3f543cba"
  },
  {
    title: "Complete MS Office",
    description: "Comprehensive training in Microsoft Office applications including Word, Excel, PowerPoint and Access.",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1502207252192-3e376a5b50bf"
  },
  {
    title: "Advanced Excel",
    description: "Master advanced Excel features including macros, VBA, and data analysis.",
    duration: "1 month",
    image: "https://images.unsplash.com/photo-1552793494-111afe03d0ca"
  },
  {
    title: "Database Management",
    description: "Learn database concepts and practical implementation using MS Access.",
    duration: "2 months",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
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
