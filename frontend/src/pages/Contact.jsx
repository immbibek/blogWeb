import { Mail, Phone, MapPin } from "lucide-react";
import ContactCard from "../components/ContactCard";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen   text-black  py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ContactCard icon={Mail} title="Email" content="hello@example.com" />
          <ContactCard icon={Phone} title="Phone" content="+1 (555) 000-0000" />
          <ContactCard
            icon={MapPin}
            title="Office"
            content="123 Business Street, Suite 100, City, ST 12345"
          />
        </div>

        {/* Contact Form Section */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300">
              Send us a Message
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              We'll get back to you as soon as possible.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
