"use client";

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled(motion.footer)`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spacing.padding};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Copyright = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.small};
  opacity: 0.7;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.padding};
`;

const SocialLink = styled(motion.a)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.body};
  text-decoration: none;
  opacity: 0.7;
  transition: all ${({ theme }) => theme.transitions.default};

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    transform: ${({ theme }) => theme.animations.hoverScale};
  }
`;

const Footer: React.FC = () => {
  const socialLinks = [
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://instagram.com', label: 'Instagram' },
    { href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <FooterContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <FooterContent>
        <Copyright
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          © {new Date().getFullYear()} RP. All rights reserved.
        </Copyright>
        <SocialLinks>
          {socialLinks.map((link, index) => (
            <SocialLink
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 0.7, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {link.label}
            </SocialLink>
          ))}
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 