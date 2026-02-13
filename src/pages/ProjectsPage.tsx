import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Github, Brain, Heart, Shield, Code } from "lucide-react";

const ProjectsPage: React.FC = () => {
  const navigate = useNavigate();

  const projects = [
    {
      title: "Movie Portfolio Project",
      description:
        "Developed a Python-based data analysis project to explore and visualize movie datasets. The project covers data collection, cleaning, and exploratory data analysis (EDA) to uncover insights into movie performance, ratings, and trends. It highlights the use of data visualization to tell compelling stories and is structured as a project for demonstrating analytics capabilities.",
      category: "Data Analysis",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Statsmodels",
        "Plotly",
      ],
      features: [
        "Data cleaning and preprocessing for reliable analysis",
        "Exploratory data analysis (EDA) of movie revenues, budgets, ratings, and genres",
        "Visualization of key trends with Matplotlib and Seaborn",
        "Insights into relationships such as budget vs. revenue and genre-based performance",
        "Portfolio-ready notebook for showcasing data storytelling",
      ],
      icon: Brain,
      status: "Completed",
      github:
        "https://github.com/nour-developer1/Movie-Portfolio-Project/blob/5fa24cd1545fe61443baf70b629e663261d959b8/Movie%20Portfolio%20Project.ipynb",
    },
    {
      title: "Automated API Data Extraction & Appending",
      description:
        "A data engineering project focused on building an automated pipeline to extract data from APIs, transform it, and append it to existing datasets for continuous integration. This project ensures real-time data availability, reduces manual intervention, and supports scalable analytics by automating the entire data ingestion and transformation process.",
      category: "Data Engineering",
      technologies: [
        "Python",
        "Pandas",
        "Scheduling (Cron/Task Scheduler)",
        "APIs (REST/JSON)",
        "Data Cleaning & Transformation",
      ],
      features: [
        "Automated API extraction for dynamic datasets",
        "Implemented logic to append new records to existing data without duplication",
        "Applied robust error handling and logging for reliability",
        "Designed modular scripts for reusability across multiple APIs",
        "Ensured data consistency and readiness for downstream analytics",
      ],
      icon: Brain,
      status: "Completed",
      github: "https://github.com/nour-developer1/Data-Automation-Project",
    },
    {
      title: "Fitbit Health",
      description:
        "Comprehensive analysis of Fitbit fitness tracker data to understand daily activity patterns, sleep quality, and overall health trends. The project focuses on deriving actionable insights for healthier lifestyles through data exploration and visualization.",
      category: "Data Analysis",
      technologies: [
        "Power BI",
        "Power Query",
        "DAX",
        "CSV",
        "SQL",
        "Data Modeling & Visualization ",
      ],
      features: [
        "Cleaned and organized raw Fitbit dataset",

        "Visualized daily steps, calories burned, and activity intensity",
        "Analyzed sleep patterns and their relation to activity levels",

        "Discovered trends for optimizing fitness and wellness goals",
      ],
      icon: Heart,
      status: "Completed",
      github: "https://github.com/nour-developer1/Fitbit-Health-Dashboard",
    },
    {
      title: "Telecom Customer Churn Analysis",
      description:
        "Comprehensive data science project analyzing customer churn patterns in telecommunications. Utilizes machine learning techniques to predict customer retention and identify key factors.",
      category: "Data Science",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "Data Visualization",
        "Data Cleaning",
        "Feature Engineering",
      ],
      features: [
        "Customer behavior analysis",
        "Churn prediction models",
        "Feature importance identification",
        "Interactive data visualizations",
        "Assessed model performance using ROC-AUC, precision-recall, F1 score, and confusion matrix",
      ],
      icon: Code,
      status: "Completed",
      github:
        "https://github.com/nour-developer1/CodeClause-DataScience/blob/main/Telcom-Customer-Chrun.ipynb",
    },
    {
      title: "IMDB Top 250 Movies Analysis",
      description:
        "Data analysis project exploring IMDB’s Top 250 movies to uncover trends in genres, ratings, release years, and audience preferences. The project highlights insights into what makes a movie critically acclaimed and popular among viewers.",
      category: "Data Analysis",
      technologies: [
        "Power BI",
        "Power Query",
        "DAX",
        "APIs",
        "Data Modeling & Visualization",
      ],
      features: [
        "Cleaned and processed IMDB dataset",

        "Visualized rating distributions and genre trends",

        "Identified top directors and actors in the Top 250 list",

        "Analyzed correlations between ratings, votes, and release years",
      ],
      icon: Shield,
      status: "Completed",
      github: "https://github.com/nour-developer1/IMDB-Movies-Analysis",
    },
    {
      title: "Market Basket Analysis",
      description:
        "Comprehensive data science project applying association rule mining on retail transactions. Utilizes Apriori/FP-Growth algorithms to uncover frequent itemsets, generate association rules, and provide insights for product bundling, promotions, and recommendations.",
      category: "Data Science",
      technologies: [
        "Python",
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Requests",
        "Data Visualization (Matplotlib / Plotly)",
      ],
      features: [
        "Frequent itemset mining with Apriori/FP-Growth",

        "Association rule generation (support, confidence, lift, conviction)",

        "Rule pruning and redundancy elimination",

        "Interactive data visualizations (heatmaps, network graphs)",

        "Exportable rules for CRM/CDP or recommendation engines",
      ],
      icon: Brain,
      status: "Completed",
      github:
        "https://github.com/nour-developer1/Market-Basket-analysis/blob/main/Market%20Basket%20analysis.ipynb",
    },
    {
      title: "Amazon Web Scraping",
      description:
        "Developed a Python-based web scraping tool to extract product details, prices, and ratings from Amazon for price monitoring and market analysis. The project automates data collection to save time and ensure up-to-date insights.",
      category: "Data Analysis",
      technologies: [
        "Python",
        "Pandas",
        "Scikit-learn",
        "BeautifulSoup",
        "Requests",
      ],
      features: [
        "Automated extraction of product names, prices, and ratings",

        "Data cleaning and organization for further analysis",
        "Capability to monitor price changes over time",
        "Easily adaptable to different product categories",
      ],
      icon: Code,
      status: "Completed",
      github:
        "https://github.com/nour-developer1/Amazon-Web-Scraper-Project/blob/main/Amazon%20Web%20Scraper%20Project.ipynb",
    },
    {
      title: "Mental Health Chatbot",
      description:
        "AI-powered chatbot designed to provide mental health support and resources. Uses natural language processing to understand user concerns and provide appropriate responses and guidance.",
      category: "NLP & AI",
      technologies: [
        "Python",
        "NLP",
        "Machine Learning",
        "PyTorch",
        "Chatbot Development",
      ],
      features: [
        "Natural language understanding",
        "Mental health resource provision",
        "Empathetic response generation",
        "Non-judgmental environment",
      ],
      icon: Heart,
      status: "In Progress",
      github: "https://github.com/nour-developer1/Mental-Health-Chatbot",
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
              Innovative AI and data science projects showcasing technical
              expertise and problem-solving skills
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
                A selection of projects that highlight the power of AI and data
                science in solving real-world challenges. Excited to explore new
                ideas and turn them into impactful solutions together.
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
