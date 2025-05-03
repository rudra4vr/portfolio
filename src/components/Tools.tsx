"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const ToolsSection = styled.section`
  min-height: 100vh;
  padding: ${theme.spacing.section} 0;
  background-color: ${theme.colors.secondary};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.margin};
`;

const ToolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.container};
  padding: ${theme.spacing.container};
  max-width: 1200px;
  margin: 0 auto;
`;

const FloatingCard = styled(motion.div)`
  background-color: ${theme.colors.background};
  border-radius: 20px;
  padding: ${theme.spacing.padding};
  position: relative;
  cursor: pointer;
  overflow: hidden;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ToolIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  margin-bottom: ${theme.spacing.margin};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const ToolName = styled(motion.h3)`
  font-size: ${theme.fontSizes.subtitle};
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.margin};
`;

const ToolDescription = styled(motion.p)`
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.text};
  opacity: 0.8;
`;

const Tooltip = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.primary};
  color: ${theme.colors.background};
  padding: ${theme.spacing.padding};
  border-radius: 10px;
  font-size: ${theme.fontSizes.small};
  z-index: ${theme.zIndex.modal};
  pointer-events: none;
  white-space: nowrap;
`;

const Tools: React.FC = () => {
  const [hoveredTool, setHoveredTool] = useState<number | null>(null);

  const tools = [
    {
      id: 1,
      name: 'Adobe After Effects',
      description: 'Motion graphics and visual effects',
      icon: '🎬',
      proficiency: 'Expert',
    },
    {
      id: 2,
      name: 'Adobe Premiere Pro',
      description: 'Video editing and post-production',
      icon: '🎥',
      proficiency: 'Expert',
    },
    {
      id: 3,
      name: 'Adobe Photoshop',
      description: 'Image editing and manipulation',
      icon: '🖼️',
      proficiency: 'Advanced',
    },
    {
      id: 4,
      name: 'Adobe Illustrator',
      description: 'Vector graphics and illustration',
      icon: '✏️',
      proficiency: 'Advanced',
    },
    {
      id: 5,
      name: 'Blender',
      description: '3D modeling and animation',
      icon: '🎨',
      proficiency: 'Intermediate',
    },
    {
      id: 6,
      name: 'Cinema 4D',
      description: '3D motion graphics',
      icon: '🎭',
      proficiency: 'Intermediate',
    },
    {
      id: 7,
      name: 'Figma',
      description: 'UI/UX design and prototyping',
      icon: '🎯',
      proficiency: 'Advanced',
    },
    {
      id: 8,
      name: 'Procreate',
      description: 'Digital illustration',
      icon: '🖌️',
      proficiency: 'Advanced',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <ToolsSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Tools & Software
      </SectionTitle>

      <ToolGrid>
        {tools.map((tool) => (
          <FloatingCard
            key={tool.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            onHoverStart={() => setHoveredTool(tool.id)}
            onHoverEnd={() => setHoveredTool(null)}
          >
            <ToolIcon
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {tool.icon}
            </ToolIcon>
            <ToolName>{tool.name}</ToolName>
            <ToolDescription>{tool.description}</ToolDescription>

            <AnimatePresence>
              {hoveredTool === tool.id && (
                <Tooltip
                  variants={tooltipVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  Proficiency: {tool.proficiency}
                </Tooltip>
              )}
            </AnimatePresence>
          </FloatingCard>
        ))}
      </ToolGrid>
    </ToolsSection>
  );
};

export default Tools; 