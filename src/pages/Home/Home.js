import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
  const news = useLoaderData()
  return (
    <div>
      <h2>Dragon News : {news.length}</h2>
    </div>
  );
};

export default Home;