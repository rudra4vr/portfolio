"use client";

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: ${({ theme }) => theme.spacing.padding};
  background: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.margin};
`;

const NavLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: 500;
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transition: all ${({ theme }) => theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.colors.gradient};
    transition: all ${({ theme }) => theme.transitions.default};
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: ${({ theme }) => theme.animations.hoverScale};
    
    &::after {
      width: 100%;
    }
  }
`;

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -100]);
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#video', label: 'Video' },
    { href: '#animation', label: 'Animation' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <HeaderContainer
      style={{
        y: headerY,
        opacity: headerOpacity,
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
      }}
    >
      <Nav>
        <Logo
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          RP
        </Logo>
        <NavLinks>
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.href}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavLinks>
      </Nav>
    </HeaderContainer>
  );
};

export default Header; 