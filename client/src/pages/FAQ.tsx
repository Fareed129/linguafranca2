import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "There are no specific educational requirements for most courses. Basic computer knowledge is recommended. You can enroll by filling out our admission form online or visiting our center."
  },
  {
    question: "How long are the courses?",
    answer: "Course duration varies from 1 to 6 months depending on the program. CABA-MDTP is 6 months, Web Development is 4 months, and most other courses range from 1-3 months."
  },
  {
    question: "Do you provide placement assistance?",
    answer: "Yes, we provide placement assistance to our students. We have tie-ups with local businesses and help students find suitable job opportunities."
  },
  {
    question: "What are the class timings?",
    answer: "We offer flexible batch timings from morning to evening to accommodate different schedules. You can choose the batch that best suits your timing."
  },
  {
    question: "Do you provide certificates after course completion?",
    answer: "Yes, we provide recognized certificates upon successful completion of the course."
  },
  {
    question: "Are the courses practical-oriented?",
    answer: "Yes, our courses focus heavily on practical training with real-world projects and hands-on exercises."
  },
  {
    question: "Do you offer online classes?",
    answer: "We primarily focus on in-person training to ensure quality learning, but some courses may have hybrid options available."
  },
  {
    question: "What is the fee structure?",
    answer: "Course fees vary depending on the program. Please contact us or visit our center for detailed fee information."
  }
];

export default function FAQ() {
  useEffect(() => {
    setPageMeta("FAQ", "Frequently asked questions about our courses and admission process");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our courses and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
}
