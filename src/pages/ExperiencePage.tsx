import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Building2, Briefcase } from 'lucide-react';

const ExperiencePage: React.FC = () => {
  const navigate = useNavigate();

  const experiences = [
    {
      title: 'AI Engineer',
      company: 'Dorra Group | Capital Business Park',
      location: 'Giza, Egypt',
      period: 'Feb 2024 - Present',
      type: 'Full-time',
      description: 'Leading AI development initiatives and creating innovative solutions for business automation',
      achievements: [
        'Developed and deployed AI models for secure identity verification, enhancing accuracy and efficiency in document validation systems',
        'Created intelligent chatbots for mobile apps, delivering seamless user support and improving engagement through intuitive interactions',
        'Engineered AI-powered access control models for gated systems, ensuring accurate, real-time automation and security in high-traffic environments',
        'Automated data extraction using Azure OCR, optimizing workflows and reducing errors in handling large document volumes',
        'Deployed solutions using Flask and FastAPI, gaining end-to-end experience in scalable AI application development'
      ],
      current: true
    },
    {
      title: 'Backend Engineer',
      company: 'Dorra Group | Capital Business Park',
      location: 'Giza, Egypt',
      period: 'Jul 2024 - Present',
      type: 'Full-time',
      description: 'Developing robust backend solutions and integrating AI services',
      achievements: [
        'Built solutions for image and document insights using Azure Vision and Document Intelligence',
        'Streamlined database operations through middleware development',
        'Deployed high-performance AI models with FastAPI and Flask',
        'Implemented thread workers, JWT authentication, and Paymob integration for secure, scalable solutions',
        'Refactored APIs for better performance and developed redirection for AI server processing'
      ],
      current: true
    },
    {
      title: 'Data Analyst',
      company: 'Dorra Group | Capital Business Park',
      location: 'Giza, Egypt',
      period: 'Feb 2025 - Present',
      type: 'Full-time',
      description: 'Creating data-driven insights and interactive dashboards for business intelligence in the F&B industry',
      achievements: [
        'Built internal dashboards using Streamlit to visualize performance metrics, operational KPIs, and departmental trends, enabling data-driven decision making across restaurant and operations teams',
        'Extracted, cleaned, and transformed data from internal databases using SQL and Python',
        'Generated actionable insights and performance reports to support strategic planning'
      ],
      current: true
    },
    {
      title: 'NLP R&D Intern',
      company: 'Smsm | Artificially Intelligent Agency',
      location: 'Remote',
      period: 'Feb 2024 - Jun 2024',
      type: 'Internship',
      description: 'Contributed to natural language processing research and development',
      achievements: [
        'Collected and curated data for NLP model training',
        'Fine-tuned models for translation tasks',
        'Collaborated on improving model performance and accuracy'
      ],
      current: false
    },
    {
      title: 'Software Engineer Intern',
      company: 'Dorra Group | Capital Business Park',
      location: 'Giza, Egypt',
      period: 'Jul 2023 - Oct 2023',
      type: 'Internship',
      description: 'Comprehensive internship covering web development, automation, and data analysis',
      achievements: [
        'Developed a web application using Oracle Apex to digitize inventory management, streamlining processes and boosting efficiency',
        'Implemented automation solutions to elevate productivity and accuracy',
        'Analyzed data from the F&B industry, uncovering insights to support decision-making'
      ],
      current: false
    }
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
              Professional Experience
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A journey through AI engineering, backend development, and data science
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zinc-900 rounded-lg p-8 border border-zinc-800"
              >
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  {exp.current && (
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-600 text-white">
                      <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                      Current Position
                    </span>
                  )}
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-zinc-800 text-gray-300">
                    <Calendar size={14} className="mr-2" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-zinc-800 text-gray-300">
                    <MapPin size={14} className="mr-2" />
                    {exp.location}
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-zinc-800 text-gray-300">
                    <Building2 size={14} className="mr-2" />
                    {exp.type}
                  </span>
                </div>

                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2">{exp.title}</h2>
                  <h3 className="text-lg font-medium text-gray-300 mb-4">{exp.company}</h3>
                  <p className="text-gray-400">{exp.description}</p>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-white mb-4">Key Achievements</h4>
                  <div className="grid gap-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <Briefcase size={48} className="text-blue-500 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Ready for New Challenges</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                With a proven track record in AI engineering, backend development, and data analysis, 
                I'm always excited to tackle complex problems and drive innovation.
              </p>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 rounded-lg font-semibold transition-colors duration-300"
              >
                Let's Collaborate
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;