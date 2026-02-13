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
  birthDay: number
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
const age = calculateAge(2005, 3, 17);
const AboutPage: React.FC = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI Engineering",
      description:
        "Aspiring AI Engineer with hands-on experience in building small-scale machine learning models, exploring computer vision and OCR, and experimenting with LLMs. Continuously developing skills to design and deploy intelligent systems for real-world applications.",
    },
    {
      icon: Database,
      title: "Data & Analysis",
      description:
        "Developing skills in transforming raw data into actionable insights, from Excel and Power BI to applying AI-based analytics for creating interactive dashboards and reports.",
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "El Minya, Egypt",
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
      value: "Data Analyst & ML Practitioner",
      description:
        "Focused on learning, projects, and building strong foundations in software development and AI.",
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
              AI Engineer | Data Analyst | Problem Solver | Lifelong Learner
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
                  AI Engineer & Data Analyst
                </h2>
                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    I’m a passionate 20-year-old AI Engineer and Data Analyst
                    based in El Minya, Egypt, currently pursuing my BSc in
                    Computers and AI Engineering at Beni-Suef National
                    University. My focus is on developing AI-powered systems in
                    generative AI, large language models, computer vision, and
                    data-driven analytics.
                  </p>

                  <p>
                    My tech journey started at university, where I specialized
                    in Artificial Intelligence and Data Science, leading
                    academic projects and gaining practical experience in
                    machine learning, data analysis, and deep learning
                    applications. Alongside my studies, I’ve earned
                    certifications from Microsoft, NVIDIA, Google, SAS, and
                    LinkedIn Learning, covering areas such as LLMs, deep
                    learning, analytics, and AI deployment.
                  </p>
                  <p>
                    I strive to design intelligent, production-grade solutions
                    that address real-world problems and create measurable
                    impact. From building chatbots with LLMs and implementing
                    OCR and identity extraction pipelines to applying computer
                    vision models and analytics-driven insights, I enjoy taking
                    on challenges that bring AI into practical use.
                  </p>

                  <p>
                    I stay updated by reading research papers, contributing to
                    open-source, and sharing knowledge with the community. My
                    key interests lie in Generative AI, computer vision, data
                    analytics, and adaptive learning systems that evolve over
                    time.
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
                      Pushing AI to production and solving real-world problems
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Applying logical thinking and analytical skills to break
                      down challenges and develop efficient, effective
                      solutions.
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Learning cutting-edge AI and sharing it with others
                    </span>
                  </p>
                  <p className="flex items-start space-x-3">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>
                      Creating tools that blend intelligence and usability
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
