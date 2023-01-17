import React from 'react';
import CardList from './CardList.jsx';
import Header from '../header/Header.jsx';

function Home() {
  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      <CardList />
    </div>
  );
}

export default Home;
