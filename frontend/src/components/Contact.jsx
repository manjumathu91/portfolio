import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill in all the fields.");
      return;
    }

    // Opens the user's email client
    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:manjuchelladurai91@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            HEADING
        ===================================================== */}

        <div className="text-center mb-16">

          <p className="text-pink-500 font-bold tracking-[4px] text-xs uppercase mb-3">
            Get In Touch
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            Let's Work Together
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Looking for an AI Python Full Stack Developer?
            Feel free to reach out for job opportunities,
            collaborations or project discussions.
          </p>

        </div>

        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* =================================================
              LEFT — CONTACT INFORMATION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-zinc-900/80 border border-white/10 rounded-[2rem] p-8 md:p-10"
          >

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-[3px] mb-3">
              Contact Me
            </p>

            <h3 className="text-3xl font-black mb-5">
              Let's Build Something Together
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">
              I am open to entry-level opportunities, full-stack
              development roles, AI projects and professional
              collaborations.
            </p>

            {/* Email */}

            <a
              href="mailto:manjuchelladurai91@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all group"
            >
              <span className="text-2xl">📧</span>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  Email
                </p>

                <p className="text-white font-semibold group-hover:text-yellow-500 transition-colors break-all">
                  manjuchelladurai91@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}

            <a
              href="tel:+916369850346"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all group mt-4"
            >
              <span className="text-2xl">📱</span>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  Phone
                </p>

                <p className="text-white font-semibold group-hover:text-yellow-500 transition-colors">
                  +91 63698 50346
                </p>
              </div>
            </a>

            {/* Location */}

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mt-4">
              <span className="text-2xl">📍</span>

              <div>
                <p className="text-gray-500 text-xs uppercase tracking-widest">
                  Location
                </p>

                <p className="text-white font-semibold">
                  Chennai, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Social Links */}

            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="https://github.com/manjumathu91"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:manjuchelladurai91@gmail.com"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                Email ↗
              </a>

            </div>

          </motion.div>

          {/* =================================================
              RIGHT — CONTACT FORM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <form
              onSubmit={handleSubmit}
              className="bg-zinc-900/80 border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl"
            >

              <p className="text-pink-500 text-xs font-bold uppercase tracking-[3px] mb-3">
                Send a Message
              </p>

              <h3 className="text-2xl font-black mb-7">
                Get In Touch
              </h3>

              {/* Name */}

              <div className="mb-5">

                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all"
                />

              </div>

              {/* Email */}

              <div className="mb-5">

                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all"
                />

              </div>

              {/* Message */}

              <div className="mb-5">

                <label className="block text-gray-400 text-sm font-semibold mb-2">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  className="w-full p-4 bg-zinc-800 border border-white/10 rounded-xl text-white placeholder-gray-500 outline-none focus:border-pink-500 transition-all resize-none"
                />

              </div>

              {/* Error */}

              {error && (
                <p className="text-red-400 bg-red-500/10 border border-red-500/20 p-3 rounded-xl text-sm mb-5">
                  {error}
                </p>
              )}

              {/* Submit */}

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-yellow-500 to-pink-500 text-black rounded-xl font-black hover:scale-[1.02] transition-all shadow-lg"
              >
                Send Message →
              </button>

              <p className="text-gray-600 text-xs text-center mt-4">
                Your email app will open to send the message.
              </p>

            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;

