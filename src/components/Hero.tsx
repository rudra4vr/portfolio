"use client";

import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.container};
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  line-height: 1.1;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  color: ${({ theme }) => theme.colors.text};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.margin};
  line-height: 1.6;
  opacity: 0.8;
`;

const HeroButton = styled(motion.button)`
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient2};
    z-index: -1;
    transition: transform 0.3s ease;
    transform: scaleX(0);
    transform-origin: right;
  }

  &:hover::before {
    transform: scaleX(1);
    transform-origin: left;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }

  &:active {
    transform: translateY(0);
  }
`;

const BackgroundPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, ${({ theme }) => theme.colors.light} 0%, ${({ theme }) => theme.colors.background} 100%);
  opacity: 0.3;
  z-index: 0;
`;

const FloatingElements = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 20px;
  height: 20px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  opacity: 0.2;
`;

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const floatingElements = Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    scale: Math.random() * 0.5 + 0.5,
    duration: Math.random() * 2 + 2,
  }));

  return (
    <HeroSection
      style={{ y }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundPattern
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <FloatingElements>
        {floatingElements.map((element) => (
          <FloatingElement
            key={element.id}
            initial={{
              x: `${element.x}%`,
              y: `${element.y}%`,
              scale: element.scale,
            }}
            animate={{
              y: [`${element.y}%`, `${element.y + 20}%`, `${element.y}%`],
              x: [`${element.x}%`, `${element.x + 10}%`, `${element.x}%`],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </FloatingElements>
      <HeroContent>
        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Creative Motion Designer & Video Editor
        </HeroTitle>
        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        >
          Transforming ideas into captivating visual experiences through motion design and video editing.
        </HeroSubtitle>
        <HeroButton
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View My Work
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 