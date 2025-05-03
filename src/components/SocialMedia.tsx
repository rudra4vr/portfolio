"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const SocialSection = styled.section`
  min-height: 100vh;
  padding: ${theme.spacing.section} 0;
  background-color: ${theme.colors.secondary};
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.margin};
`;

const PlatformTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: ${theme.spacing.padding};
  margin-bottom: ${theme.spacing.margin};
  flex-wrap: wrap;
`;

const TabButton = styled(motion.button)<{ isActive: boolean }>`
  padding: ${theme.spacing.padding};
  border: none;
  border-radius: 20px;
  background: ${props => props.isActive ? theme.colors.primary : theme.colors.background};
  color: ${props => props.isActive ? theme.colors.background : theme.colors.text};
  cursor: pointer;
  font-size: ${theme.fontSizes.body};
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.container};
  padding: ${theme.spacing.container};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 9/16;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${theme.colors.background};
`;

const ContentPreview = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${theme.spacing.padding};
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  color: ${theme.colors.text};
`;

const PlatformIcon = styled(motion.div)`
  position: absolute;
  top: ${theme.spacing.padding};
  right: ${theme.spacing.padding};
  width: 40px;
  height: 40px;
  background: ${theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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
  position: relative;
  width: 90%;
  max-width: 500px;
  aspect-ratio: 9/16;
  background: ${theme.colors.background};
  border-radius: 20px;
  overflow: hidden;
`;

const CloseButton = styled(motion.button)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${theme.colors.primary};
  color: ${theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${theme.fontSizes.large};
  z-index: ${theme.zIndex.modal + 1};
  cursor: pointer;
`;

const SocialMedia: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<string>('all');
  const [selectedContent, setSelectedContent] = useState<number | null>(null);

  const platforms = [
    { id: 'all', name: 'All', icon: '🌐' },
    { id: 'instagram', name: 'Instagram', icon: '📸' },
    { id: 'tiktok', name: 'TikTok', icon: '🎵' },
    { id: 'youtube', name: 'YouTube', icon: '▶️' },
  ];

  const content = [
    {
      id: 1,
      platform: 'instagram',
      title: 'Motion Graphics Showcase',
      description: 'Behind the scenes of our latest project',
      type: 'video',
      previewUrl: '/videos/reel1.mp4',
      fullUrl: '/videos/reel1-full.mp4',
    },
    {
      id: 2,
      platform: 'tiktok',
      title: 'Animation Process',
      description: 'How we create our animations',
      type: 'video',
      previewUrl: '/videos/reel2.mp4',
      fullUrl: '/videos/reel2-full.mp4',
    },
    {
      id: 3,
      platform: 'youtube',
      title: 'Design Tips',
      description: 'Quick tips for better designs',
      type: 'video',
      previewUrl: '/videos/reel3.mp4',
      fullUrl: '/videos/reel3-full.mp4',
    },
    {
      id: 4,
      platform: 'instagram',
      title: 'Project Preview',
      description: 'Sneak peek of upcoming work',
      type: 'image',
      previewUrl: '/images/reel4.jpg',
      fullUrl: '/images/reel4-full.jpg',
    },
  ];

  const filteredContent = activePlatform === 'all'
    ? content
    : content.filter(item => item.platform === activePlatform);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <SocialSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Social Media & Reels
      </SectionTitle>

      <PlatformTabs>
        {platforms.map(platform => (
          <TabButton
            key={platform.id}
            isActive={activePlatform === platform.id}
            onClick={() => setActivePlatform(platform.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {platform.icon} {platform.name}
          </TabButton>
        ))}
      </PlatformTabs>

      <ContentGrid>
        {filteredContent.map(item => (
          <ContentCard
            key={item.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onClick={() => setSelectedContent(item.id)}
          >
            <ContentPreview>
              {item.type === 'video' ? (
                <VideoPreview
                  src={item.previewUrl}
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <ImagePreview src={item.previewUrl} alt={item.title} />
              )}
              <Overlay>
                <motion.h3>{item.title}</motion.h3>
                <motion.p>{item.description}</motion.p>
              </Overlay>
              <PlatformIcon>
                {platforms.find(p => p.id === item.platform)?.icon}
              </PlatformIcon>
            </ContentPreview>
          </ContentCard>
        ))}
      </ContentGrid>

      <AnimatePresence>
        {selectedContent && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedContent(null)}
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
                onClick={() => setSelectedContent(null)}
              >
                ×
              </CloseButton>
              {content.find(item => item.id === selectedContent)?.type === 'video' ? (
                <VideoPreview
                  src={content.find(item => item.id === selectedContent)?.fullUrl}
                  controls
                  autoPlay
                />
              ) : (
                <ImagePreview
                  src={content.find(item => item.id === selectedContent)?.fullUrl}
                  alt={content.find(item => item.id === selectedContent)?.title}
                />
              )}
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </SocialSection>
  );
};

export default SocialMedia; 