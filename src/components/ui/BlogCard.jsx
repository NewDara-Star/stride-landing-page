import PropTypes from "prop-types";

function BlogCard({ imageUrl, title, text, date }) {
  return (
    <article className="border p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-2">{text}</p>
      <p className="text-sm text-gray-500">{date}</p>
    </article>
  );
}

BlogCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default BlogCard;