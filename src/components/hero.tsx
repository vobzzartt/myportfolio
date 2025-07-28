'use client';

import RotatingTitles from './RotatingTitles';
import { motion } from "framer-motion";
import { IgIcon, InIcon, TwIcon } from "./svgs";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="px-6 pt-24 md:px-10 lg:px-20 lg:pt-32 bg-[#0a0a23] text-[#f1f5f9]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <RotatingTitles />

          <p className="mt-6 text-lg text-[#94a3b8] leading-relaxed">
            I build scalable, secure, and future-ready applications that solve real-world problems—leveraging the power of Web, Mobile, AI, Cloud, and Web3 technologies.
          </p>

          <div className="mt-8 space-y-6 text-sm md:text-base text-[#e2e8f0]">
            <p>
              I’m <strong>Victor Bodude</strong>, a 18-year-old Nigerian Software developer with over 2 years of experience across Web and App development, Cybersecurity, AI, Cloud computing, and Web3.
            </p>
            <p>
              I specialize in building robust digital solutions. I’m also an entrepreneur, speaker, and mentor dedicated to solving real-world problems with tech.
            </p>
          </div>

          <div className="mt-10 flex gap-6">
            <motion.a href="https://x.com/vobzzartt" target="_blank" whileHover={{ scale: 1.1 }}>
              <TwIcon className="w-8 h-8 rounded-full border-2 border-[#00c3ff] p-1 hover:bg-white transition-all" fill="#00c3ff" />
            </motion.a>
            <motion.a href="https://instagram.com/vobzzartt" target="_blank" whileHover={{ scale: 1.1 }}>
              <IgIcon className="w-8 h-8 rounded-full border-2 border-[#00c3ff] p-1 hover:bg-white transition-all" fill="#00c3ff" />
            </motion.a>
            <motion.a href="https://linkedin.com/in/victorbodude" target="_blank" whileHover={{ scale: 1.1 }}>
              <InIcon className="w-8 h-8 rounded-full border-2 border-[#00c3ff] p-1 hover:bg-white transition-all" fill="#00c3ff" />
            </motion.a>
            <motion.a href="https://github.com/vobzzartt" target="_blank" whileHover={{ scale: 1.1 }}>
              <svg
                fill="#00c3ff"
                viewBox="0 0 24 24"
                className="w-8 h-8 rounded-full border-2 border-[#00c3ff] p-1 hover:bg-white transition-all"
              >
                <path d="M12 .297a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.6 1.1 1.6 1.1 1 .1.6 2.1 2.6 2.3.3-.6.6-1 .9-1.2-2.6-.3-5.4-1.3-5.4-5.7 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.3a11.5 11.5 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.4-2.8 5.4-5.5 5.7.5.4 1 .9 1 2v3c0 .3.2.7.8.6A12 12 0 0 0 12 .297" />
              </svg>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
        >
          <div className="absolute inset-0 rounded-full border-[3px] border-[#00c3ff] z-0"></div>
          <Image
            src="/images/victor.png.jpg"
            alt="Victor Bodude Hero"
            fill
            className="object-cover rounded-full z-10"
            draggable={false}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;