// pages/index.tsx

import React from 'react';
import Header from '../components/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Welcome to MyTechStore</h1>
          {/* More content */}
        </section>

        {/* Featured Products */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          {/* Product list or placeholders */}
        </section>

        {/* Categories */}
        <section className="categories">
          <h2>Browse by Category</h2>
          {/* Category list or placeholders */}
        </section>

        {/* Other Sections as needed */}
      </main>
      
    </div>
  );
};

export default Home;

