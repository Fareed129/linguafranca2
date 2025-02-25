import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";

const images = [
  {
    src: "https://images.unsplash.com/photo-1586144131462-fa2a2b6d070c",
    alt: "Modern IT Classroom"
  },
  {
    src: "https://images.unsplash.com/photo-1502207252192-3e376a5b50bf",
    alt: "Students Learning"
  },
  {
    src: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70",
    alt: "Computer Lab"
  },
  {
    src: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    alt: "Programming Class"
  },
  {
    src: "https://images.unsplash.com/photo-1596496181848-3091d4878b24",
    alt: "Student Projects"
  },
  {
    src: "https://images.unsplash.com/photo-1468912637438-582f3f543cba",
    alt: "Training Session"
  }
];

export default function Gallery() {
  useEffect(() => {
    setPageMeta("Gallery", "View our modern facilities and learning environment");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-lg font-medium">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
