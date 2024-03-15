// This page is for the home page when application is opened
import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import SliderData from '../components/SliderData';
import Instagram from '../components/Instagram';
import InfoSection from '../components/InfoSection';
import Link from 'next/link';

// Defining props types
type HomePageProps = {
  message: string;
  heading: string;
};

// Taking chidren as prop to display Head & Hero tags
const HomePage: React.FC<HomePageProps> = ({ heading, message }) => {

  // Define infoCards data for InfoSection
  const infoCards = [
    {
      title: "Quality Products",
      content: "We offer a wide range of high-quality tech products tailored to meet your needs."
    },
    {
      title: "Trusted Service",
      content: "Our dedicated team ensures you receive the best customer service, always."
    },
    {
      title: "Learn More About Us",
      content: (
        <>
          If you would like more information, check out our 
          <Link href="/about"><span className="font-bold hover:underline ml-1">about</span></Link> page.
        </>
      )
    }
  ];

  return (
    <>
      <Head>
        <title>PearTech- Everything Tech Related</title>
        <meta name="description" content='Welcome to PearTech, featuring all tech products!'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero heading="PearTech" message="We have everything you need." message2="Shop" redirectPath='/shop'/>
      <Slider slides={SliderData}/>
      <InfoSection cards={infoCards}/>
      <Instagram />
    </>
  );
};

export default HomePage;
