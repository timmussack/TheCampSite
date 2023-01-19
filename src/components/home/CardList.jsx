import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Card from './Card.jsx';

function CardList() {
  // get data from redux store
  const campsites = useSelector((state) => state.campsites.data);

  const [currentList, setCurrentList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [startNumber, setStartNumber] = useState(0);

  // need full list to test inifinte scroll
  const getData = (start) => {
    const slice = campsites.slice(start, start + 20);
    setCurrentList([...currentList, ...slice]);
    setHasMore(slice.length > 0);
    setLoading(false);
  };

  // runs when user reaches end of page
  // once data is fully figured out will also have it change when search, distance, or sort changes
  useEffect(() => {
    setLoading(true);
    return campsites && getData(startNumber);
  }, [startNumber]);

  // part of inifinite scroll
  const observer = useRef();

  // part of infinite scroll
  const lastImageElementRef = useCallback((node) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((camps) => {
      if (camps[0].isIntersecting && hasMore) {
        setStartNumber((prevStartNumber) => prevStartNumber + 20);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-5">
      {campsites.length > 0 && currentList.map((campsite, index) => {
        if (currentList.length === index + 1) {
          return <Card key={campsite.id} campsite={campsite} ref={lastImageElementRef} />;
        }
        return <Card key={campsite.id} campsite={campsite} />;
      })}
    </div>
  );
}

export default CardList;
