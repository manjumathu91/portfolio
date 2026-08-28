
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mt-16 p-[1px] rounded-[2rem] bg-gradient-to-r from-yellow-500 to-pink-500"
    >
      <div className="bg-[#050505] rounded-[2rem] p-6 md:p-12">

        {/* Heading */}
        <div className="mb-10">
          <p className="text-yellow-500 font-bold tracking-[4px] text-xs uppercase mb-2">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white">
            Who I Am
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Professional Overview */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 border border-white/10 p-8 md:p-10 rounded-3xl bg-zinc-900/30 hover:border-yellow-500/50 transition-all duration-300"
          >
            <h3 className="text-yellow-500 font-bold mb-5 tracking-wide">
              PROFESSIONAL OVERVIEW
            </h3>

            <p className="text-gray-300 leading-relaxed text-base md:text-lg">
              I am an AI Python Full Stack Developer with hands-on experience
              building web applications and AI-powered platforms using Python,
              Django, Django REST Framework, React and PostgreSQL.
            </p>

            <p className="text-gray-400 leading-relaxed mt-5">
              I enjoy developing secure REST APIs, responsive user interfaces
              and intelligent applications using modern AI technologies such
              as RAG, LLM APIs and vector databases.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">

              <div>
                <p className="text-yellow-500 text-2xl font-black">
                  AI
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  AI Applications
                </p>
              </div>

              <div>
                <p className="text-yellow-500 text-2xl font-black">
                  Full Stack
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  Web Development
                </p>
              </div>

              <div>
                <p className="text-yellow-500 text-2xl font-black">
                  REST
                </p>
                <p className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  API Development
                </p>
              </div>

            </div>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-yellow-500 to-pink-500 p-8 rounded-3xl text-black transition-all duration-300"
          >
            <h3 className="font-black text-xl mb-6">
              Let's Connect
            </h3>

            <div className="space-y-4 text-sm font-bold">

              <a
                href="mailto:manjuchelladurai91@gmail.com"
                className="block hover:underline break-all"
              >
                📧 manjuchelladurai91@gmail.com
              </a>

              <a
                href="tel:+916369850346"
                className="block hover:underline"
              >
                📞 +91 63698 50346
              </a>

            </div>
          </motion.div>
        </div>

        {/* Professional Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

          {[
            {
              label: "Role",
              value: "AI Python Full Stack Developer",
            },
            {
              label: "Location",
              value: "Chennai, Tamil Nadu",
            },
            {
              label: "Education",
              value: "B.E. Electronics & Communication Engineering",
            },
            {
              label: "Languages",
              value: "Tamil, English",
            },
          ].map((item, index) => (
            <motion.div
              key={item.label}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="border border-white/10 p-6 rounded-3xl bg-zinc-900/30 hover:border-pink-500/50 transition-all duration-300"
            >
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-2">
                {item.label}
              </p>

              <p className="text-white font-bold leading-relaxed">
                {item.value}
              </p>
            </motion.div>
          ))}

        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 mt-8">

          <a
            href="https://github.com/manjumathu91"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all"
          >
            LinkedIn ↗
          </a>

          <a
            href="mailto:manjuchelladurai91@gmail.com"
            className="px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-yellow-500 hover:text-black transition-all"
          >
            Email ↗
          </a>

        </div>

      </div>
    </motion.section>
  );
};

export default About;

