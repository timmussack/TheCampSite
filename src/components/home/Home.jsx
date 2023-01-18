import React from 'react';
import { useSelector } from 'react-redux';
import CardList from './CardList.jsx';
import Header from '../header/Header.jsx';

function Home() {
  const campsites = useSelector((state) => state.campsites.data);
  return (
    <div className="font-primary w-full min-h-screen p-2">
      <Header />
      {campsites && <CardList />}
    </div>
  );
}

export default Home;
