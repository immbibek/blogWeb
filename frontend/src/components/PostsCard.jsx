import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden">
      <Link to={`/post/${post.id}`}>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[220px] object-cover hover:scale-105 transition-all duration-300"
        />
      </Link>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-sm font-medium text-blue-600">{post.category}</p>
        <h2 className="text-lg md:text-xl font-semibold hover:underline">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm">{post.date}</p>
      </div>
    </div>
  );
};

export default PostCard;
