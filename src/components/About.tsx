"use client";

import React from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = styled(motion.section)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.section} 0;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.margin};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const AboutContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.margin};
`;

const AboutTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

const AboutText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  opacity: 0.8;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.padding};
`;

const SkillTag = styled(motion.span)`
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    background: ${({ theme }) => theme.colors.gradient};
    color: white;
    transform: ${({ theme }) => theme.animations.hoverScale};
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`;

const AboutImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 500px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 400px;
  }
`;

const About: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const skills = [
    'Motion Design',
    'Video Editing',
    '2D Animation',
    '3D Animation',
    'Visual Effects',
    'Color Grading',
    'Sound Design',
    'Storyboarding',
  ];

  return (
    <AboutSection
      style={{ y }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <AboutContainer>
        <AboutContent>
          <AboutTitle
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            About Me
          </AboutTitle>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            I'm a passionate motion designer and video editor with over 5 years of experience in creating compelling visual content. My expertise lies in transforming complex ideas into engaging motion graphics and videos that captivate audiences.
          </AboutText>
          <AboutText
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            With a strong foundation in both technical skills and creative storytelling, I specialize in producing high-quality content for brands, agencies, and creative projects.
          </AboutText>
          <SkillsContainer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {skills.map((skill, index) => (
              <SkillTag
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </SkillTag>
            ))}
          </SkillsContainer>
        </AboutContent>
        <AboutImage
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          whileHover={{ scale: 1.02 }}
        />
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 