import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "Web Development",
    content: "The practical approach to teaching web development helped me land my first job as a frontend developer."
  },
  {
    name: "Priya Patel",
    course: "CABA-MDTP",
    content: "Comprehensive course content and excellent faculty support. The hands-on training was invaluable."
  },
  {
    name: "Amit Kumar",
    course: "Python Programming",
    content: "Learning Python here was a game-changer. The projects we worked on gave me real-world experience."
  },
  {
    name: "Neha Singh",
    course: "Advanced Excel",
    content: "The advanced Excel course helped me improve my data analysis skills significantly."
  },
  {
    name: "Mohammad Ali",
    course: "Graphic Design",
    content: "Great experience learning Photoshop and Corel Draw. The instructors are very knowledgeable."
  },
  {
    name: "Sneha Gupta",
    course: "English Typing",
    content: "Improved my typing speed dramatically. The teaching methodology is very effective."
  }
];

export default function Testimonials() {
  useEffect(() => {
    setPageMeta("Testimonials", "See what our students say about their learning experience");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Student Testimonials</h1>
          <p className="text-xl text-gray-600">
            Hear what our students have to say about their learning journey with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-gray-600 mb-4">{testimonial.content}</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
