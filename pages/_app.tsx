// This file is for what is on every page in the application
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { ScrollProvider } from '../components/ScrollContext';

// Renders Header, Footer, and index.tsx components
const MyApp: React.FC<{ Component: React.ComponentType, pageProps: any }> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    // Set up an Axios interceptor
    const responseInterceptor = axios.interceptors.response.use(response => {
        // This function handles all successful responses globally
        return response;
    }, error => {
        // This function handles errors from all responses globally
        if (error.response && error.response.status === 401) {
            // If the error status is 401 (Unauthorized)

            // Clear the cookie named 'token'
            document.cookie = 'token=; Max-Age=0; path=/';

            // Redirect to the login page
            router.push('/login');
        }
        return Promise.reject(error);
    });

  return () => {
    // Clean up the interceptor when the component unmounts to prevent memory leaks
    axios.interceptors.response.eject(responseInterceptor);
  };
}, []);
  
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

