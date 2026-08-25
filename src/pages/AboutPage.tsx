import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  FileSearch,
  ClipboardCheck,
  MapPin,
  CalendarDays,
  GraduationCap,
  CircuitBoard,
} from "lucide-react";

function calculateAge(
  birthYear: number,
  birthMonth: number,
  birthDay: number,
): number {
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  if (
    today.getMonth() + 1 < birthMonth ||
    (today.getMonth() + 1 === birthMonth && today.getDate() < birthDay)
  ) {
    age--;
  }

  return age;
}
const age = calculateAge(2006, 3, 17);
const AboutPage: React.FC = () => {
  const highlights = [
    {
      icon: CircuitBoard,
      title: "Generative AI Engineering",
      description:
      "Designing practical AI applications using LLMs, NLP, prompt engineering, and conversational interfaces.",
    },
    {
      icon: FileSearch,
      title: "RAG & Agentic AI",
      description:
      "Building knowledge-grounded AI systems using RAG, vector databases, AI agents, and reliable retrieval workflows.",
    },
    {
      icon: ClipboardCheck,
      title: "LLM Evaluation & Reliability",
      description:
      "Evaluating LLM and agentic systems for groundedness, retrieval quality, citation accuracy, tool selection, and reliable end-to-end execution.",
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      description: "Open to remote opportunities and global collaboration.",
    },
    {
      icon: CalendarDays,
      label: "Age",
      value: `${age} Years Old`,
      description: "Driven and AI professional focused on innovation, continuous learning, and impact.",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Sc. in Computers & Artificial Intelligence",
      description: "Beni-Suef National University   2023–2027",
    },
    {
      icon: BrainCircuit,
      label: "Current Role",
      value: "Generative AI Engineer",
      description:
      "Building reliable LLM, RAG, and agentic AI systems for real-world applications.",
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
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Generative AI Engineer | RAG & Agentic Systems | LLM Evaluation & Reliability
            </p>
          </motion.div>

          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {personalInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-zinc-900 rounded-lg p-6 border border-zinc-800 text-center"
                >
                  <Icon size={32} className="text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {info.label}
                  </h3>
                  <p className="text-blue-400 font-medium mb-2">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6 text-white">
                  Generative AI Engineer
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I’m a {age}-year-old Generative AI Engineer based in Cairo,
                    Egypt, and an undergraduate in Computers and Artificial
                    Intelligence at Beni-Suef National University. I specialize
                    in Retrieval-Augmented Generation (RAG), LLM applications,
                    and reliable agentic workflows, with a focus on building
                    practical, evidence-grounded AI systems that solve
                    real-world problems.
                  </p>

                  <p>
                    My experience includes developing retrieval pipelines,
                    RAG-based knowledge assistants, LLM-powered applications,
                    and tool-enabled AI agents. I work with Python, LangChain,
                    LangGraph, FastAPI, embeddings, vector databases, prompt
                    engineering, and API integrations to design scalable and
                    dependable end-to-end AI solutions.
                  </p>
                  <p>
                    A key focus of my work is AI reliability. I evaluate
                    retrieval quality, groundedness, citation accuracy, tool
                    selection, and agent execution to improve system performance
                    and reduce unreliable outputs. I’m particularly interested
                    in building AI systems with transparent failure analysis,
                    trustworthy behavior, and consistent evidence-based
                    responses.
                  </p>
                  <p>
                    Alongside Generative AI, I have a strong foundation in
                    machine learning, deep learning, NLP, and data processing.
                    Through hands-on projects and industry experience, I
                    continue to strengthen my skills in designing, evaluating,
                    and deploying intelligent systems.
                  </p>
                  <p>
                    My key interests include Generative AI, LLM applications,
                    RAG, AI agents, semantic search, LLM evaluation, and building
                    trustworthy AI systems that deliver meaningful real-world
                    value.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="bg-zinc-900 rounded-lg p-6 border border-zinc-800"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="about-highlight-icon bg-blue-500 p-3 rounded-lg">
                        <Icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-400">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* What Drives Me */}
              <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What Drives Me
                </h3>
                <div className="space-y-3 text-gray-300">
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Transforming Generative AI concepts into useful, real-world solutions.
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                       Solving complex problems with LLMs, RAG, and agentic systems.
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                       Building trustworthy AI systems grounded in relevant data and user needs
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Continuously learning and sharing emerging AI technologies
                    </span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
