import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ), label: "Dashboard" },
    { path: "/coins", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ), label: "Coins" },
    { path: "/portfolio", icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ), label: "Portfolio" },
  ];

  const [isHovered, setIsHovered] = useState(null);

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }
    }),
    hover: {
      scale: 1.03,
      x: 5,
      transition: { type: 'spring', stiffness: 400, damping: 10 }
    }
  };

  return (
    <div className="relative min-w-65 wrapper">
      <aside className="top-0 fixed flex flex-col bg-[var(--color-card-background)] border-[var(--color-card-border)] border-r w-64 h-screen">
      <motion.div 
        className="p-6"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        <motion.h1 
          className="font-bold text-[var(--color-text-primary)] text-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.span 
            className="text-[var(--color-accent)]"
            animate={{ 
              textShadow: [
                '0 0 0px rgba(99, 102, 241, 0.5)',
                '0 0 10px rgba(99, 102, 241, 0.7)',
                '0 0 0px rgba(99, 102, 241, 0.5)'
              ]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            Crypto
          </motion.span>
          Explorer
        </motion.h1>
      </motion.div>
      
      <nav className="flex-1 space-y-1 px-3">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            whileHover="hover"
            onHoverStart={() => setIsHovered(index)}
            onHoverEnd={() => setIsHovered(null)}
          >
            <NavLink
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                isActive(item.path)
                  ? 'bg-[var(--color-accent)] text-white'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-card-border)]'
              }`}
            >
              <motion.span 
                className="mr-3"
                animate={isHovered === index ? { scale: 1.2 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 500, damping: 10 }}
              >
                {item.icon}
              </motion.span>
              <motion.span 
                className="font-medium"
                animate={isHovered === index ? { x: 5 } : { x: 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 10 }}
              >
                {item.label}
              </motion.span>
              {isActive(item.path) && (
                <motion.div 
                  className="ml-auto h-2 w-2 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: 'spring',
                    stiffness: 500,
                    damping: 30
                  }}
                />
              )}
            </NavLink>
          </motion.div>
        ))}
      </nav>
      
      <motion.div 
        className="p-4 border-[var(--color-card-border)] border-t"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div 
          className="flex items-center p-3 bg-[var(--color-card-border)] rounded-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <motion.div 
            className="flex justify-center items-center bg-[var(--color-accent)] mr-3 rounded-full w-10 h-10 font-medium text-white cursor-pointer"
            whileHover={{ rotate: 360, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
          >
            <motion.span
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            >
              U
            </motion.span>
          </motion.div>
          <div>
            <p className="font-medium text-[var(--color-text-primary)] text-sm">User Name</p>
            <p className="text-[var(--color-text-placeholder)] text-xs">user@example.com</p>
          </div>
        </motion.div>
      </motion.div>
    </aside>
    </div>
  );
}
