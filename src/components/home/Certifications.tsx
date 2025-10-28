'use client';

import { motion } from 'framer-motion';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';
import { achievements } from '../../lib/metadata';
import { FaTrophy, FaCode, FaMedal, FaStar, FaAward } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const icons = [FaCode, FaTrophy, FaMedal, FaStar, FaAward];

export default function Achievements() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="achievements" className="py-16 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Achievements
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Key milestones and accomplishments in my academic and professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardHoverEffect className={`${
                  mounted && isDark 
                    ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50 !border-0'
                    : '!bg-gradient-to-br !from-white/5 !to-white/10 !border-0'
                } backdrop-blur-sm shadow-lg`}>
                  <div className="p-6 flex items-start gap-4">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      mounted && isDark 
                        ? 'bg-violet-600/20 text-violet-400'
                        : 'bg-violet-100 text-violet-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </CardHoverEffect>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
