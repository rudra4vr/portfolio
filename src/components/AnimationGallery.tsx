"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../styles/theme';

const AnimationSection = styled.section`
  min-height: 100vh;
  background-color: ${theme.colors.background};
  overflow: hidden;
`;

const SnapContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  -webkit-overflow-scrolling: touch;
`;

const AnimTypeCard = styled(motion.div)`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.container};
  position: relative;
  overflow: hidden;
`;

const AnimTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes.xlarge};
  color: ${theme.colors.primary};
  margin-bottom: ${theme.spacing.margin};
  text-align: center;
  z-index: 1;
`;

const AnimDescription = styled(motion.p)`
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.text};
  max-width: 600px;
  text-align: center;
  margin-bottom: ${theme.spacing.margin};
  z-index: 1;
`;

const AnimContent = styled(motion.div)`
  width: 100%;
  max-width: 800px;
  height: 400px;
  background-color: ${theme.colors.secondary};
  border-radius: 20px;
  overflow: hidden;
  z-index: 1;
`;

const BackgroundPattern = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, ${theme.colors.secondary} 0%, ${theme.colors.background} 100%);
  opacity: 0.3;
  z-index: 0;
`;

const AnimationGallery: React.FC = () => {
  const animationTypes = [
    {
      id: 1,
      title: '2D Animation',
      description: 'Traditional and digital 2D animations with modern techniques',
      background: 'linear-gradient(45deg, #FF6F61, #6C63FF)',
    },
    {
      id: 2,
      title: '3D Animation',
      description: 'High-quality 3D models and animations for various applications',
      background: 'linear-gradient(45deg, #6C63FF, #4CAF50)',
    },
    {
      id: 3,
      title: 'Stop Motion',
      description: 'Handcrafted stop motion animations with unique character',
      background: 'linear-gradient(45deg, #4CAF50, #FFC107)',
    },
    {
      id: 4,
      title: 'Whiteboard',
      description: 'Educational and explainer animations with whiteboard style',
      background: 'linear-gradient(45deg, #FFC107, #2196F3)',
    },
    {
      id: 5,
      title: 'Claymation',
      description: 'Classic clay animation with modern storytelling',
      background: 'linear-gradient(45deg, #2196F3, #FF6F61)',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <AnimationSection>
      <SnapContainer>
        {animationTypes.map((type) => (
          <AnimTypeCard
            key={type.id}
            style={{ background: type.background }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <BackgroundPattern
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <AnimTitle variants={itemVariants}>{type.title}</AnimTitle>
            <AnimDescription variants={itemVariants}>
              {type.description}
            </AnimDescription>
            <AnimContent variants={itemVariants}>
              {/* Add your animation content here */}
            </AnimContent>
          </AnimTypeCard>
        ))}
      </SnapContainer>
    </AnimationSection>
  );
};

export default AnimationGallery; 