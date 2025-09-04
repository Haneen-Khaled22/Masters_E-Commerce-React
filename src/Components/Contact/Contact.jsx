import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { supabase } from "../../Helper/supabase-client"; // adjust path if needed

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    const { data, error } = await supabase
      .from("messages")
      .insert([
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
      ]);

    if (error) {
      console.error(error);
      setFeedback("❌ Something went wrong. Please try again.");
    } else {
      setFeedback("✅ Your message has been sent successfully!");
      setForm({ name: "", email: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <div className="contact-page w-full min-h-screen bg-gray-100">
      {/* Section 1 */}
      <div className="section1 w-full mt-20">
        <div className="container max-w-[1200px] w-full mx-auto p-4">
          <h2 className="text-center text-[40px] ">Get In Touch</h2>
          <p className="text-center max-w-md w-full mx-auto mt-4 text-gray-600">
            Have a question about sizing, shipping, or your order? Our team is
            here to help! Reach out and we'll get back to you as soon as
            possible.
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section2 w-full mt-12">
        <div className="container max-w-[1200px] w-full mx-auto flex flex-col md:flex-row justify-center gap-6 px-4">
          {/* Card 1 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center">
            <FaMapMarkerAlt className="text-2xl mx-auto text-teal-500 mb-2" />
            <h4 className="font-semibold">DowntTown, Alex, Egypt</h4>
            <p className="text-gray-500">
              Visit our studio to explore our latest collections.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center">
            <FaPhoneAlt className="text-2xl mx-auto text-teal-500 mb-2" />
            <h4 className="font-semibold">+20 128003382</h4>
            <p className="text-gray-500">
              Call us for order updates, sizing advice, or help with returns —
              we're here to assist!
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white p-6 shadow-md rounded-lg text-center">
            <FaEnvelope className="text-2xl mx-auto text-teal-500 mb-2" />
            <h4 className="font-semibold">basket@gmail.com</h4>
            <p className="text-gray-500">
              Send us an email anytime — we’ll get back to you within 24 hours,
              usually faster!
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="section3 w-full mt-16 mb-20">
        <div className="container max-w-[1200px] w-full mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h3 className="text-center text-2xl font-semibold mb-2">Send Us</h3>
          <p className="text-center text-gray-600 mb-6">
            Contact us for all your questions and opinions, or you can solve
            your problems in a shorter time with our contact offices.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email *"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {feedback && (
            <p className="text-center mt-4 text-gray-700">{feedback}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
