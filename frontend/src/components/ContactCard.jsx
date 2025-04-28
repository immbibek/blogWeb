const ContactCard = ({ icon: Icon, title, content, className }) => {
  const handleClick = () => {
    if (title === "Email") {
      window.location.href = `mailto:${content}`;
    } else if (title === "Phone") {
      window.location.href = `tel:${content}`;
    } else if (title === "Office") {
      window.open(
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          content
        )}`,
        "_blank"
      );
    }
  };

  return (
    <div
      className={` rounded-lg shadow-md p-6 transition-all duration-300 hover:scale-105 cursor-pointer  ${className}`}
      onClick={handleClick}
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <Icon className="w-8 h-8  text-black" />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default ContactCard;
