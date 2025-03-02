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
    <section className="flex flex-col items-center justify-center gap-8 p-8 h-auto ">
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
    </section>
  );
}

export default BlogSection;