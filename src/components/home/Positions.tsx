'use client';

import { motion } from 'framer-motion';
import { CardHoverEffect } from '../ui/card-hover-effect';
import { useTheme } from 'next-themes';
import { positions } from '../../lib/metadata';
import { FaUsers, FaLaptopCode } from 'react-icons/fa';

const icons = [FaUsers, FaLaptopCode];

export default function Positions() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section id="positions" className="py-16 relative bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Positions of Responsibility
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Leadership roles and contributions to student organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {positions.map((position, index) => {
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
                  isDark 
                    ? '!bg-gradient-to-br !from-neutral-900/50 !to-neutral-800/50 !border-0'
                    : '!bg-gradient-to-br !from-white/5 !to-white/10 !border-0'
                } backdrop-blur-sm shadow-lg h-full`}>
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        isDark 
                          ? 'bg-violet-600/20 text-violet-400'
                          : 'bg-violet-100 text-violet-600'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-1 ${
                          isDark
                            ? 'bg-gradient-to-r from-violet-400 via-violet-500 to-violet-300 bg-clip-text text-transparent'
                            : 'bg-gradient-to-r from-neutral-900 via-violet-600 to-violet-400 bg-clip-text text-transparent'
                        }`}>
                          {position.organization}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 font-medium">
                          {position.role}
                        </p>
                      </div>
                    </div>
                    <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-2 list-disc list-inside">
                      {position.points.map((point: string, idx: number) => (
                        <li key={idx} className="leading-relaxed">{point}</li>
                      ))}
                    </ul>
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
