// This page is for the home page when application is opened
import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import { Http2ServerResponse } from 'http2';
// Defining props types
type HomePageProps = {
  message: string;
  heading: string;
  children?: React.ReactNode;
};

// Taking chidren as prop to display Head & Hero tags
const HomePage: React.FC<HomePageProps> = ({ children }) => {
  return (
    <>
    <h1>hi</h1>
      <Head>
        <title>PearTech- Everything Tech Related</title>
        <meta name="description" content='Welcome to PearTech, featuring all tech products!'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading="PearTech" message="We have everything you need." />
      <div>
        <p></p>
      </div>
    </>
  );
};

export default HomePage;
