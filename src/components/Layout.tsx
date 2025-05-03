"use client";

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/globalStyles';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Rudra Raval - Creative Portfolio</title>
        <meta name="description" content="Portfolio of Rudra Raval - Graphic Designer, Animator, and Video Editor" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@700&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}; 