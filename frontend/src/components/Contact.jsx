import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all the fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setError("Unable to send your message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-pink-500 font-bold tracking-[4px] text-xs uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            Have a project, opportunity, or question? Feel free to send me
            a message. I would be happy to connect with you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-black mb-4">
                Let's Build Something Together
              </h3>

              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                I am open to full-stack development opportunities,
                AI-powered projects, and collaborative work.
                Feel free to reach out through email or the contact form.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-5">

              <a
                href="mailto:manjuchelladurai91@gmail.com"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl">
                  📧
                </span>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    Email
                  </p>

                  <p className="text-white font-semibold group-hover:text-pink-500 transition-colors">
                    manjuchelladurai91@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+916369850346"
                className="flex items-center gap-4 group"
              >
                <span className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl">
                  📞
                </span>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    Phone
                  </p>

                  <p className="text-white font-semibold group-hover:text-pink-500 transition-colors">
                    +91 63698 50346
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-xl">
                  📍
                </span>

                <div>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">
                    Location
                  </p>

                  <p className="text-white font-semibold">
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-2">

              <a
                href="https://github.com/manjumathu91"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-gray-300 font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all"
              >
                LinkedIn ↗
              </a>

            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/80 p-7 md:p-9 rounded-[2rem] border border-white/10 space-y-5 shadow-2xl"
            >

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Name
                </label>

                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>

                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="5"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all resize-none"
                />
              </div>

              {/* Error */}
              {error && (
                <p className="text-red-400 text-sm font-semibold bg-red-500/10 border border-red-500/20 p-3 rounded-xl">
                  {error}
                </p>
              )}

              {/* Submit */}
              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-pink-500 text-white rounded-xl font-bold hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-pink-500/20"
              >
                {loading ? "Sending..." : "Send Message →"}
              </button>

              <p className="text-gray-600 text-xs text-center">
                Your message will be sent directly to my email.
              </p>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Success Message */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="fixed bottom-8 right-8 bg-green-500 text-black px-6 py-4 rounded-2xl z-50 font-bold shadow-2xl"
        >
          Message sent successfully! 🎉
        </motion.div>
      )}
    </section>
  );
};

export default Contact;

