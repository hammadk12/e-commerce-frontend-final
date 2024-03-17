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
      content: "At PearTech, our commitment to quality is paramount. We offer a diverse range of high-tech products, each carefully crafted to meet the highest standards. From the latest gadgets to reliable tech solutions, our products are designed to enhance your daily life and keep you ahead in a rapidly evolving digital world. Our rigorous quality control ensures that every item meets your expectations for performance and durability."
    },
    {
      title: "Trusted Service",
      content: "We believe that excellent customer service is the cornerstone of a great shopping experience. Our dedicated team is here to assist you at every step, from product inquiries to post-purchase support. We pride ourselves on our responsiveness, expertise, and commitment to your satisfaction. Whether you're a tech enthusiast or new to the world of technology, our team is ready to provide personalized service and advice to help you make informed decisions."
    },
    {
      title: "Learn More About Us",
      content: (
        <>
          PearTech is more than just a technology provider; we are a community of innovators and enthusiasts passionate about bringing the best in technology to you. Our journey, values, and mission are driven by a commitment to excellence and customer satisfaction. If you're curious to know more about our story, ethos, and the people behind PearTech, feel free to explore further on our  
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
