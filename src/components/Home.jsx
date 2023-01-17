import React from 'react';
import '../app.css';
import CardList from './CardList.jsx';
import Header from './Header.jsx';

function Home() {
  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      <CardList />
    </div>
  );
}

export default Home;
