import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="group shadow-md rounded-lg overflow-hidden">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover transition-all duration-300 ease-in-out group-hover:scale-105"
      />
      <div className="p-4">
        <p className="text-sm text-blue-600">{post.category}</p>
        <h2 className="text-xl font-bold mb-2">{post.title}</h2>
        <p className="text-gray-500 text-sm mb-2">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <Link
          to={`/post/${post._id}`}
          className="text-blue-500 hover:underline"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
