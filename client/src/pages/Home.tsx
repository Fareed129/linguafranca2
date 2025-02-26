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
      {/* Hero Section with Enhanced Gradient Background */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="block mb-2 text-blue-100"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Unlock Your IT Career With
              </motion.span>
              <motion.span 
                className="text-white"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                Lingua Franca
              </motion.span>
              <div className="text-2xl md:text-3xl mt-4 h-12 text-blue-100">
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
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-50 mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Comprehensive IT training and language courses in Haldwani. Transform your skills with industry-relevant education.
            </motion.p>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Link href="/admissions">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:from-amber-500 hover:via-orange-600 hover:to-yellow-600 text-white border-none transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Enroll Now
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-blue-100 text-blue-50 hover:bg-blue-100/10 hover:text-white transform hover:scale-105 transition-transform duration-200">
                  View Courses
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Slider Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-8 text-blue-900"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Popular Courses
          </motion.h2>
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-4 scroll-smooth"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
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
                <p className="text-sm text-gray-500 mb-4">Duration: {course.duration}</p>
                <Link href="/admissions">
                  <Button size="sm" className="w-full bg-gradient-to-r from-amber-400 via-orange-500 to-yellow-500 hover:from-amber-500 hover:via-orange-600 hover:to-yellow-600 text-white">
                    Enroll Now
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Student Testimonials</h2>
          <motion.div 
            className="flex gap-6 overflow-x-auto pb-4"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true, margin: "-100px" }}
          >
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
                <p className="text-sm text-gray-500 mb-4">{testimonial.course}</p>
                <Link href="/testimonials">
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">{blog.date}</p>
                    <Link href="/blog">
                      <Button 
                        variant="outline"
                        size="sm"
                        className="relative overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent hover:shadow-md"
                      >
                        Read More →
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}