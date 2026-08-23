import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Github,
  Brain,
  Bot,
  ScanSearch,
  BadgeDollarSign,
  MessageCircle,
  Smile,
  ShieldCheck,
  Search,
} from "lucide-react";
const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "ProcureLens — RFP Vendor Evaluation Agent",
      description:
        "Developed an AI-powered procurement agent that evaluates vendor proposals against RFP requirements using a Groq-hosted LLM. The system extracts proposal content from multiple document formats, generates evidence-based scores against defined evaluation criteria, performs an independent self-verification step to validate reasoning consistency, and ranks vendors automatically based on their final scores.",
      category: "AI Agents & LLM Applications",
      technologies: [
        "Python",
        "FastAPI",
        "Groq (LLaMA 3.3 70B)",
        "pdfplumber",
        "python-docx",
        "openpyxl",
      ],
      features: [
        "Multi-format document extraction pipeline supporting PDF, DOCX, and XLSX vendor proposals",
        "Evidence-grounded scoring engine (0–100) based strictly on RFP evaluation criteria",
        "Independent self-verification step using a second LLM call to validate scoring consistency",
        "Automated vendor ranking system that orders proposals by validated evaluation scores",
        "RFP-grounded Q&A system that answers questions using only the provided document content to minimize hallucinations",
      ],
      icon: ScanSearch,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/rfp-vendor-evaluation-agent",
    },
    {
      title: "SmartHire — AI Recruitment Agent",
      description:
        "Developed an autonomous AI recruitment agent that streamlines the hiring process by automating resume screening, candidate evaluation, and applicant ranking. Built on a ReAct (Reason + Act) agent architecture powered by LLaMA 3.1, the system processes resumes in multiple formats, evaluates candidates against job requirements, and exposes its functionality through a production-ready FastAPI REST API.",
      category: "AI Agents & LLM Applications",
      technologies: [
        "Python",
        "FastAPI",
        "Groq (LLaMA 3.1 8B Instant)",
        "pdfplumber",
        "python-docx",
        "Uvicorn",
      ],
      features: [
        "Implemented a ReAct (Think → Act → Observe) agent loop for autonomous resume screening and reasoning over job requirements",
        "Built a multi-format resume parser supporting both PDF and DOCX files",
        "Developed an AI-powered scoring engine that evaluates candidates on a 0–100 scale based on skills, experience, and job description alignment",
        "Automated candidate ranking system to prioritize applicants according to their evaluation scores",
        "Integrated a conversational chatbot that answers candidate questions about job roles and hiring requirements",
        "Exposed the system as a production-ready REST API using FastAPI with interactive Swagger documentation",
      ],
      icon: Bot,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/SmartHire_Agent",
    },
    {
      title: "Teeth Classification",
      description:
        "Developed a deep learning system for automated dental image classification across seven tooth categories, comparing a custom CNN architecture with a fine-tuned MobileNetV2 transfer learning model. The project demonstrates a complete deep learning workflow, from data augmentation and model training to evaluation and deployment through an interactive Streamlit web application.",
      category: "Deep Learning & Computer Vision",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "CNN",
        "MobileNetV2",
        "Streamlit",
        "ImageDataGenerator",
      ],
      features: [
        "Designed and trained a custom CNN inspired by VGG16 using Conv2D, MaxPooling, and Dropout layers for robust image classification",
        "Achieved 99.12% test accuracy with a fine-tuned MobileNetV2 model using transfer learning",
        "Built a comprehensive data augmentation pipeline including rotation, zoom, horizontal flip, and width/height shifts to improve model generalization",
        "Benchmarked CNN and MobileNetV2 performance using accuracy and loss metrics to identify the best-performing architecture",
        "Deployed the final model as a real-time Streamlit web application for interactive dental image classification",
      ],
      icon: Smile,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/Teeth-Classification",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Developed a machine learning pipeline for detecting fraudulent credit card transactions in a highly imbalanced financial dataset containing over 284,000 records. The project addresses severe class imbalance using multiple resampling techniques, benchmarks several classification algorithms, and identifies the most reliable fraud detection model using fraud-sensitive evaluation metrics.",
      category: "Machine Learning",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "XGBoost",
        "Imbalanced-learn (SMOTE)",
        "Matplotlib",
        "Seaborn",
      ],
      features: [
        "Applied multiple imbalance handling techniques including SMOTE, Random Undersampling, and SMOTEENN to improve fraud detection performance",
        "Trained and compared Logistic Regression, Decision Tree, Random Forest, and XGBoost across different sampling strategies",
        "Evaluated models using F1-score and AUC-ROC as primary metrics for reliable performance assessment on imbalanced datasets",
        "Performed exploratory data analysis with correlation heatmaps, fraud distribution visualization, and transaction amount analysis",
        "Built an automated model selection workflow to identify the best-performing classifier and resampling strategy combination",
      ],
      icon: ShieldCheck,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/Credit-Card-Fraud-Detection",
    },
    {
      title: "Mental Health Support Chatbot",
      description:
        "Developed an NLP-based chatbot that explores intent-driven conversational AI for mental health support. Built with a PyTorch neural network, the system classifies user messages into predefined conversational intents and generates empathetic, non-judgmental responses. The project is intended as a learning demonstration and is not a substitute for professional mental health care.",
      category: "NLP & AI",
      technologies: ["Python", "PyTorch", "NLTK", "Machine Learning", "NLP"],
      features: [
        "Implemented intent classification using a bag-of-words feature extraction pipeline and a feedforward neural network in PyTorch",
        "Built an NLP preprocessing pipeline with NLTK for tokenization, stemming, and text normalization",
        "Designed a structured JSON-based intent system for easily extending conversation topics and response sets",
        "Generated supportive, rule-based responses with an empathetic and non-judgmental conversational style",
        "Developed a lightweight and extensible architecture that can be expanded with features such as crisis-language detection and resource recommendation",
      ],
      icon: MessageCircle,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/Mental-Health-Chatbot",
    },
    {
      title: "Skin Tone Classification",
      description:
        "Developed a computer vision system for classifying human skin tones into seven fine-grained categories using a custom Convolutional Neural Network (CNN). The project tackles the challenge of distinguishing visually similar skin tone classes and delivers real-time predictions through a Flask-based web application with an intuitive image upload interface.",
      category: "Deep Learning & Computer Vision",
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "Flask",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      features: [
        "Designed and trained a custom CNN architecture for fine-grained classification across seven closely related skin tone categories",
        "Built an end-to-end deep learning pipeline covering data preparation, model training, evaluation, and deployment",
        "Developed an interactive Flask web application that allows users to upload images and receive instant skin tone predictions",
        "Addressed the challenge of high visual similarity between adjacent skin tone classes to improve classification accuracy",
        "Integrated the trained TensorFlow/Keras model into a production-ready web interface for real-time inference",
      ],
      icon: Brain,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/Skin_Tone_Classification",
    },
    {
      title: "Product Matching in Marketplace",
      description:
        "Developed an NLP-based product matching engine that automatically maps seller product names to the correct entries in a master catalog and assigns the appropriate SKU. The system combines cosine similarity, fuzzy matching, and Levenshtein distance within a weighted scoring framework, while supporting Arabic text normalization and pharmaceutical attribute extraction for accurate multilingual matching.",
      category: "NLP & Text Matching",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "NLTK",
        "FuzzyWuzzy",
        "python-Levenshtein",
      ],
      features: [
        "Built a multilingual text preprocessing pipeline with Arabic normalization, diacritic removal, punctuation cleaning, abbreviation expansion, and text standardization",
        "Extracted pharmaceutical attributes such as dosage values and product forms (tablet, capsule, syrup) from unstructured product names",
        "Designed a weighted similarity scoring framework combining cosine similarity, fuzzy token matching, and Levenshtein distance for accurate product matching",
        "Enabled configurable scoring weights to adapt the matching engine to different catalog structures and naming conventions",
        "Integrated the custom similarity scoring function with GridSearchCV for automated hyperparameter optimization",
        //"Automated end-to-end SKU assignment by matching seller products with the highest-scoring entries in the master catalog",
      ],
      icon: Search,
      status: "Completed",
      github:
        "https://github.com/Nour-Elrouby/Product_Matching_In_Marketplace_Using_NLP",
    },
    {
      title: "YouTube Spam Comment Detection",
      description:
        "Developed a natural language processing pipeline for classifying YouTube comments as spam or legitimate using a labeled dataset of real-world comments. The project applies comprehensive text preprocessing, TF-IDF feature engineering, and multi-model benchmarking to build an accurate and reliable spam detection system.",
      category: "NLP & Machine Learning",
      technologies: [
        "Python",
        "Scikit-learn",
        "NLTK",
        "TF-IDF Vectorizer",
        "SVC",
        "LinearSVC",
        "Random Forest",
      ],
      features: [
        "Performed exploratory data analysis to identify linguistic patterns, word frequency distributions, and differences between spam and legitimate comments",
        "Built a complete NLP preprocessing pipeline including text cleaning, lowercasing, stopword removal, tokenization, and special character filtering",
        "Extracted numerical text features using TF-IDF vectorization to capture term importance across the comment corpus",
        "Trained and benchmarked SVC, LinearSVC, and Random Forest models to determine the best-performing spam classifier",
        "Evaluated model performance using accuracy, precision, recall, and F1-score for comprehensive comparison and validation",
      ],
      icon: BadgeDollarSign,
      status: "Completed",
      github: "https://github.com/Nour-Elrouby/Youtube-spam-comment-detection",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Featured Projects
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Innovative AI projects showcasing technical expertise and real-world problem-solving
            
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden"
                >
                  <div className="p-6 border-b border-zinc-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="bg-blue-500 p-2 rounded-lg">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div>
                          <span className="text-sm text-gray-400">
                            {project.category}
                          </span>
                          <h2 className="text-xl font-bold text-white">
                            {project.title}
                          </h2>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-medium">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-300">{project.description}</p>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-3">
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-zinc-800 text-gray-300 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h3 className="font-semibold text-white mb-3">
                        Key Features
                      </h3>
                      <div className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-start space-x-3"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-16"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Interested in My Work?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                A selection of projects demonstrating how AI and intelligent systems can address real-world challenges and deliver meaningful impact. Excited to explore new ideas and build impactful solutions together.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Let's Build Together
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
