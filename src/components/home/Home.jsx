/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useSelector } from 'react-redux';
import { ArrowUpIcon } from '@heroicons/react/20/solid';
import CardList from './CardList.jsx';
import Header from '../header/Header.jsx';

function Home() {
  const campsites = useSelector((state) => state.campsites.data);
  return (
    <div>
      <div className="font-primary w-full min-h-screen p-2 max-w-1920">
        <Header />
        {campsites.length > 0 && <CardList />}
      </div>
      <a href="#">
        <footer className="sticky bottom-5 right-0 w-fill cursor-pointer">
          <div className="flex items-end justify-end sm:pr-[1%] pt-[100px]">
            <ArrowUpIcon
              className="h-10 w-10 cursor-pointer"
            />
          </div>
        </footer>
      </a>
    </div>
  );
}

export default Home;
