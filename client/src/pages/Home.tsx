import { motion } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export default function Home() {
  useEffect(() => {
    setPageMeta("Home", "Best computer coaching in Haldwani - Learn programming, web development & more");
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="block mb-2">Unlock Your IT Career With</span>
              <span className="text-primary">Lingua Franca</span>
              <div className="text-2xl md:text-3xl mt-4 h-12 text-primary/80">
                <TypeAnimation
                  sequence={[
                    'Best Computer Coaching in Haldwani',
                    2000,
                    'Top Computer Training Institute in Uttarakhand',
                    2000,
                    'Learn Computer Skills from Experts',
                    2000,
                    'Best IT Courses in Haldwani',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-medium"
                />
              </div>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Comprehensive IT training and language courses in Haldwani. Transform your skills with industry-relevant education.
            </p>
            <Link href="/admissions">
              <Button size="lg" className="text-lg px-8">
                Start Learning Today
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Featured Image */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c"
              alt="Modern IT Classroom"
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Course Highlights */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "CABA-MDTP",
                description: "Complete computer applications and multimedia training",
                image: "https://images.unsplash.com/photo-1502207252192-3e376a5b50bf"
              },
              {
                title: "Web Development",
                description: "Learn to build modern, responsive websites",
                image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70"
              },
              {
                title: "Python Programming",
                description: "Master the fundamentals of Python programming",
                image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8"
              }
            ].map((course, index) => (
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
                  <p className="text-gray-600">{course.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
