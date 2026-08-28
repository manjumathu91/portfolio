import { motion } from "framer-motion";

const Education = () => {
  const educationData = [
    {
      type: "Education",
      icon: "🎓",
      year: "2012",
      title: "B.E. Electronics & Communication Engineering",
      institution: "Maharaja Engineering College",
      location: "Perundurai, Erode",
      description:
        "Bachelor's degree in Electronics and Communication Engineering with a strong technical foundation and problem-solving skills.",
      certificateLink: "#",
    },

    {
      type: "Education",
      icon: "🎓",
      year: "2009",
      title: "Diploma in Electronics & Communication Engineering",
      institution: "Government Polytechnic College",
      location: "Coimbatore",
      description:
        "Diploma in Electronics and Communication Engineering with practical and technical knowledge.",
      certificateLink: "#",
    },

    {
      type: "Professional Course",
      icon: "🤖",
      year: "2026",
      title: "AI Python Full Stack Development",
      institution: "Professional Full Stack Development Course",
      location: "",
      description:
        "Hands-on training in Python, Django, Django REST Framework, React, REST APIs, databases and AI application development.",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "React",
        "PostgreSQL",
        "AI",
      ],
      certificateLink: "#",
    },

    {
      type: "Internship",
      icon: "💼",
      year: "5 Months",
      title: "AI Python Full Stack Development Internship",
      institution: "Vetri IT Systems",
      location: "Surandai",
      description:
        "5 months of hands-on internship experience in full-stack web application development using Python, Django, React and REST APIs.",
      skills: [
        "Python",
        "Django",
        "React",
        "REST APIs",
        "Full Stack Development",
      ],
      certificateLink: "#",
    },
  ];

  return (
    <section
      id="education"
      className="py-20 px-6 bg-[#050505] text-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold tracking-[4px] text-xs uppercase mb-3">
            Education & Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            My Journey
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            My academic background, professional training and hands-on
            development experience.
          </p>

        </div>

        {/* =====================================================
            EDUCATION / COURSE / INTERNSHIP CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {educationData.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative bg-zinc-900/70 border border-white/10 rounded-3xl p-7 md:p-8 overflow-hidden hover:border-yellow-500/50 transition-all duration-300"
            >

              {/* Background Glow */}

              <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-yellow-500/10 to-pink-500/10 rounded-full blur-3xl group-hover:from-yellow-500/20 group-hover:to-pink-500/20 transition-all duration-500" />

              <div className="relative">

                {/* =================================================
                    TOP ROW
                ================================================= */}

                <div className="flex items-start justify-between gap-4 mb-7">

                  {/* Icon */}

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-yellow-500 to-pink-500 flex items-center justify-center text-2xl shadow-lg">
                    {item.icon}
                  </div>

                  {/* Type */}

                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                      item.type === "Internship"
                        ? "bg-pink-500/10 text-pink-400 border border-pink-500/20"
                        : item.type === "Professional Course"
                        ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                        : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                    }`}
                  >
                    {item.type}
                  </span>

                </div>

                {/* =================================================
                    YEAR / DURATION
                ================================================= */}

                <p className="text-yellow-500 text-sm font-bold tracking-widest uppercase mb-2">
                  {item.year}
                </p>

                {/* =================================================
                    TITLE
                ================================================= */}

                <h3 className="text-xl md:text-2xl font-black text-white leading-snug mb-3">
                  {item.title}
                </h3>

                {/* =================================================
                    INSTITUTION
                ================================================= */}

                <p className="text-gray-300 font-semibold">
                  {item.institution}
                </p>

                {item.location && (
                  <p className="text-gray-500 text-sm mt-1">
                    📍 {item.location}
                  </p>
                )}

                {/* =================================================
                    DESCRIPTION
                ================================================= */}

                <p className="text-gray-400 leading-relaxed text-sm md:text-base mt-5">
                  {item.description}
                </p>

                {/* =================================================
                    SKILLS
                ================================================= */}

                {item.skills && (
                  <div className="flex flex-wrap gap-2 mt-5">

                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>
                )}

                {/* =================================================
                    CERTIFICATE
                ================================================= */}

                <div className="mt-7">

                  {item.certificateLink !== "#" ? (
                    <a
                      href={item.certificateLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-yellow-500 text-black font-bold text-sm hover:bg-yellow-400 hover:scale-105 transition-all"
                    >
                      View Certificate ↗
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-500 text-sm">
                      Certificate Available Soon
                    </span>
                  )}

                </div>

              </div>

            </motion.article>
          ))}

        </div>

        {/* =====================================================
            BOTTOM HIGHLIGHT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="mt-10 text-center"
        >
          <p className="text-gray-600 text-sm">
            Continuously learning and building real-world applications
            with modern web and AI technologies.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;

