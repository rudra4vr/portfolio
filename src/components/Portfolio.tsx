"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolioSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.section} 0;
`;

const PortfolioContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.container};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: ${({ theme }) => theme.borderRadius.small};
  }
`;

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.padding};
  margin-bottom: ${({ theme }) => theme.spacing.margin};
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.padding};
  }
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  background: ${({ theme, active }) => active ? theme.colors.gradient : theme.colors.light};
  color: ${({ theme, active }) => active ? 'white' : theme.colors.primary};
  box-shadow: ${({ theme, active }) => active ? theme.shadows.medium : 'none'};
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const PortfolioGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.margin};
  margin-top: ${({ theme }) => theme.spacing.margin};
`;

const PortfolioItem = styled(motion.div)`
  position: relative;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  aspect-ratio: 16/9;
  box-shadow: ${({ theme }) => theme.shadows.medium};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.gradient};
    opacity: 0.8;
    transition: opacity ${({ theme }) => theme.transitions.default};
  }

  &:hover::before {
    opacity: 0.6;
  }
`;

const ItemContent = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.padding};
  color: white;
  z-index: 1;
`;

const ItemTitle = styled(motion.h3)`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};
  margin-bottom: 0.5rem;
`;

const ItemCategory = styled(motion.span)`
  font-size: ${({ theme }) => theme.fontSizes.small};
  opacity: 0.8;
`;

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Motion Design', 'Video Editing', 'Animation', 'Visual Effects'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Identity Animation',
      category: 'Motion Design',
      image: '/images/portfolio1.jpg',
    },
    {
      id: 2,
      title: 'Product Launch Video',
      category: 'Video Editing',
      image: '/images/portfolio2.jpg',
    },
    {
      id: 3,
      title: 'Character Animation',
      category: 'Animation',
      image: '/images/portfolio3.jpg',
    },
    {
      id: 4,
      title: 'Visual Effects Showreel',
      category: 'Visual Effects',
      image: '/images/portfolio4.jpg',
    },
    {
      id: 5,
      title: 'Motion Graphics Package',
      category: 'Motion Design',
      image: '/images/portfolio5.jpg',
    },
    {
      id: 6,
      title: 'Corporate Video',
      category: 'Video Editing',
      image: '/images/portfolio6.jpg',
    },
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <PortfolioSection>
      <PortfolioContainer>
        <SectionTitle
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          Portfolio
        </SectionTitle>
        <FilterButtons
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              active={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
              variants={itemVariants}
            >
              {filter}
            </FilterButton>
          ))}
        </FilterButtons>
        <PortfolioGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredItems.map((item) => (
            <PortfolioItem
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ItemContent>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemCategory>{item.category}</ItemCategory>
              </ItemContent>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio; 