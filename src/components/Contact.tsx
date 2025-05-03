"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.container};
  max-width: 1200px;
  margin: 0 auto;
  padding: ${theme.spacing.container};

  @media (max-width: ${theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const FormContainer = styled(motion.div)`
  background: ${theme.colors.secondary};
  padding: ${theme.spacing.container};
  border-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.padding};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.body};
`;

const Input = styled.input`
  padding: ${theme.spacing.padding};
  border: none;
  border-radius: 10px;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.body};

  &:focus {
    outline: 2px solid ${theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  padding: ${theme.spacing.padding};
  border: none;
  border-radius: 10px;
  background: ${theme.colors.background};
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.body};
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: 2px solid ${theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  padding: ${theme.spacing.padding};
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  border: none;
  border-radius: 10px;
  font-size: ${theme.fontSizes.body};
  cursor: pointer;
  margin-top: ${theme.spacing.margin};
`;

const InfoContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.container};
`;

const CollaborationCard = styled(motion.div)`
  background: ${theme.colors.secondary};
  padding: ${theme.spacing.container};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.padding};
`;

const CardTitle = styled.h3`
  color: ${theme.colors.primary};
  font-size: ${theme.fontSizes.subtitle};
  margin-bottom: ${theme.spacing.margin};
`;

const CardDescription = styled.p`
  color: ${theme.colors.text};
  opacity: 0.8;
  font-size: ${theme.fontSizes.body};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.padding};
  margin-top: ${theme.spacing.margin};
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text};
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.background};
  }
`;

const StatusMessage = styled(motion.div)<{ $isError?: boolean }>`
  padding: ${theme.spacing.padding};
  border-radius: 10px;
  background: ${props => props.$isError ? 'rgba(255, 0, 0, 0.1)' : 'rgba(0, 255, 0, 0.1)'};
  color: ${props => props.$isError ? theme.colors.error : theme.colors.success};
  margin-top: ${theme.spacing.margin};
  text-align: center;
`;

const LoadingSpinner = styled(motion.div)`
  width: 20px;
  height: 20px;
  border: 2px solid ${theme.colors.background};
  border-top-color: transparent;
  border-radius: 50%;
  margin: 0 auto;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | 'loading' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus({
        type: 'success',
        message: 'Message sent successfully! We\'ll get back to you soon.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    }
  };

  const socialLinks = [
    { platform: 'Instagram', url: 'https://instagram.com', icon: '📸' },
    { platform: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
    { platform: 'Behance', url: 'https://behance.net', icon: '🎨' },
    { platform: 'Dribbble', url: 'https://dribbble.com', icon: '🏀' },
  ];

  const collaborationTypes = [
    {
      title: 'Brand Projects',
      description: 'Looking to collaborate on brand identity, motion graphics, or marketing campaigns? Let\'s create something amazing together.',
    },
    {
      title: 'Video Production',
      description: 'Need help with video editing, motion graphics, or animation? I can help bring your vision to life.',
    },
    {
      title: 'Creative Consulting',
      description: 'Want to improve your creative process or need guidance on design decisions? Let\'s discuss your goals.',
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

  return (
    <ContactSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Contact & Collaborate
      </SectionTitle>

      <ContactContainer>
        <FormContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Form onSubmit={handleSubmit}>
            <InputGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
              />
            </InputGroup>

            <InputGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.type === 'loading'}
              />
            </InputGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={status.type === 'loading'}
            >
              {status.type === 'loading' ? (
                <LoadingSpinner
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : (
                'Send Message'
              )}
            </SubmitButton>

            <AnimatePresence>
              {status.type && (
                <StatusMessage
                  $isError={status.type === 'error'}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {status.message}
                </StatusMessage>
              )}
            </AnimatePresence>
          </Form>
        </FormContainer>

        <InfoContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {collaborationTypes.map((type, index) => (
            <CollaborationCard
              key={index}
              variants={itemVariants}
            >
              <CardTitle>{type.title}</CardTitle>
              <CardDescription>{type.description}</CardDescription>
            </CollaborationCard>
          ))}

          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </InfoContainer>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact; 