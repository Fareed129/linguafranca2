import { motion } from "framer-motion";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/seo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Getting Started with Python Programming",
    date: "March 15, 2024",
    excerpt: "Learn the basics of Python programming and why it's great for beginners.",
    readTime: "5 min read"
  },
  {
    title: "The Importance of Digital Skills in Today's World",
    date: "March 12, 2024",
    excerpt: "Discover why digital literacy is crucial for career success in the modern workplace.",
    readTime: "4 min read"
  },
  {
    title: "Web Development Trends in 2024",
    date: "March 10, 2024",
    excerpt: "Stay updated with the latest trends and technologies in web development.",
    readTime: "6 min read"
  },
  {
    title: "Mastering Microsoft Excel: Tips and Tricks",
    date: "March 8, 2024",
    excerpt: "Advanced Excel techniques to improve your productivity and data analysis skills.",
    readTime: "7 min read"
  },
  {
    title: "The Future of AI in Education",
    date: "March 5, 2024",
    excerpt: "Exploring how artificial intelligence is transforming the education sector.",
    readTime: "5 min read"
  }
];

export default function Blog() {
  useEffect(() => {
    setPageMeta("Blog", "Read our latest articles on IT education and digital skills");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest in technology and education
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                  <button className="text-primary hover:text-primary/80 mt-4 text-sm font-medium">
                    Read More →
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
