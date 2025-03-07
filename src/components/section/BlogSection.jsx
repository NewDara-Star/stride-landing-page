import BlogCard from "../ui/BlogCard";
import SectionTitle from "../ui/SectionTitle";

function BlogSection() {
  const blogPosts = [
    {
      imageUrl: "/images/exsci4.jpg",
      title: "The Science Behind Stride",
      text: "Discover the research-backed principles that make Stride effective.",
      date: "March 1, 2025",
    },
    {
      imageUrl: "/images/5minute-strength-workout.jpg",
      title: "5-Minute Workouts for Busy Schedules",
      text: "Short on time? These workouts maximize your efficiency.",
      date: "March 2, 2025",
    },
    {
      imageUrl: "/images/images.jpeg",
      title: "Hydration Myths: What You Need to Know",
      text: "Separating hydration facts from fiction to optimize performance.",
      date: "March 3, 2025",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6  animate-slideIn 
            bg-gradient-to-br from-white via-indigo-50/50 to-white
            dark:from-gray-900 dark:via-indigo-950/30 dark:to-gray-900
            transition-colors duration-300 pt-20 w-full h-auto">
      <div className="flex flex-col items-center justify-center gap-8 p-8 pt-28 h-auto max-w-7xl mx-auto">
        <SectionTitle title="Blog" text="Stay up-to-date with the latest fitness insights and trends."/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard 
              key={index} 
              imageUrl={post.imageUrl} 
              title={post.title} 
              text={post.text} 
              date={post.date} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;