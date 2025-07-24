'use client';

import Resume from "./resume";
const resumeUrl = '/pdf/resume.pdf';
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#130b1c] via-[#130b1c]/80 to-transparent opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">Experience</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-clashbold text-white mb-6 tracking-tight">
            Professional Journey
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-[#6f1cd7] to-transparent mb-8" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 w-[1px] h-full bg-gradient-to-b from-[#6f1cd7]/40 via-[#6f1cd7]/20 to-transparent" />

          <div className="space-y-12">
            {[
              {
                title: "Founder",
                company: "Big7 Technologies",
                location: "UK",
                period: "2024 – Present",
                description: [
                  "Founded Big7 Technologies as a parent tech company building products that solve African problems through innovation.",
                  "Spearheaded the launch and operations of core platforms:",
                  "• ServAfri – a robust cloud hosting & SaaS infrastructure platform for startups, businesses, and developers.",
                  "• BigBoost Media Hub – an SMM platform offering social media marketing automation at scale.",
                  "• Soilpay – a secure fintech service enabling seamless online payments, wallet funding, and digital transactions.",
                  "Architected a scalable ecosystem where platforms interconnect and grow under a unified brand vision.",
                  "Lead a multidisciplinary team focused on engineering, branding, user experience, and market expansion."
                ]
              },
              {
                title: "Fullstack Developer",
                company: "Shop54",
                location: "Lagos, Nigeria",
                period: "2023 - 2024",
                description: [
                  "Led the development and implementation of innovative web solutions.",
                  "Managed both frontend and backend aspects of projects.",
                  "Collaborated with cross-functional teams to deliver high-quality software products.",
                ]
              },
              {
                title: "Backend Developer and CEO",
                company: "BigBoost Media Hub",
                location: "Lagos, Nigeria",
                period: "2025 - Present",
                description: [
                  "Founded and Built West Africa’s leading SMM platform, offering Instagram, TikTok, YouTube, X, Facebook, Spotify, and more boosts.",
                  "Built and optimized backend services to process high‑volume social media engagement orders—all while ensuring fast delivery and scalability.",
                  "Integrated multiple payment gateways, UI dashboard, and API access for resellers to automate orders in real time.",
                  "Collaborated with product and support teams to ensure 24/7 service availability and seamless multi-platform engagement.",
                  "Implemented quality checks to maintain service reliability and client satisfaction at low price points."
                ]
              },
              {
                title: "Director of IT",
                company: "Treasure House Logistics",
                location: "Ogun State, Nigeria",
                period: "2025 - Present",
                description: [
                  "Oversee all IT operations and infrastructure for the organization.",
                  "Implement innovative technology solutions to enhance organizational efficiency.",
                  "Manage IT staff and ensure alignment with organizational goals."
                ]
              }
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-6 md:pl-24"
              >
                <motion.div
                  className="absolute left-0 top-3 transform -translate-x-1/2"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#130b1c] border-2 border-[#6f1cd7] shadow-lg shadow-[#6f1cd7]/20" />
                </motion.div>

                <motion.div
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(111, 28, 215, 0.08)'
                  }}
                  className="group relative bg-[#130b1c]/60 backdrop-blur-sm border border-[#ffffff08] p-8 rounded-sm transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6f1cd7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-clashbold text-white mb-3">
                      {experience.title}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                      <p className="text-[#6f1cd7] font-medium tracking-wide">{experience.company}</p>
                      <div className="flex items-center gap-4">
                        <span className="hidden md:inline text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm">{experience.location}</span>
                        <span className="text-[#FFFFFF40]">•</span>
                        <span className="text-[#FFFFFF99] text-sm tracking-wider">{experience.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {experience.description.map((item, i) => (
                        <li key={i} className="text-[#FFFFFF99] leading-relaxed font-light flex items-start">
                          <span className="text-[#6f1cd7] mr-3 mt-1.5">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="RobinsonHonour.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
