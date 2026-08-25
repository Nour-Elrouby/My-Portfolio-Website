import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  //Database,
  BrainCircuit,
  ChartSpline,
  //Layers,
  BadgeCheck,
  Download,
  CircleCheckBig,
  BriefcaseBusiness,
  Calendar,
  Award,
  // Briefcase
} from "lucide-react";

const SkillsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ai");

  const skillCategories = {
    ai: {
      title: "Generative AI & Intelligent Systems",
      icon: BrainCircuit,
      skills: [
        {
          name: "LLM Applications & AI Agents",
          description:
            "Designing LLM-powered chatbots, conversational interfaces, and agentic workflows for practical business use cases.",
          technologies: [
            "LangChain",
            "Llama",
            "Ollama",
            "FastAPI",
            "Prompt Engineering",
          ],
          experience: "Hands-on Experience",
        },
        {
          name: "RAG & Knowledge Systems",
          description:
            "Building knowledge-grounded AI assistants using Retrieval-Augmented Generation, vector search, document retrieval, and context-aware LLM workflows.",
          technologies: [
            "LangChain",
            "Pinecone",
            "Ollama",
            "FastAPI",
            "Vector Search",
          ],
          experience: "Hands-on Experience",
        },
        {
          name: "LLM Evaluation & Reliability",
          description:
            "Evaluating LLM and agentic systems for retrieval quality, groundedness, citation accuracy, tool selection, and reliable end-to-end execution.",
          technologies: [
            "LLM Evaluation",
            "Groundedness",
            "Retrieval Quality",
            "Citation Accuracy",
            "Agent Reliability",
          ],
          experience: "Hands-on Experience",
        },
        {
          name: "AI Deployment & Integration",
          description:
            "Deploying AI applications through APIs, containerized environments, and user-friendly web interfaces.",
          technologies: ["FastAPI", "Uvicorn", "Docker", "Streamlit"],
          experience: "Hands-on Experience",
        },
      ],
    },
    data: {
      title: "Machine Learning & Data Foundations",
      icon: ChartSpline,
      skills: [
        {
          name: "Machine Learning & Model Evaluation",
          description:
            "Preparing datasets, training machine-learning models, evaluating performance, and improving model reliability.",
          technologies: [
            "Python",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "XGBoost",
          ],
          experience: "Hands-on Experience",
        },
        {
          name: "Data Analysis & Visualization",
          description:
            "Creating dashboards, reports, and visualizations that turn data into actionable insights.",
          technologies: [
            "Excel",
            "Power BI",
            "Tableau",
            "SQL Server",
            "Matplotlib",
          ],
          experience: "Hands-on Experience",
        },
      ],
    },
    programming: {
      title: "Programming & Engineering",
      icon: Code2,
      skills: [
        {
          name: "Problem Solving",
          description:
            "Building logical, efficient solutions through structured thinking and algorithmic approaches. Experience in solving diverse challenges using a variety of computational techniques and optimization strategies.",
          technologies: [
            "Competitive programming basics",
            "Algorithm & analysis",
            "Time & space complexity optimization",
          ],
          experience: "3+ years",
        },
        {
          name: "Core Fundamentals",
          description:
            "Solid foundation in computer science principles ensuring scalable, maintainable, and efficient code.",
          technologies: [
            "Data Structures",
            "Algorithms ",
            "OOP",
            "Code modularity & clean architecture principles",
          ],
          experience: "3+ years",
        },
      ],
    },
  };

  const certifications = [
    {
      title: "IBM RAG and Agentic AI Professional Certificate",
      issuer: "IBM",
      year: "2026",
    },
    {
      title: "Natural Language Processing Specialization",
      issuer: "DeepLearning.AI",
      year: "2026",
    },
    {
      title: "Deep Learning Specialization",
      issuer: "DeepLearning.AI",
      year: "2026",
    },
    {
      title: "Microsoft Azure AI Essentials Professional Certificate",
      issuer: "Microsoft & LinkedIn",
      year: "2025",
    },
    {
      title: "Career Essentials in Generative AI",
      issuer: "Microsoft & LinkedIn",
      year: "2025",
    },
    {
      title: "Applied Deep Learning",
      issuer: "NVIDIA",
      year: "2025",
    },
  ];

  return (
    <div className="portfolio-page min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Technical Skills
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Specialized expertise in Generative AI, Machine Learning, NLP, and AI Engineering
            
            </p>
          </motion.div>

          {/* CV Download 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              onClick={() =>
                alert("The CV download it will be available soon!")
              }
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </motion.div>
*/}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <a
              href="#"
              className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              onClick={(event) => {
                event.preventDefault()
                alert("The CV with last updates will be available soon!")
              }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-4 gap-8 mb-16"
          >
            {[
              // test
              { label: "Years of Experience", value: "2+", icon: BriefcaseBusiness },
              { label: "Projects Completed", value: "20+", icon: CircleCheckBig },
              { label: "Technologies Mastered", value: "35+", icon: Code2 },
              { label: "Certifications", value: "15+", icon: BadgeCheck },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <Icon size={32} className="text-blue-500 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              const isActive = activeCategory === key;

              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg border transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-zinc-900 text-gray-300 border-zinc-800 hover:border-zinc-700"
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{category.title}</span>
                </button>
              );
            })}
          </motion.div>

          {/* Active Category Skills */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <div className="flex items-center mb-8">
                {React.createElement(
                  skillCategories[
                    activeCategory as keyof typeof skillCategories
                  ].icon,
                  {
                    size: 32,
                    className: "text-blue-500 mr-4",
                  },
                )}
                <h2 className="text-3xl font-bold text-white">
                  {
                    skillCategories[
                      activeCategory as keyof typeof skillCategories
                    ].title
                  }
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {skillCategories[
                  activeCategory as keyof typeof skillCategories
                ].skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-zinc-800 rounded-lg p-6 border border-zinc-700"
                  >
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {skill.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{skill.description}</p>

                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar size={16} className="text-blue-500" />
                      <span className="text-sm text-gray-400">Experience:</span>
                      <span className="font-medium text-white">
                        {skill.experience}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Professional Certifications
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg p-6 border border-zinc-800"
                >
                  <div className="flex items-center mb-4">
                    <Award size={24} className="text-blue-500 mr-3" />
                    <div>
                      <h3 className="font-semibold text-white">{cert.title}</h3>
                      <p className="text-gray-400 text-sm">
                        {cert.issuer} • {cert.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
