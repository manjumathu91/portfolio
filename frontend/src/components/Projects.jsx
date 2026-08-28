

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// =====================================================
// FRONTEND PROJECT IMAGES
// =====================================================

import pawlyImg from "../assets/pawly.png";
import aariImg from "../assets/aariwork.png";
import cosmeticsImg from "../assets/cosmetics.png";
import billingImg from "../assets/billing.png";
import dashboardImg from "../assets/dashboard.png";
import mykitchenImg from "../assets/mykitchen.png";
import electronicsImg from "../assets/electronics.png";
import toyImg from "../assets/toy.png";
import constructionImg from "../assets/construction.png";
import kidsImg from "../assets/kids.png";

import aiPlatformImg from "../assets/ai-platform.png";
import foodDeliveryImg from "../assets/food-delivery.png";
import aiecommerceImg from "../assets/aiecommerce.png";

const Projects = () => {
  // =====================================================
  // STATES
  // =====================================================

  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [frontendIndex, setFrontendIndex] = useState(0);

  const [featuredPaused, setFeaturedPaused] = useState(false);
  const [frontendPaused, setFrontendPaused] = useState(false);

  // =====================================================
  // FULL STACK + AI PROJECTS
  // =====================================================

  const featuredProjects = [
    {
      title: "TNPSC AI Teacher",
      category: "AI + Full Stack",
      description:
        "AI-powered learning platform designed for TNPSC Group 2/2A preparation with document-based question answering, MCQ generation and personalized learning features.",
      technologies: [
        "React",
        "Django REST Framework",
        "PostgreSQL",
        "Qdrant",
        "Groq",
        "RAG",
      ],
      features: [
        "AI Teacher",
        "PDF-based Q&A",
        "MCQ Generator",
        "Mock Tests",
        "PYQ Analysis",
        "Study Planner",
      ],
      github: "#",
      live: "#",
    },

    {
      title: "AI E-Commerce Platform",
      category: "AI + Full Stack",
      description:
        "Full-stack e-commerce platform with an AI shopping assistant that helps users discover products using natural-language queries and provides product details, pricing, discounts and stock availability.",
      technologies: [
        "React",
        "Flask",
        "SQLAlchemy",
        "JWT",
        "REST API",
        "Groq AI",
      ],
      features: [
        "AI Shopping Assistant",
        "Natural Language Product Search",
        "Product Recommendations",
        "Price & Discount Details",
        "Stock Availability",
        "User Authentication",
      ],
      github: "#",
      live: "#",
      img: aiecommerceImg,
    },

    {
      title: "AI Developer Platform",
      category: "AI + Full Stack",
      description:
        "Full-stack developer platform designed to manage projects, workspaces and AI-assisted development workflows.",
      technologies: [
        "React",
        "Django",
        "MySQL",
        "JWT",
        "REST API",
        "AI",
      ],
      features: [
        "Authentication",
        "Workspace Management",
        "Project Management",
        "AI Assistance",
        "Collaboration",
        "Notifications",
      ],
      github: "#",
      live: "#",
      img: aiPlatformImg,
    },

    {
      title: "Food Delivery Application",
      category: "Full Stack",
      description:
        "Food delivery web application with customer, restaurant, delivery partner and admin workflows with payment integration.",
      technologies: [
        "Python",
        "Django",
        "SQLite",
        "JavaScript",
        "Razorpay",
      ],
      features: [
        "Customer Module",
        "Restaurant Module",
        "Delivery Partner",
        "Admin Panel",
        "Food Ordering",
        "Payment Integration",
      ],
      github: "#",
      live: "#",
      img: foodDeliveryImg,
    },
  ];

  // =====================================================
  // FRONTEND PROJECTS
  // =====================================================

  const frontendProjects = [
    {
      title: "Pawly",
      description:
        "Responsive frontend web application with a modern user interface and clean responsive design.",
      technologies: ["React", "JavaScript", "CSS"],
      live: "https://deluxe-pegasus-fda426.netlify.app/",
      github: "https://github.com/manjumathu91/pawly",
      img: pawlyImg,
    },

    {
      title: "Aari Work",
      description:
        "Responsive business website designed to showcase Aari embroidery and related services.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/aariwork/",
      github: "https://github.com/manjumathu91/aariwork",
      img: aariImg,
    },

    {
      title: "Cosmetics",
      description:
        "Modern cosmetics shopping interface with product-focused responsive design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/cosmetics/",
      github: "https://github.com/manjumathu91/cosmetics",
      img: cosmeticsImg,
    },

    {
      title: "Billing App",
      description:
        "Frontend billing interface designed for managing billing-related information and user interactions.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/billing/",
      github: "https://github.com/manjumathu91/billing",
      img: billingImg,
    },

    {
      title: "Dashboard",
      description:
        "Responsive dashboard interface focused on clean data presentation and user-friendly navigation.",
      technologies: ["React", "JavaScript", "CSS"],
      live: "https://manjumathu91.github.io/dashboard/",
      github: "https://github.com/manjumathu91/dashboard",
      img: dashboardImg,
    },

    {
      title: "My Kitchen",
      description:
        "Responsive food and kitchen themed website with modern visual presentation.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/mykitchen/",
      github: "https://github.com/manjumathu91/mykitchen",
      img: mykitchenImg,
    },

    {
      title: "Electronics",
      description:
        "Electronics product-focused responsive frontend website.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/electronics/",
      github: "https://github.com/manjumathu91/electronics",
      img: electronicsImg,
    },

    {
      title: "Toy Store",
      description:
        "Responsive toy store interface with product-focused layout and interactive frontend design.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/toy/",
      github: "https://github.com/manjumathu91/toy",
      img: toyImg,
    },

    {
      title: "Construction",
      description:
        "Professional construction company website with responsive layouts and modern UI.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/construction/",
      github: "https://github.com/manjumathu91/construction",
      img: constructionImg,
    },

    {
      title: "Kids Store",
      description:
        "Colorful and responsive frontend shopping interface designed for kids products.",
      technologies: ["HTML", "CSS", "JavaScript"],
      live: "https://manjumathu91.github.io/kids/",
      github: "https://github.com/manjumathu91/kids",
      img: kidsImg,
    },
  ];

  // =====================================================
  // FEATURED AUTO SLIDER
  // =====================================================

  useEffect(() => {
    if (featuredPaused) return;

    const timer = setInterval(() => {
      setFeaturedIndex(
        (prev) => (prev + 1) % featuredProjects.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [featuredPaused, featuredProjects.length]);

  // =====================================================
  // FRONTEND AUTO SLIDER
  // =====================================================

  useEffect(() => {
    if (frontendPaused) return;

    const timer = setInterval(() => {
      setFrontendIndex(
        (prev) => (prev + 1) % frontendProjects.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [frontendPaused, frontendProjects.length]);

  // =====================================================
  // NAVIGATION FUNCTIONS
  // =====================================================

  const previousFeatured = () => {
    setFeaturedIndex((prev) =>
      prev === 0
        ? featuredProjects.length - 1
        : prev - 1
    );
  };

  const nextFeatured = () => {
    setFeaturedIndex(
      (prev) => (prev + 1) % featuredProjects.length
    );
  };

  const previousFrontend = () => {
    setFrontendIndex((prev) =>
      prev === 0
        ? frontendProjects.length - 1
        : prev - 1
    );
  };

  const nextFrontend = () => {
    setFrontendIndex(
      (prev) => (prev + 1) % frontendProjects.length
    );
  };

  const currentFeatured = featuredProjects[featuredIndex];
  const currentFrontend = frontendProjects[frontendIndex];

  return (
    <section
      id="projects"
      className="py-20 bg-[#050505] text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* =================================================
            MAIN HEADING
        ================================================= */}

        <div className="text-center mb-16">

          <p className="text-yellow-500 font-bold tracking-[4px] text-sm uppercase mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-black">
            My Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-5">
            A collection of AI, full-stack and frontend projects
            built using modern web technologies.
          </p>

        </div>

        {/* =================================================
            FULL STACK PROJECTS
        ================================================= */}

        <div className="mb-24">

          <div className="text-center mb-10">

            <p className="text-yellow-500 font-bold tracking-[3px] text-xs uppercase mb-2">
              Full Stack & AI
            </p>

            <h3 className="text-3xl md:text-4xl font-black">
              Featured Projects
            </h3>

          </div>

          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setFeaturedPaused(true)}
            onMouseLeave={() => setFeaturedPaused(false)}
          >

            {/* Previous */}

            <button
              onClick={previousFeatured}
              aria-label="Previous featured project"
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all"
            >
              ←
            </button>

            {/* Card */}

            <AnimatePresence mode="wait">

              <motion.article
                key={currentFeatured.title}
                initial={{
                  opacity: 0,
                  x: 70,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -70,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="bg-zinc-900/80 border border-white/10 rounded-[2rem] overflow-hidden hover:border-yellow-500/50 transition-all shadow-2xl"
              >

                {/* Project Image */}

                {currentFeatured.img && (
                  <div className="w-full h-[230px] md:h-[320px] overflow-hidden bg-zinc-800">
                    <img
                      src={currentFeatured.img}
                      alt={currentFeatured.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-7 md:p-10">

                  <div className="flex justify-between items-center mb-5">

                    <span className="px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase">
                      {currentFeatured.category}
                    </span>

                    <span className="text-xs text-gray-500">
                      {featuredIndex + 1} / {featuredProjects.length}
                    </span>

                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-5">
                    {currentFeatured.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-7">
                    {currentFeatured.description}
                  </p>

                  {/* Technologies */}

                  <div className="mb-7">

                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">

                      {currentFeatured.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                          >
                            {technology}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  {/* Features */}

                  <div className="mb-8">

                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                      Key Features
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3">

                      {currentFeatured.features.map(
                        (feature) => (
                          <div
                            key={feature}
                            className="text-sm text-gray-300 flex items-center gap-2"
                          >
                            <span className="text-yellow-500">
                              ✓
                            </span>

                            {feature}
                          </div>
                        )
                      )}

                    </div>

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-3">

                    {currentFeatured.github !== "#" && (
                      <a
                        href={currentFeatured.github}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full border border-white/20 font-bold text-sm hover:bg-white hover:text-black transition-all"
                      >
                        GitHub
                      </a>
                    )}

                    {currentFeatured.live !== "#" && (
                      <a
                        href={currentFeatured.live}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-3 rounded-full bg-yellow-500 text-black font-bold text-sm hover:bg-yellow-400 transition-all"
                      >
                        Live Demo
                      </a>
                    )}

                    {currentFeatured.github === "#" &&
                      currentFeatured.live === "#" && (
                        <span className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-500 text-sm">
                          Links will be added
                        </span>
                      )}

                  </div>

                </div>

              </motion.article>

            </AnimatePresence>

            {/* Next */}

            <button
              onClick={nextFeatured}
              aria-label="Next featured project"
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900 border border-white/10 hover:bg-yellow-500 hover:text-black transition-all"
            >
              →
            </button>

          </div>

          {/* Dots */}

          <div className="flex justify-center gap-2 mt-8">

            {featuredProjects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setFeaturedIndex(index)}
                aria-label={`Show ${project.title}`}
                className={`h-2 rounded-full transition-all ${
                  featuredIndex === index
                    ? "w-10 bg-yellow-500"
                    : "w-2 bg-zinc-700"
                }`}
              />
            ))}

          </div>

        </div>

        {/* =================================================
            FRONTEND PROJECTS
        ================================================= */}

        <div>

          <div className="text-center mb-10">

            <p className="text-pink-500 font-bold tracking-[3px] text-xs uppercase mb-2">
              Frontend Development
            </p>

            <h3 className="text-3xl md:text-4xl font-black">
              Frontend Projects
            </h3>

            <p className="text-gray-400 mt-4">
              Responsive websites and frontend interfaces.
            </p>

          </div>

          {/* Frontend Carousel */}

          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setFrontendPaused(true)}
            onMouseLeave={() => setFrontendPaused(false)}
          >

            {/* Previous */}

            <button
              onClick={previousFrontend}
              aria-label="Previous frontend project"
              className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900 border border-white/10 hover:bg-pink-500 transition-all"
            >
              ←
            </button>

            {/* Frontend Card */}

            <AnimatePresence mode="wait">

              <motion.article
                key={currentFrontend.title}
                initial={{
                  opacity: 0,
                  x: 70,
                  scale: 0.97,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: -70,
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="bg-zinc-900/80 border border-white/10 rounded-[2rem] overflow-hidden hover:border-pink-500/50 transition-all shadow-2xl"
              >

                {/* Image */}

                <div className="w-full h-[250px] md:h-[350px] overflow-hidden bg-zinc-800">

                  <img
                    src={currentFrontend.img}
                    alt={currentFrontend.title}
                    className="w-full h-full object-cover"
                  />

                </div>

                {/* Content */}

                <div className="p-7 md:p-10">

                  <div className="flex justify-between items-center mb-4">

                    <span className="text-pink-500 text-xs font-bold uppercase tracking-widest">
                      Frontend Project
                    </span>

                    <span className="text-xs text-gray-500">
                      {frontendIndex + 1} /{" "}
                      {frontendProjects.length}
                    </span>

                  </div>

                  <h3 className="text-3xl font-black mb-4">
                    {currentFrontend.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {currentFrontend.description}
                  </p>

                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mb-8">

                    {currentFrontend.technologies.map(
                      (technology) => (
                        <span
                          key={technology}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300"
                        >
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                  {/* Buttons */}

                  <div className="flex gap-4">

                    <a
                      href={currentFrontend.live}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3 bg-pink-500 text-white rounded-full font-bold text-sm hover:bg-pink-600 transition-all"
                    >
                      Live Demo
                    </a>

                    <a
                      href={currentFrontend.github}
                      target="_blank"
                      rel="noreferrer"
                      className="px-7 py-3 border border-white/20 text-white rounded-full font-bold text-sm hover:bg-white hover:text-black transition-all"
                    >
                      GitHub
                    </a>

                  </div>

                </div>

              </motion.article>

            </AnimatePresence>

            {/* Next */}

            <button
              onClick={nextFrontend}
              aria-label="Next frontend project"
              className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-zinc-900 border border-white/10 hover:bg-pink-500 transition-all"
            >
              →
            </button>

          </div>

          {/* Frontend Dots */}

          <div className="flex justify-center gap-2 mt-8 flex-wrap">

            {frontendProjects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setFrontendIndex(index)}
                aria-label={`Show ${project.title}`}
                className={`h-2 rounded-full transition-all ${
                  frontendIndex === index
                    ? "w-10 bg-pink-500"
                    : "w-2 bg-zinc-700 hover:bg-zinc-500"
                }`}
              />
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Projects;

