import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

export default function About() {
  useEffect(() => {
    setPageMeta("About Us", "Learn about the best computer coaching center in Haldwani");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Lingua Franca</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
              alt="Professional Learning Environment"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Established with a vision to provide quality IT education in Haldwani, Lingua Franca has emerged as the leading computer coaching center in Uttarakhand. Our commitment to excellence and industry-relevant curriculum sets us apart.
            </p>
            <p className="text-gray-600">
              We believe in practical learning and hands-on experience, ensuring our students are well-prepared for the modern workplace.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Mission</h3>
              <p className="text-gray-600">
                To empower students with cutting-edge IT skills and comprehensive language training, preparing them for successful careers in the digital age.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">Vision</h3>
              <p className="text-gray-600">
                To be recognized as the premier institution for IT education in Uttarakhand, known for excellence, innovation, and student success.
              </p>
            </motion.div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Faculty",
                description: "Experienced instructors with industry expertise"
              },
              {
                title: "Modern Facilities",
                description: "State-of-the-art computer labs and learning resources"
              },
              {
                title: "Practical Approach",
                description: "Focus on hands-on training and real-world projects"
              },
              {
                title: "Personalized Attention",
                description: "Small batch sizes ensuring individual attention"
              },
              {
                title: "Industry Connections",
                description: "Strong network with local businesses for placements"
              },
              {
                title: "Flexible Schedule",
                description: "Multiple batches to suit your timing needs"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
