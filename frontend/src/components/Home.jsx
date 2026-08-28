import { motion } from "framer-motion";
import manjuPhoto from "../assets/manju.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#050505] text-white px-6 py-10 md:px-12 lg:px-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* =====================================================
              LEFT — HERO INTRODUCTION
          ===================================================== */}

          <div className="lg:col-span-3 flex flex-col justify-center">

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-yellow-500 font-bold tracking-[4px] md:tracking-[6px] text-xs md:text-sm uppercase"
            >
              AI Python Full Stack Developer
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mt-5"
            >
              MANJU
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-pink-500">
                CHELLADURAI
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed mt-7"
            >
              Building modern web applications and AI-powered solutions
              using Python, Django, React and modern AI technologies.
            </motion.p>

            {/* =================================================
                ACTION BUTTONS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-8"
            >

              {/* View Projects */}
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-full bg-yellow-500 text-black font-bold text-sm hover:bg-yellow-400 hover:scale-105 transition-all"
              >
                View Projects →
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
                className="px-7 py-3.5 rounded-full border border-white/20 text-white font-bold text-sm hover:bg-white hover:text-black hover:scale-105 transition-all"
              >
                Download Resume
              </a>

            </motion.div>

            {/* =================================================
                SOCIAL LINKS
            ================================================= */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 mt-8"
            >

              {/* GitHub */}
              <a
                href="https://github.com/manjumathu91"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                GitHub ↗
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                LinkedIn ↗
              </a>

              {/* Email */}
              <a
                href="mailto:manjuchelladurai91@gmail.com"
                className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all"
              >
                Email ↗
              </a>

            </motion.div>

          </div>

          {/* =====================================================
              RIGHT — PROFILE IMAGE
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-2 flex items-center justify-center"
          >

            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 to-pink-500/20 rounded-[2.5rem] blur-2xl" />

              {/* Image */}
              <img
                src={manjuPhoto}
                alt="Manju Chelladurai - AI Python Full Stack Developer"
                className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-[380px] lg:h-[470px] rounded-[2rem] border border-white/10 object-cover shadow-2xl"
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

