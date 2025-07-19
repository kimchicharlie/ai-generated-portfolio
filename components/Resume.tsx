"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  Download,
  FileText,
} from "lucide-react";
import { portfolioData } from "@/lib/portfolio-data";
import { getLocalizedContent, getLocalizedArray } from "@/types/portfolio";
export type PageFormat = "letter" | "a4";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Resume = (): React.JSX.Element => {
  const { language, t } = useLanguage();

  const handleDownloadScreenshot = async (
    format: PageFormat
  ): Promise<void> => {
    try {
      console.log("Starting image generation...");
      console.log("Language:", language);
      console.log("Format:", format);

      // Import html-to-image dynamically
      const { toJpeg } = await import("html-to-image");

      const element = document.getElementById("resume-content");
      if (!element) {
        throw new Error("Resume content not found");
      }

      // Generate high-quality JPEG
      const dataUrl = await toJpeg(element, {
        quality: 0.95,
        pixelRatio: 2, // High DPI for crisp quality
        backgroundColor: "#ffffff",
        style: {
          // Ensure proper rendering
          transform: "scale(1)",
          transformOrigin: "top left",
        },
        filter: (node) => {
          // Include all nodes, but ensure proper rendering
          if (node.classList) {
            // Don't capture floating buttons
            return !node.classList.contains("no-print");
          }
          return true;
        },
      });

      // Create download link
      const link = document.createElement("a");
      link.href = dataUrl;

      const formatSuffix = format === "letter" ? "US-Letter" : "A4";
      const languageSuffix = language === "fr" ? "FR" : "EN";
      link.download = `charlie-henin-resume-${formatSuffix}-${languageSuffix}.jpg`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log("Image generation completed successfully!");
    } catch (error) {
      console.error("Error generating image:", error);
      alert("Error generating image. Please try again.");
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header with language toggle only */}
      <motion.header
        className="bg-white shadow-sm border-b no-print"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6 text-primary-600" />
            <h1 className="text-xl font-semibold text-gray-900">
              {t("header.resume")}
            </h1>
          </div>
          <LanguageToggle />
        </div>
      </motion.header>

      {/* Floating Download Buttons */}
      <motion.div
        className="fixed top-16 sm:top-20 right-2 sm:right-4 z-50 flex flex-col space-y-2 no-print"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button
          onClick={() => handleDownloadScreenshot("letter")}
          className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Download as JPG (US Letter)"
        >
          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">JPG (US)</span>
          <span className="sm:hidden">US</span>
        </motion.button>
        <motion.button
          onClick={() => handleDownloadScreenshot("a4")}
          className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Download as JPG (A4)"
        >
          <Download className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">JPG (A4)</span>
          <span className="sm:hidden">A4</span>
        </motion.button>
      </motion.div>

      {/* Resume Content */}
      <div className="max-w-6xl mx-auto p-0 sm:p-4 md:p-6">
        <motion.div
          id="resume-content"
          data-language={language}
          className="bg-white rounded-none sm:rounded-lg shadow-none sm:shadow-lg overflow-hidden print:shadow-none print:rounded-none print:max-w-none print:w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Header Section */}
          <motion.div
            className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4 sm:p-6 print:bg-gray-900"
            {...fadeInUp}
          >
            <div className="text-center">
              <motion.h1
                className="text-2xl sm:text-3xl font-bold mb-1 tracking-wide"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {portfolioData.personalInfo.name}
              </motion.h1>
              <motion.p
                className="text-base sm:text-lg text-gray-300 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {getLocalizedContent(
                  portfolioData.personalInfo.title,
                  language
                )}
              </motion.p>

              {/* Contact Information */}
              <motion.div
                className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
              >
                <motion.a
                  href={`tel:${portfolioData.contact.phone}`}
                  variants={fadeInUp}
                  className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
                >
                  <Phone className="h-4 w-4 resume-icon" />
                  <span>{portfolioData.contact.phone}</span>
                </motion.a>
                <motion.a
                  href={`mailto:${portfolioData.contact.email}`}
                  variants={fadeInUp}
                  className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
                >
                  <Mail className="h-4 w-4 resume-icon" />
                  <span>{portfolioData.contact.email}</span>
                </motion.a>
                <motion.a
                  href={`https://${portfolioData.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="hidden print:flex items-center space-x-2 hover:text-primary-300 transition-colors"
                >
                  <Globe className="h-4 w-4 resume-icon" />
                  <span>{portfolioData.contact.website}</span>
                </motion.a>
                <motion.a
                  href={`https://www.linkedin.com/in/${portfolioData.contact.linkedin}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
                >
                  <Linkedin className="h-4 w-4 resume-icon" />
                  <span>{portfolioData.contact.linkedin}</span>
                </motion.a>
                <motion.a
                  href={`https://github.com/${portfolioData.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeInUp}
                  className="flex items-center space-x-2 hover:text-primary-300 transition-colors"
                >
                  <Github className="h-4 w-4 resume-icon" />
                  <span>{portfolioData.contact.github}</span>
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          <div className="p-4 sm:p-6 print:p-4">
            {/* About Section */}
            <section className="mb-4 sm:mb-5 print:mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-primary-500 pb-1 print:text-base print:mb-2">
                {t("section.about")}
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm print:text-xs">
                {getLocalizedContent(
                  portfolioData.personalInfo.about,
                  language
                )}
              </p>
            </section>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-6 print:grid-cols-4 print:gap-4">
              {/* Left Column */}
              <div className="md:col-span-2 print:col-span-3">
                {/* Experience Section */}
                <section className="mb-4 sm:mb-6 print:mb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 border-b-2 border-primary-500 pb-1 print:text-base print:mb-2">
                    {t("section.experience")}
                  </h2>
                  <motion.div
                    className="space-y-3 sm:space-y-4 print:space-y-2"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                  >
                    {portfolioData.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="border-l-4 border-primary-500 pl-4 pb-3 sm:pb-4 relative print:pb-2 print:pl-3"
                      >
                        <div className="absolute -left-2 top-0 w-3 h-3 bg-primary-500 rounded-full print:w-2 print:h-2 print:-left-1"></div>
                        <div className="mb-1">
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 print:text-xs">
                            {getLocalizedContent(exp.title, language)}
                          </h3>
                          <p className="text-primary-600 font-medium text-xs sm:text-sm print:text-xs">
                            {exp.company}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-xs text-gray-600 mt-1 print:text-xs print:space-x-2">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 resume-icon" />
                              <span>
                                {getLocalizedContent(exp.location, language)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 resume-icon" />
                              <span>
                                {getLocalizedContent(exp.period, language)}
                              </span>
                            </div>
                          </div>
                        </div>
                        {getLocalizedArray(exp.description, language).length >
                          0 && (
                          <ul className="text-gray-700 space-y-0.5 print:text-xs print:space-y-0">
                            {getLocalizedArray(exp.description, language).map(
                              (desc, i) => (
                                <li key={i} className="flex">
                                  <span className="text-primary-500 mr-2 mt-0.5 print:mt-0 text-xs">
                                    •
                                  </span>
                                  <span className="text-xs sm:text-sm print:text-xs flex-1">
                                    {desc}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                        {exp.technologies.length > 0 && (
                          <div className="mt-2 print:mt-1">
                            <p className="text-xs text-gray-600 mb-1 print:mb-0.5">
                              {t("common.technologies")}
                            </p>
                            <div className="flex flex-wrap gap-1 print:gap-0.5">
                              {exp.technologies.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded text-xs print:px-1 print:py-0 print:text-xs"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </section>

                {/* Education Section */}
                <section className="mb-4 sm:mb-6 print:mb-3">
                  <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 border-b-2 border-primary-500 pb-1 print:text-base print:mb-2">
                    {t("section.education")}
                  </h2>
                  <motion.div
                    className="space-y-3 sm:space-y-4 print:space-y-2"
                    variants={staggerChildren}
                    initial="initial"
                    animate="animate"
                  >
                    {portfolioData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="border-l-4 border-accent-500 pl-4 pb-3 sm:pb-4 relative print:pb-2 print:pl-3"
                      >
                        <div className="absolute -left-2 top-0 w-3 h-3 bg-accent-500 rounded-full print:w-2 print:h-2 print:-left-1"></div>
                        <div className="mb-1">
                          <h3 className="text-sm sm:text-base font-semibold text-gray-900 print:text-xs">
                            {getLocalizedContent(edu.degree, language)}
                          </h3>
                          <p className="text-accent-600 font-medium text-xs sm:text-sm print:text-xs">
                            {edu.institution}
                          </p>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-xs text-gray-600 mt-1 print:text-xs print:space-x-2">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3 resume-icon" />
                              <span>
                                {getLocalizedContent(edu.location, language)}
                              </span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3 resume-icon" />
                              <span>
                                {getLocalizedContent(edu.period, language)}
                              </span>
                            </div>
                          </div>
                        </div>
                        {getLocalizedArray(edu.description, language).length >
                          0 && (
                          <ul className="text-gray-700 space-y-0.5 print:text-xs print:space-y-0">
                            {getLocalizedArray(edu.description, language).map(
                              (desc, i) => (
                                <li key={i} className="flex">
                                  <span className="text-accent-500 mr-2 mt-0.5 print:mt-0 text-xs">
                                    •
                                  </span>
                                  <span className="text-xs sm:text-sm print:text-xs flex-1">
                                    {desc}
                                  </span>
                                </li>
                              )
                            )}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </motion.div>
                </section>
              </div>

              {/* Right Column */}
              <div className="print:col-span-1">
                {/* Technologies Section */}
                <section className="mb-4 sm:mb-6 print:mb-3">
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-primary-500 pb-1 print:text-sm print:mb-2">
                    {t("section.technologies")}
                  </h2>
                  <div className="space-y-2 sm:space-y-3 print:space-y-1">
                    {["frontend", "backend", "database", "tools", "other"].map(
                      (category) => {
                        const techs = portfolioData.technologies.filter(
                          (t) => t.category === category
                        );
                        if (techs.length === 0) return null;

                        return (
                          <div key={category}>
                            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 print:text-xs print:mb-0.5">
                              {t(`tech.${category}`)}
                            </h3>
                            <div className="flex flex-wrap gap-0.5 print:gap-0">
                              {techs.map((tech, i) => (
                                <span
                                  key={i}
                                  className="px-1.5 py-0.5 bg-primary-100 text-primary-800 rounded text-xs print:px-1 print:py-0 print:text-xs"
                                >
                                  {tech.name}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </section>

                {/* Hobbies Section */}
                <motion.section
                  className="print:mb-3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-primary-500 pb-1 print:text-sm print:mb-2">
                    {t("section.hobbies")}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2 print:grid-cols-1 print:gap-0.5">
                    {portfolioData.hobbies.map((hobby, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center space-x-1 p-1 bg-gray-50 rounded print:p-0.5 print:bg-transparent overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        title={getLocalizedContent(hobby.name, language)}
                      >
                        <span className="text-sm print:text-xs flex-shrink-0">
                          {hobby.icon}
                        </span>
                        <span className="text-xs text-gray-700 print:text-xs truncate">
                          {getLocalizedContent(hobby.name, language)}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
