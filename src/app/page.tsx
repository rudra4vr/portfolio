"use client";

import React from 'react';
import { Layout } from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import VideoEditing from '../components/VideoEditing';
import AnimationGallery from '../components/AnimationGallery';
import Tools from '../components/Tools';
import Experience from '../components/Experience';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <VideoEditing />
        <AnimationGallery />
        <Tools />
        <Experience />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
};

export default Home;
