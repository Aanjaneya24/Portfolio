'use client';

import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const email = "pandeyaanjaneya76@gmail.com";
  const linkedin = "https://www.linkedin.com/in/aanjaneya-pandey-9715b2335/";
  const github = "https://github.com/Aanjaneya24";
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="contact" className="py-24 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <CardHoverEffect className={`${
            mounted && isDark 
              ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50'
              : '!bg-gradient-to-br !from-white/5 !to-white/10'
          } backdrop-blur-sm !border-0 shadow-lg`}>
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Email */}
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-violet-100/20 to-violet-100/5 group-hover:from-violet-200/30 group-hover:to-violet-100/15 transition-all duration-300 mb-4">
                    <FaEnvelope className="w-8 h-8 text-violet-600 dark:text-violet-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    Email
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 break-all hover:text-violet-600 dark:hover:text-violet-400 transition-colors">
                    {email}
                  </p>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-blue-100/20 to-blue-100/5 group-hover:from-blue-200/30 group-hover:to-blue-100/15 transition-all duration-300 mb-4">
                    <FaLinkedin className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    LinkedIn
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    Connect with me
                  </p>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center group"
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-neutral-200/20 to-neutral-200/5 group-hover:from-neutral-300/30 group-hover:to-neutral-200/15 transition-all duration-300 mb-4">
                    <FaGithub className="w-8 h-8 text-neutral-700 dark:text-neutral-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <p className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                    GitHub
                  </p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200 transition-colors">
                    View my projects
                  </p>
                </motion.a>
              </div>

              {/* Quick Contact Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700 flex justify-center"
              >
                <motion.a
                  href={`mailto:${email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`inline-flex items-center justify-center gap-2 py-3 px-8 rounded-lg ${
                    mounted && isDark
                      ? 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                      : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500'
                  } text-white transition-all duration-200 font-medium shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]`}
                >
                  Start a Conversation
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </motion.div>
            </div>
          </CardHoverEffect>
        </motion.div>
      </div>
    </section>
  );
}
