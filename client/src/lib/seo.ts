export const seoConfig = {
  title: "LINGUA FRANCA SCHOOL OF IT AND LANGUAGES",
  description: "Best computer coaching in Haldwani and Uttarakhand. Learn programming, web development, office tools and more.",
  keywords: [
    "best computer coaching in Haldwani",
    "best computer coaching in Uttarakhand",
    "computer courses",
    "programming courses",
    "CABA-MDTP",
    "Python programming",
    "web development course",
    "MS Office training",
    "typing course"
  ]
};

export const setPageMeta = (title: string, description?: string) => {
  document.title = `${title} | ${seoConfig.title}`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', description || seoConfig.description);
  }
};
