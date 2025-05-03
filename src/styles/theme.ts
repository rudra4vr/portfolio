"use client";

import { DefaultTheme } from 'styled-components';

export interface Theme extends DefaultTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
    error: string;
    success: string;
    light: string;
    dark: string;
    gradient: string;
    gradient2: string;
    gradient3: string;
  };
  fontSizes: {
    small: string;
    body: string;
    subtitle: string;
    title: string;
    large: string;
    xlarge: string;
  };
  spacing: {
    padding: string;
    margin: string;
    container: string;
    section: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
  transitions: {
    default: string;
    slow: string;
    spring: string;
    bounce: string;
  };
  zIndex: {
    modal: number;
    tooltip: number;
    overlay: number;
    content: number;
  };
  shadows: {
    small: string;
    medium: string;
    large: string;
    glow: string;
  };
  borderRadius: {
    small: string;
    medium: string;
    large: string;
    round: string;
  };
  animations: {
    hoverScale: string;
    hoverRotate: string;
    hoverGlow: string;
    float: string;
  };
}

export const theme: Theme = {
  colors: {
    primary: '#FF3D00',
    secondary: '#00BCD4',
    background: '#0A0A0A',
    text: '#FFFFFF',
    accent: '#FFC107',
    error: '#FF1744',
    success: '#00E676',
    light: '#1E1E1E',
    dark: '#000000',
    gradient: 'linear-gradient(135deg, #FF3D00 0%, #FFC107 100%)',
    gradient2: 'linear-gradient(135deg, #00BCD4 0%, #00E676 100%)',
    gradient3: 'linear-gradient(135deg, #FF1744 0%, #FF3D00 100%)',
  },
  fontSizes: {
    small: '0.875rem',
    body: '1rem',
    subtitle: '1.25rem',
    title: '2.5rem',
    large: '3.5rem',
    xlarge: '4.5rem',
  },
  spacing: {
    padding: '1.5rem',
    margin: '2.5rem',
    container: '5rem',
    section: '8rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    large: '1200px',
  },
  transitions: {
    default: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    spring: '0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    bounce: '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  zIndex: {
    modal: 1000,
    tooltip: 900,
    overlay: 800,
    content: 1,
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.1)',
    medium: '0 4px 8px rgba(0,0,0,0.2)',
    large: '0 8px 16px rgba(0,0,0,0.3)',
    glow: '0 0 20px rgba(255,61,0,0.5)',
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '50%',
  },
  animations: {
    hoverScale: 'scale(1.05)',
    hoverRotate: 'rotate(5deg)',
    hoverGlow: '0 0 20px rgba(255,61,0,0.5)',
    float: 'translateY(-5px)',
  },
}; 