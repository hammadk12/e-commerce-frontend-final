// This file is for what is on every page in the application

import React from 'react';
import Header from '../components/Header';
import '../styles/globals.css';
import Hero from '../components/Hero';

const MyApp: React.FC<{ Component: React.ComponentType, pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;

