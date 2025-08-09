import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isNotificationHovered, setIsNotificationHovered] = useState(false);
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b border-[var(--color-card-border)] bg-[var(--color-card-background)]">
      <motion.h1 
        className="heading-2"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Crypto Explorer
      </motion.h1>
      <div className="flex items-center space-x-4">
        <motion.div 
        className="relative"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.input
          type="text"
          placeholder="Search coins..."
          className="form-input pl-10 pr-4 py-2 rounded-full text-sm"
          whileFocus={{ width: '250px' }}
          initial={{ width: '200px' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        />
        <motion.svg
          className="w-5 h-5 text-[var(--color-text-placeholder)] absolute left-3 top-1/2 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.5, ease: 'easeInOut', repeat: 0 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </motion.svg>
      </motion.div>
        <motion.button 
          className="relative p-2 rounded-full hover:bg-[var(--color-card-border)] transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => setIsNotificationHovered(true)}
          onHoverEnd={() => setIsNotificationHovered(false)}
        >
          <motion.svg
            className="w-5 h-5 text-[var(--color-text-secondary)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={isNotificationHovered ? { rotate: 15 } : { rotate: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 01-6 0v-1m6 0H9"
            />
            <motion.span 
              className="absolute top-1 right-1 w-2 h-2 bg-[var(--color-accent)] rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                scale: { 
                  type: 'spring', 
                  stiffness: 1000, 
                  damping: 30,
                  delay: 0.5
                } 
              }}
            />
          </motion.svg>
        </motion.button>
        <motion.div 
          className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center text-white font-medium cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 500, damping: 20 }}
        >
          <motion.span
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
          >
            U
          </motion.span>
        </motion.div>
      </div>
    </header>
  );
}
