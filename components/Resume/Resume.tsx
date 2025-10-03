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
  FileText,
} from "lucide-react";

import { portfolioData } from "@/lib/portfolio-data";
import { getLocalizedContent, getLocalizedArray } from "@/types/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

import { DownloadType, PageFormat } from "./types";
import { downloadResume } from "./utils";
import { fadeInUp, staggerChildren } from "./constants";

const Resume = (): React.JSX.Element => {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Floating Download Buttons */}
      <motion.div
        className="fixed top-20 sm:top-24 right-2 sm:right-4 z-50 flex flex-col space-y-2 no-print"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* PDF Downloads */}
        <motion.button
          onClick={() =>
            downloadResume(PageFormat.LETTER, DownloadType.PDF, language)
          }
          className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Download as PDF (US Letter)"
        >
          <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">PDF (US)</span>
          <span className="sm:hidden">PDF US</span>
        </motion.button>
        <motion.button
          onClick={() =>
            downloadResume(PageFormat.A4, DownloadType.PDF, language)
          }
          className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors duration-200 shadow-lg text-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Download as PDF (A4)"
        >
          <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">PDF (A4)</span>
          <span className="sm:hidden">PDF A4</span>
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

            {/* Single Column Layout - New Order: Technologies > Experience > Education > Hobbies */}

            {/* Technologies Section */}
            <section className="mb-4 sm:mb-6 print:mb-3">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-primary-500 pb-1 print:text-base print:mb-2">
                {t("section.technologies")}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 print:grid-cols-2 print:gap-4">
                {["frontend", "backend", "database", "tools", "other"].map(
                  (category) => {
                    const techs = portfolioData.technologies.filter(
                      (t) => t.category === category
                    );
                    if (techs.length === 0) return null;

                    return (
                      <div key={category} className="space-y-2">
                        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide print:text-xs">
                          {t(`tech.${category}`)}
                        </h3>
                        <div className="flex flex-wrap gap-1 print:gap-0.5">
                          {techs.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-primary-100 text-primary-800 rounded text-xs print:px-1 print:py-0.5 print:text-xs"
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

            {/* Experience Section */}
            <section className="mb-4 sm:mb-6 print:mb-3 avoid-page-break">
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
                    className="border-l-4 border-primary-500 pl-4 pb-3 sm:pb-4 relative print:pb-2 print:pl-3 avoid-page-break"
                  >
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-primary-500 rounded-full print:w-2 print:h-2 print:-left-1"></div>
                    <div className="mb-1">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 print:text-xs">
                        {getLocalizedContent(exp.title, language)}
                      </h3>
                      <p className="text-primary-600 font-medium text-xs sm:text-sm print:text-xs">
                        {exp.company}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-xs text-gray-600 mt-1 print:text-xs location-date-container">
                        <div className="flex items-center space-x-1 location-date-item">
                          <MapPin className="h-3 w-3 resume-icon" />
                          <span>
                            {getLocalizedContent(exp.location, language)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 location-date-item">
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
            <section className="mb-4 sm:mb-6 print:mb-3 avoid-page-break">
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
                    className="border-l-4 border-accent-500 pl-4 pb-3 sm:pb-4 relative print:pb-2 print:pl-3 avoid-page-break"
                  >
                    <div className="absolute -left-2 top-0 w-3 h-3 bg-accent-500 rounded-full print:w-2 print:h-2 print:-left-1"></div>
                    <div className="mb-1">
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900 print:text-xs">
                        {getLocalizedContent(edu.degree, language)}
                      </h3>
                      <p className="text-accent-600 font-medium text-xs sm:text-sm print:text-xs">
                        {edu.institution}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 text-xs text-gray-600 mt-1 print:text-xs location-date-container">
                        <div className="flex items-center space-x-1 location-date-item">
                          <MapPin className="h-3 w-3 resume-icon" />
                          <span>
                            {getLocalizedContent(edu.location, language)}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 location-date-item">
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

            {/* Hobbies Section */}
            <motion.section
              className="mb-4 sm:mb-6 print:mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 border-b-2 border-primary-500 pb-1 print:text-base print:mb-2">
                {t("section.hobbies")}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 print:grid-cols-4 print:gap-2">
                {portfolioData.hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors print:p-1 print:bg-transparent hobby-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    title={getLocalizedContent(hobby.name, language)}
                  >
                    <span className="text-lg print:text-sm hobby-icon flex-shrink-0">
                      {hobby.icon}
                    </span>
                    <span className="text-xs text-gray-700 print:text-xs hobby-text">
                      {getLocalizedContent(hobby.name, language)}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
