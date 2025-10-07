'use client';

import Resume from "./resume";
const resumeUrl = '/pdf/resume.pdf';
import { motion } from "framer-motion";
import { Building2, Cloud, Rocket, Server } from "lucide-react";

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
          <span className="text-[#6f1cd7] text-sm tracking-[0.25em] uppercase mb-4 block font-medium">
            Experience
          </span>
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
                icon: Building2,
                description: [
                  "Founded Big7 Technologies as a parent company driving Africa’s next-generation digital innovation.",
                  "Built an ecosystem of powerful technology brands under one umbrella, including:",
                  "• ServAfri – a modern cloud hosting & SaaS infrastructure company helping African startups and developers deploy globally with local payment options.",
                  "• BigBoost Media Hub – a fast-growing Social Media Marketing platform offering automation tools for creators, agencies, and brands.",
                  "• SoilBot – an upcoming automation layer for social media and business processes.",
                  "Architected a unified brand vision connecting all sub-companies under Big7’s mission: empowering Africa’s digital future.",
                  "Lead strategy, technology, and operational oversight across subsidiaries to ensure innovation, security, and scalability."
                ]
              },
              {
                title: "Co-Founder & CTO",
                company: "ServAfri Cloud",
                location: "Africa",
                period: "2025 – Present",
                icon: Cloud,
                description: [
                  "Built ServAfri as Africa’s adaptive cloud infrastructure platform for startups, developers, and businesses.",
                  "Lead the Engineering, DevOps, and Cloud Architecture teams in designing secure, high-performance hosting and SaaS systems.",
                  "Developed localized payment integration systems enabling customers to pay seamlessly via African payment gateways.",
                  "Spearheaded innovations like auto-scaling servers, unified control dashboards, and developer-friendly deployment pipelines.",
                  "Focused on making cloud technology affordable, accessible, and locally integrated for Africa’s digital economy."
                ]
              },
              {
                title: "Lead",
                company: "BigBoost Media Hub",
                location: "Lagos, Nigeria",
                period: "2025 – Present",
                icon: Rocket,
                description: [
                  "Lead development and infrastructure scaling of West Africa’s fastest-growing SMM platform.",
                  "Designed and implemented automation pipelines that deliver millions of social engagement services across Instagram, TikTok, YouTube, X, Facebook, and Spotify.",
                  "Integrated secure payment systems, affiliate tools, and real-time analytics dashboards.",
                  "Lead a distributed technical team ensuring system uptime, speed, and user satisfaction across thousands of active clients.",
                  "Positioned BigBoost as Africa’s trusted and affordable digital growth hub."
                ]
              },
              {
                title: "Director of IT",
                company: "Treasure House Logistics",
                location: "Ogun State, Nigeria",
                period: "2025 – Present",
                icon: Server,
                description: [
                  "Oversee all IT operations, infrastructure, and digital transformation strategy.",
                  "Supervise IT teams, ensuring technology solutions align with business growth objectives.",
                  "Implement secure and efficient systems that streamline operations and logistics management."
                ]
              }
            ].map((experience, index) => {
              const Icon = experience.icon;
              return (
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
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-6 h-6 text-[#6f1cd7]" />
                        <h3 className="text-2xl md:text-3xl font-clashbold text-white">
                          {experience.title}
                        </h3>
                      </div>
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
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 pl-16 md:pl-24"
          >
            <Resume
              pdfUrl={resumeUrl}
              fileName="VictorBodude.pdf"
              buttonText="Download Resume"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;