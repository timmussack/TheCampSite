import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Card from './Card.jsx';
import { allCamps } from '../../store/allCamps.js';

function CardList() {
  // get data from redux store
  const campsites = useSelector((state) => state.campsites.data);

  const [campgrounds, setCampgrounds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [startNumber, setStartNumber] = useState(0);

  // need full list to test inifinte scroll
  const getData = (start) => {
    const slice = allCamps.data.slice(start, start + 20);
    setCampgrounds([...campgrounds, ...slice]);
    setHasMore(slice.length > 0);
    setLoading(false);
  };

  // runs when user reaches end of page
  // once data is fully figured out will also have it change
  // when search, distance, or sort changes
  useEffect(() => {
    console.log(startNumber);
    setLoading(true);
    getData(startNumber);
  }, [startNumber]);

  // part of inifinite scroll
  const observer = useRef();

  const lastImageElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((camps) => {
      if (camps[0].isIntersecting && hasMore) {
        setStartNumber((prevStartNumber) => prevStartNumber + 20);
        console.log('visible');
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // return (
  //   <div className="flex justify-center flex-wrap">
  //     {campsites.map((campsite) => (
  //       <Card
  //         key={campsite.id}
  //         campsite={campsite}
  //       />
  //     ))}
  //   </div>
  // );

  return (
    <div className="flex justify-center flex-wrap">
      {campgrounds.map((campsite, index) => {
        if (campgrounds.length === index + 1) {
          return <Card key={campsite.id} campsite={campsite} ref={lastImageElementRef} />;
        }
        return <Card key={campsite.id} campsite={campsite} />;
      })}
    </div>
  );
}

export default CardList;
