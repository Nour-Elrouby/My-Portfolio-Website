import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Database,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
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
      icon: Brain,
      title: "Generative AI Engineering",
      description:
      "Designing practical AI applications using LLMs, NLP, prompt engineering, and conversational interfaces.",
    },
    {
      icon: Database,
      title: "RAG & Agentic AI",
      description:
      "Building knowledge-grounded AI systems using RAG, vector databases, AI agents, and reliable retrieval workflows.",
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      description: "Open to remote opportunities and global collaborations",
    },
    {
      icon: Calendar,
      label: "Age",
      value: `${age} Years Old`,
      description: "Driven and energetic professional focused on innovation",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "Computers and Artificial Intelligence student",
      description: "Student in Beni-Suef National University (2023–2027)",
    },
    {
      icon: Briefcase,
      label: "Current Role",
      value: "Generative AI Engineer | LLM & Agentic AI Specialist",
      description:
      "Building production-ready GenAI solutions with LLMs, RAG, NLP, and AI Agents.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
              AI & ML Engineer | NLP & Generative AI Specialist | Problem Solver
              | Lifelong Learner
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
                    I’m a passionate {age}-year-old Generative AI Engineer based in
                    Cairo, Egypt, currently pursuing my BSc in Computers and AI
                    Engineering at Beni-Suef National University. I focus on
                    developing AI-powered solutions using large language models,
                    Retrieval-Augmented Generation (RAG), natural language
                    processing, and agentic AI.
                  </p>

                  <p>
                    My experience includes building LLM-powered chatbots,
                    RAG-based knowledge assistants, OCR and identity-extraction
                    pipelines, and practical AI applications that solve
                    real-world problems. I have also earned certifications from
                    IBM, Google, and DeepLearning.AI in Generative AI, LLMs,
                    RAG, NLP, deep learning, analytics, and AI engineering.
                  </p>
                  <p>
                    I stay current by reading research papers, contributing to
                    open-source projects, and exploring emerging AI
                    technologies. My key interests include Generative AI, LLMs,
                    RAG, NLP, AI agents, computer vision, and adaptive learning
                    systems.
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
                      <div className="bg-blue-500 p-3 rounded-lg">
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
