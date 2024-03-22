// This file is for what is on every page in the application
import Footer from '../components/Footer';
import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ScrollProvider } from '../components/ScrollContext';

// Renders Header, Footer, and index.tsx components
const MyApp: React.FC<{ Component: React.ComponentType, pageProps: any }> = ({ Component, pageProps }) => {
  return (
    <ScrollProvider>
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>
        <Component {...pageProps} /> 
      </main>
      <Footer />
    </div>
    </ScrollProvider>
  );
};

export default MyApp;

