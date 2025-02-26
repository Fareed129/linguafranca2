import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import aiImage from './images/ai.webp';

const courses = [
  {
    title: "CABA-MDTP by NIELIT",
    description: "Enroll in Government certified course Computer Application Buisness Accounting & Multilingual-DTP course at LINGUA FRANCA and master computer applications, business accounting, and multilingual DTP. This NIELIT-certified program covers IT fundamentals, programming, office tools, graphic design, and more for a successful tech career.",
    duration: "12 months",
    image: cabaImage,
    syllabus: `Module I: Fundamentals of Information Technology
Module II: Internet Technology and Web Designing.
Module III: Financial Accounting Using Tally & Personality Development.
Module IV: Emerging trends in IT
Module V: Multilingual DTP.
Module VI: Artificial Intelligence and Machine Learning Python`
  },
  {
    title: "Programming in Python",
    description: "Learn Python programming from basics to advanced concepts with practical projects.",
    duration: "3 months",
    image: pythonImage,
    syllabus: `✅ Introduction to Python – Basics, installation, and syntax
✅ Variables & Data Types – Strings, numbers, lists, dictionaries, operators
✅ Control Flow – Conditional statements, loops (for, while)
✅ Functions & Modules – Defining functions, lambda, importing modules
✅ File Handling – Reading/writing files (txt, csv, json)
✅ OOP in Python – Classes, objects, inheritance, polymorphism
✅ Exception Handling – Try-except, error handling
✅ Libraries & Frameworks – NumPy, Pandas, Matplotlib, Tkinter (GUI)
✅ Database Management – MySQL connectivity, CRUD operations
✅ Web Development (Basic) – Flask framework, routes, templates
✅ Mini Project & Final Assessment – Hands-on project, debugging, testing

This course covers everything from fundamentals to real-world applications! 🚀`
  },
  {
    title: "Working with AI Tools",
    description: "This course provides hands-on training in using AI-powered tools for automation, productivity, and creativity. Learn to leverage AI for content generation, data analysis, design, coding assistance, and business applications. Topics include AI chatbots, image and video editing tools, speech recognition, and automation software. By the end of the course, you’ll be able to integrate AI tools into daily workflows to enhance efficiency and innovation",
    duration: "1 months",
    image: aiImage,
    syllabus: `✅ Introduction to AI & Machine Learning – Understanding AI concepts, applications, and ethics
✅ AI-Powered Productivity Tools – AI chatbots, virtual assistants, and automation tools
✅ AI in Content Creation – Text generation, AI-powered writing assistants, and content optimization
✅ AI for Image & Video Editing – AI-based photo enhancement, video editing, and design automation
✅ AI in Data Analysis – AI-driven data insights, visualization, and predictive analytics
✅ AI for Coding & Development – AI-powered code generation, debugging, and automation tools
✅ AI in Business & Marketing – AI for SEO, customer engagement, and marketing automation
✅ Practical Implementation – Hands-on projects and real-world applications`
  },
  {
    title: "Web Development",
    description: "Master HTML, CSS, JavaScript and modern web development frameworks.",
    duration: "6 months",
    image: webImage,
    syllabus: `✅ Introduction to Web Development – Basics of front-end & back-end, development tools
✅ HTML – Structure, elements, forms, tables, media integration
✅ CSS – Styling, layouts, flexbox, grid, animations, responsiveness
✅ JavaScript – Variables, functions, DOM manipulation, events, ES6+ features
✅ Bootstrap (Optional) – Responsive design, components, utilities
✅ PHP – Syntax, variables, loops, functions, form handling
✅ MySQL Database – CRUD operations, database connections with PHP
✅ AJAX & JSON – Asynchronous requests, dynamic content loading
✅ User Authentication – Login, registration, sessions, security
✅ Project Development – Full-stack web project with real-world application`
  },
  {
    title: "Hindi & English Typing",
    description: "Professional typing course for both Hindi and English languages.",
    duration: "2 months",
    image: typingImage,
    syllabus:`✅ Introduction to Typing – Importance, keyboard layout, and finger positioning
✅ English Typing – Speed improvement, accuracy, common shortcuts
✅ Hindi Typing – Using Kruti Dev and Mangal fonts, Unicode typing
✅ Typing Practice – Paragraphs, dictation, error correction techniques
✅ Typing Software & Tools – Learning with typing tutor applications
✅ Speed & Accuracy Tests – Regular assessments for progress tracking
✅ Government & Competitive Exam Typing Preparation – Meeting official requirements`
  },
  {
    title: "Computer Basics",
    description: "Learn Computer Basics at LINGUA FRANCA and build a strong foundation in essential skills like operating systems, file management, internet usage, and basic software applications. Perfect for beginners to start their digital journey with confidence!",
    duration: "3 months",
    image: basicImage,
    syllabus: `✅ Introduction to Computers – Understanding hardware, software, and operating systems
✅ Windows & File Management – Desktop navigation, file/folder organization, shortcuts
✅ MS Office Basics – Word (documents), Excel (spreadsheets), PowerPoint (presentations)
✅ Internet & Email – Browsing, online safety, creating & managing emails
✅ Basic Troubleshooting – Common issues, security tips, and system maintenance
✅ Typing Skills – Improving speed and accuracy in English & Hindi
✅ Practical Applications – Hands-on exercises for daily computer usage`
  },
  {
    title: "Photoshop & Corel Draw",
    description: "Learn professional graphic design tools and techniques.",
    duration: "3 months",
    image: pcImage,
    syllabus:`✅ Introduction to Graphic Design – Basics of digital designing, UI/UX concepts
✅ Adobe Photoshop

Image editing, retouching, and color correction
Layers, masks, filters, and blending modes
Creating social media posts, banners, and advertisements
✅ CorelDRAW

Vector graphics, logo design, and illustrations
Working with typography, shapes, and layouts
Designing business cards, brochures, and flyers
✅ Advanced Techniques – Special effects, mockups, and export settings
✅ Project-Based Learning – Hands-on practice with real-world design projects

Master the art of creative designing with industry-standard tools! 🚀`
  },
  {
    title: "Accounting in Tally Prime + GST + Payroll",
    description: "Learn Accounting with Tally Prime at LINGUA FRANCA and master GST, invoicing, and financial management. Our course also covers Payroll for salary processing, tax deductions, and employee records management.",
    duration: "3 months",
    image: tallyImage,
    syllabus:`✅ Introduction to Tally Prime – Interface, company creation, and configuration
✅ Accounting Fundamentals – Ledger, vouchers, and financial statements
✅ GST (Goods & Services Tax) – GST setup, invoicing, returns, and reports
✅ Inventory Management – Stock groups, categories, and valuation methods
✅ Payroll Management – Employee records, salary processing, PF, and ESI calculations
✅ Banking & Taxation – Cheque printing, reconciliation, TDS, and other tax reports
✅ Final Accounts & Reporting – Balance sheets, profit & loss statements, and MIS reports

Gain expertise in professional accounting with real-time business applications! 🚀`
  },
  {
    title: "Complete MS Office",
    description: "Comprehensive training in Microsoft Office applications including Word, Excel, PowerPoint and Access.",
    duration: "3 months",
    image: officeImage,
    syllabus:`✅ Introduction to MS Office – Overview of Word, Excel, PowerPoint, and Outlook
✅ MS Word – Document creation, formatting, tables, mail merge, and templates
✅ MS Excel – Data entry, formulas, functions, charts, pivot tables, and automation
✅ MS PowerPoint – Slide design, animations, transitions, and professional presentations
✅ MS Outlook – Email management, calendar scheduling, and contacts organization
✅ Advanced Features – Collaboration tools, cloud integration, and security settings
✅ Practical Applications – Hands-on projects for office and business use`
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
    image: accessImage,
    syllabus:`✅ Introduction to MS Access – Overview, interface, and database concepts
✅ Tables & Relationships – Creating tables, defining data types, setting primary keys
✅ Queries & Data Retrieval – Using Select, Action, and Parameter queries
✅ Forms & Reports – Designing user-friendly forms and generating reports
✅ Data Validation & Security – Input masks, validation rules, and user access control
✅ Macros & Automation – Automating tasks with macros and VBA integration
✅ Project-Based Learning – Developing real-world applications like inventory or student management systems`
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{course.title}</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {course.title === "CABA-MDTP by NIELIT" ? "Get Diploma" : "Get Certification"}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <Accordion type="single" collapsible className="w-full mb-4">
                  <AccordionItem value="syllabus">
                    <AccordionTrigger>View Syllabus</AccordionTrigger>
                    <AccordionContent>
                      <div className="whitespace-pre-line text-gray-600">
                        {course.syllabus}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
