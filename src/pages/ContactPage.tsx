import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Award,
  Clock,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

const ContactPage: React.FC = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nour.developer1@gmail.com",
      href: "mailto:nour.developer1@gmail.com",
      description: "Primary communication channel",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+201100148852",
      href: "tel:+201100148852",
      description: "Available for urgent matters",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "El Minya, Egypt",
      href: "#",
      description: "Open to remote opportunities",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@Nour El-Rouby",
      href: "https://github.com/nour-developer1",
      description: "View my code repositories",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/Nour El-Rouby",
      href: "https://www.linkedin.com/in/nour-elrouby/",
      description: "Professional networking",
    },
    {
      icon: Award,
      label: "Credly",
      value: "Certifications",
      href: "https://www.credly.com/users/nour-el-rouby/badges#credly",
      description: "Professional certifications",
    },
  ];

  const responseInfo = [
    { icon: Clock, label: "Response Time", value: "Within 24 hours" },
    { icon: CheckCircle, label: "Availability", value: "Open for projects" },
    {
      icon: MessageSquare,
      label: "Preferred Contact",
      value: "Email or LinkedIn",
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
              Get In Touch
            </h1>
            <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to collaborate on AI projects or discuss opportunities?
              Let's connect and build something amazing together!
            </p>
          </motion.div>

          {/* Response Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {responseInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
                    <Icon size={32} className="text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {info.label}
                    </h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="block bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 p-3 rounded-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {info.label}
                          </h3>
                          <p className="text-gray-300 font-medium mb-1">
                            {info.value}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">
                Connect Online
              </h2>
              <div className="space-y-6">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-zinc-900 rounded-lg p-6 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-500 p-3 rounded-lg">
                          <Icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {social.label}
                          </h3>
                          <p className="text-gray-300 font-medium mb-1">
                            {social.value}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {social.description}
                          </p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-zinc-900 rounded-lg p-8 border border-zinc-800">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Open to exciting AI projects, data challenges, and creative
                problem-solving. If you’re looking to turn ideas into impactful
                solutions, let’s connect and make it happen.
              </p>
              <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
                <div className="bg-zinc-800 rounded-lg p-4 text-center">
                  <Clock size={24} className="text-blue-500 mx-auto mb-2" />
                  <h4 className="font-semibold text-white mb-1">
                    Response Time
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Usually within 24 hours
                  </p>
                </div>
                <div className="bg-zinc-800 rounded-lg p-4 text-center">
                  <CheckCircle
                    size={24}
                    className="text-green-500 mx-auto mb-2"
                  />
                  <h4 className="font-semibold text-white mb-1">
                    Availability
                  </h4>
                  <p className="text-gray-300 text-sm">Open for new projects</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
