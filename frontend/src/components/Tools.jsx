

import { motion } from "framer-motion";

const Tools = () => {
  const skillCategories = [
    {
      title: "Frontend",
      description: "Building responsive and modern user interfaces",
      skills: [
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend",
      description: "Developing secure APIs and backend applications",
      skills: [
        "Python",
        "Django",
        "Django REST Framework",
        "Flask",
      ],
    },
    {
      title: "Database",
      description: "Working with relational and application databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQLite",
      ],
    },
    {
      title: "AI & LLM",
      description: "Building AI-powered applications and RAG systems",
      skills: [
        "Groq API",
        "RAG",
        "Qdrant",
        "LLM Integration",
      ],
    },
    {
      title: "Tools",
      description: "Development and API testing workflow",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 md:py-24 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}

        <div className="text-center mb-14">

          <p className="text-yellow-500 font-bold tracking-[4px] text-xs uppercase mb-3">
            Skills & Technologies
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            My Tech Stack
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5 leading-relaxed">
            Technologies and tools I use to build modern web applications,
            REST APIs and AI-powered solutions.
          </p>

        </div>

        {/* =====================================================
            SKILL CATEGORIES
        ===================================================== */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}
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
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
              className="group bg-zinc-900/70 border border-white/10 rounded-3xl p-7 hover:border-yellow-500/50 transition-all duration-300"
            >

              {/* Category title */}

              <div className="flex items-center gap-3 mb-3">

                <div className="w-2 h-2 rounded-full bg-yellow-500 group-hover:scale-150 transition-transform" />

                <h3 className="text-xl font-black">
                  {category.title}
                </h3>

              </div>

              {/* Description */}

              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                {category.description}
              </p>

              {/* Skills */}

              <div className="flex flex-wrap gap-2">

                {category.skills.map((skill) => (

                  <span
                    key={skill}
                    className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:border-yellow-500/50 hover:text-yellow-500 transition-all"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

        {/* =====================================================
            HIGHLIGHT
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
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-8 p-[1px] rounded-3xl bg-gradient-to-r from-yellow-500/50 to-pink-500/50"
        >

          <div className="bg-zinc-900/90 rounded-3xl p-7 md:p-8 text-center">

            <p className="text-yellow-500 text-xs font-bold uppercase tracking-[3px] mb-3">
              Core Focus
            </p>

            <h3 className="text-2xl md:text-3xl font-black">
              AI + Python + Full Stack Development
            </h3>

            <p className="text-gray-400 max-w-3xl mx-auto mt-4 leading-relaxed">
              Combining Python backend development, modern React interfaces,
              REST APIs, databases and AI technologies to build practical
              full-stack applications.
            </p>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Tools;
