"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const ExperienceSection = styled.section`
  min-height: 100vh;
  padding: ${theme.spacing.section} 0;
  background-color: ${theme.colors.background};
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.margin};
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.container};

  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background: ${theme.colors.secondary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    border-radius: 3px;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    &::after {
      left: 31px;
    }
  }
`;

const ExperienceCard = styled(motion.div)<{ isLeft?: boolean }>`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${props => props.isLeft ? '0' : '50%'};

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const CardContent = styled(motion.div)`
  padding: ${theme.spacing.padding};
  background: ${theme.colors.secondary};
  border-radius: 20px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: ${theme.colors.primary};
  border-radius: 50%;
  top: 15px;
  z-index: 1;

  @media (max-width: ${theme.breakpoints.tablet}) {
    left: 15px;
  }
`;

const Date = styled(motion.span)`
  color: ${theme.colors.primary};
  font-weight: bold;
  display: block;
  margin-bottom: ${theme.spacing.margin};
`;

const Title = styled(motion.h3)`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.subtitle};
  margin-bottom: ${theme.spacing.margin};
`;

const Company = styled(motion.span)`
  color: ${theme.colors.text};
  opacity: 0.8;
  display: block;
  margin-bottom: ${theme.spacing.margin};
`;

const Description = styled(motion.p)`
  color: ${theme.colors.text};
  opacity: 0.8;
  font-size: ${theme.fontSizes.body};
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${theme.zIndex.modal};
`;

const ModalContent = styled(motion.div)`
  background: ${theme.colors.background};
  padding: ${theme.spacing.container};
  border-radius: 20px;
  max-width: 800px;
  width: 90%;
  position: relative;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.large};
  cursor: pointer;
`;

const Experience: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 1,
      date: '2022 - Present',
      title: 'Senior Motion Designer',
      company: 'Creative Studio XYZ',
      description: 'Leading motion graphics projects and creating visual effects for major clients.',
      details: '• Created motion graphics for Fortune 500 companies\n• Developed brand animations and explainer videos\n• Managed a team of junior designers\n• Implemented new animation techniques and workflows',
    },
    {
      id: 2,
      date: '2020 - 2022',
      title: 'Freelance Video Editor',
      company: 'Self-Employed',
      description: 'Provided video editing and post-production services for various clients.',
      details: '• Edited promotional videos for startups\n• Created social media content\n• Developed motion graphics templates\n• Collaborated with content creators',
    },
    {
      id: 3,
      date: '2018 - 2020',
      title: 'Graphic Designer',
      company: 'Design Agency ABC',
      description: 'Created visual designs and animations for marketing campaigns.',
      details: '• Designed marketing materials\n• Created animated social media content\n• Developed brand guidelines\n• Worked on UI/UX projects',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <ExperienceSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience & Freelance
      </SectionTitle>

      <Timeline>
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.id}
            isLeft={index % 2 === 0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <CardContent onClick={() => setSelectedExperience(exp.id)}>
              <TimelineDot />
              <Date>{exp.date}</Date>
              <Title>{exp.title}</Title>
              <Company>{exp.company}</Company>
              <Description>{exp.description}</Description>
            </CardContent>
          </ExperienceCard>
        ))}
      </Timeline>

      <AnimatePresence>
        {selectedExperience && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedExperience(null)}
          >
            <ModalContent
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              <CloseButton
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSelectedExperience(null)}
              >
                ×
              </CloseButton>
              {experiences.find(exp => exp.id === selectedExperience) && (
                <>
                  <Date>{experiences.find(exp => exp.id === selectedExperience)?.date}</Date>
                  <Title>{experiences.find(exp => exp.id === selectedExperience)?.title}</Title>
                  <Company>{experiences.find(exp => exp.id === selectedExperience)?.company}</Company>
                  <Description style={{ whiteSpace: 'pre-line' }}>
                    {experiences.find(exp => exp.id === selectedExperience)?.details}
                  </Description>
                </>
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ExperienceSection>
  );
};

export default Experience; 