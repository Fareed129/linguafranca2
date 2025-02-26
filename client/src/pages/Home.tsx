
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
      {/* Hero Section with Gradient Background */}
      <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block mb-2">Unlock Your IT Career With</span>
              <span className="text-white">Lingua Franca</span>
              <div className="text-2xl md:text-3xl mt-4 h-12 text-white/90">
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
            <p className="text-xl text-white/80 mb-8">
              Comprehensive IT training and language courses in Haldwani. Transform your skills with industry-relevant education.
            </p>
            <div className="flex gap-4">
              <Link href="/admissions">
                <Button size="lg" variant="secondary" className="text-lg px-8">
                  Start Learning Today
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  View Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Our Popular Courses</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
              {
                title: "CABA-MDTP",
                description: "Complete computer applications and multimedia training",
                duration: "12 months"
              },
              {
                title: "Web Development",
                description: "Learn to build modern, responsive websites",
                duration: "6 months"
              },
              {
                title: "Python Programming",
                description: "Master the fundamentals of Python programming",
                duration: "3 months"
              }
            ].map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] bg-white rounded-lg shadow-lg p-6"
              >
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <p className="text-sm text-gray-500">Duration: {course.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
          <div className="flex gap-6 overflow-x-auto pb-4">
            {[
              {
                name: "Rahul Singh",
                course: "Web Development",
                text: "The course helped me land my dream job as a web developer."
              },
              {
                name: "Priya Sharma",
                course: "CABA-MDTP",
                text: "Comprehensive program that prepared me for the IT industry."
              },
              {
                name: "Amit Kumar",
                course: "Python Programming",
                text: "Excellent teaching methodology and practical approach."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="min-w-[300px] bg-gray-50 rounded-lg p-6"
              >
                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.course}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Latest Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Top Programming Languages in 2024",
                excerpt: "Discover the most in-demand programming languages for your career.",
                date: "Jan 15, 2024"
              },
              {
                title: "Career Opportunities in Web Development",
                excerpt: "Explore various career paths in web development.",
                date: "Jan 10, 2024"
              },
              {
                title: "Guide to Learning Python",
                excerpt: "Step-by-step guide to master Python programming.",
                date: "Jan 5, 2024"
              }
            ].map((blog, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                  <p className="text-sm text-gray-500">{blog.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
