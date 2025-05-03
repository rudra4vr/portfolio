"use client";

import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../styles/theme';

const VideoSection = styled.section`
  min-height: 100vh;
  padding: ${theme.spacing.section} 0;
  background-color: ${theme.colors.background};
`;

const SectionTitle = styled(motion.h2)`
  font-size: ${theme.fontSizes.title};
  color: ${theme.colors.primary};
  text-align: center;
  margin-bottom: ${theme.spacing.margin};
`;

const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${theme.spacing.container};
  padding: ${theme.spacing.container};
  max-width: 1200px;
  margin: 0 auto;
`;

const VideoCard = styled(motion.div)`
  position: relative;
  aspect-ratio: 16/9;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  background-color: ${theme.colors.secondary};

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const VideoOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.padding};
  opacity: 0;
  transition: opacity ${theme.transitions.default};
`;

const VideoTitle = styled.h3`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.subtitle};
  margin-bottom: ${theme.spacing.margin};
  text-align: center;
`;

const VideoDescription = styled.p`
  color: ${theme.colors.text};
  font-size: ${theme.fontSizes.body};
  text-align: center;
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
  max-width: 1200px;
  aspect-ratio: 16/9;
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

const ModalVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const VideoEditing: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const videos = [
    {
      id: 1,
      title: 'Motion Graphics Reel',
      description: 'Showcase of motion graphics and animation work',
      previewUrl: '/videos/preview1.mp4',
      fullUrl: '/videos/full1.mp4',
    },
    {
      id: 2,
      title: 'Commercial Project',
      description: 'Brand promotional video',
      previewUrl: '/videos/preview2.mp4',
      fullUrl: '/videos/full2.mp4',
    },
    {
      id: 3,
      title: 'Social Media Content',
      description: 'Short-form video content',
      previewUrl: '/videos/preview3.mp4',
      fullUrl: '/videos/full3.mp4',
    },
    // Add more videos as needed
  ];

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  return (
    <VideoSection>
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Video Editing & Motion Graphics
      </SectionTitle>

      <VideoGrid>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedVideo(video.id)}
          >
            <VideoPreview
              src={video.previewUrl}
              muted
              loop
              playsInline
              autoPlay
            />
            <VideoOverlay className="overlay">
              <VideoTitle>{video.title}</VideoTitle>
              <VideoDescription>{video.description}</VideoDescription>
            </VideoOverlay>
          </VideoCard>
        ))}
      </VideoGrid>

      <AnimatePresence>
        {selectedVideo && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
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
                onClick={() => setSelectedVideo(null)}
              >
                ×
              </CloseButton>
              <ModalVideo
                src={videos.find(v => v.id === selectedVideo)?.fullUrl}
                controls
                autoPlay
              />
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </VideoSection>
  );
};

export default VideoEditing; 