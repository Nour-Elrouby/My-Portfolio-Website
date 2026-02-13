import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const EducationPage: React.FC = () => {
  const education = {
    degree: "Computers and Artificial Intelligence student",
    specialization: "Double Major: AI & Data Science",
    institution: "Beni-Suef National University",
    location: "Beni-Suef, Egypt",
    period: "2023 - 2027",
    description:
      "Comprehensive Double Major Program Covering Artificial Intelligence and Data Science, Including Machine Learning, Deep Learning, Natural Language Processing, Predictive Analytics, Big Data Management, Statistical Modeling, and Ethical AI Applications.",
    gpa: "very good",
    honors: "Magna Cum Laude",
  };

  const certifications = [
    {
      title: "Career Essentials in Generative AI by Microsoft and LinkedIn",
      issuer: "Microsoft",
      year: "2025",
      type: "Professional Certification",
    },
    {
      title: "Generative AI: Working with Large Language Models",
      issuer: "LinkedIn",
      year: "2025",
      type: "Professional Certification",
    },
    {
      title: "Google Analytics Certification",
      issuer: "Google",
      year: "2025",
      type: "Specialization",
    },
    {
      title: "Generative AI",
      issuer: "SAS",
      year: "2025",
      type: "Specialization",
    },
    {
      title:
        "Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn",
      issuer: "Microsoft",
      year: "2025",
      type: "Skill Track",
    },
    {
      title: "Introduction to Data Science ",
      issuer: "Cisco Networking Academy",
      year: "2025",
      type: "Professional Certification",
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
              Education & Certifications
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Academic foundation and continuous learning through professional
              certifications
            </p>
          </motion.div>

          {/* Formal Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden max-w-4xl mx-auto">
              {/* Header Section */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-center">
                <GraduationCap size={40} className="text-white mx-auto mb-3" />
                <h2 className="text-2xl font-bold text-white mb-2">
                  Formal Education
                </h2>
                <div className="flex items-center justify-center text-blue-100">
                  <Calendar size={16} className="mr-2" />
                  <span className="font-medium">{education.period}</span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {education.degree}
                  </h3>
                  <p className="text-lg text-blue-400 font-semibold mb-3">
                    {education.specialization}
                  </p>
                  <p className="text-base text-gray-300 mb-4">
                    {education.institution}, {education.location}
                  </p>

                  {/* GPA Card */}
                  <div className="inline-block bg-zinc-800 rounded-lg p-3 border border-zinc-700">
                    <h4 className="font-semibold text-white mb-2">
                      Academic Performance
                    </h4>
                    <p className="text-xl font-bold text-blue-400">
                      {education.gpa}
                    </p>
                    <p className="text-sm text-gray-400">Grade </p>
                  </div>
                </div>

                {/* Description */}
                <div className="bg-zinc-800 rounded-lg p-4 border border-zinc-700">
                  <h4 className="font-semibold text-white mb-3 text-center">
                    Program Overview
                  </h4>
                  <p className="text-sm text-gray-300 leading-relaxed text-center">
                    {education.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-8">
              <Award size={32} className="text-blue-500 mr-4" />
              <h2 className="text-3xl font-bold text-white">
                Professional Certifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg p-6 border border-zinc-800"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-500 p-2 rounded-lg mr-3">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">{cert.year}</span>
                      <div className="text-sm font-medium text-blue-400">
                        {cert.type}
                      </div>
                    </div>
                  </div>

                  <h3 className="font-semibold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-gray-300 font-medium">{cert.issuer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <BookOpen size={48} className="text-blue-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-white mb-4">
                Continuous Learning Philosophy
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I embrace the fast-paced evolution of technology by actively
                keeping up with advancements in AI, machine learning, and
                software engineering. Committed to growth, I continuously refine
                my skills through certifications, hands-on projects, and
                exploring emerging tools and methodologies.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
