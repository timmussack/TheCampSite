import React from 'react';
import '../app.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeSample } from '../store/sampleReducer';

function App() {
  const sample = useSelector((state) => state.sample.testKey);
  const dispatch = useDispatch();

  const exclamationAdder = () => {
    // add '!' to state
    dispatch(changeSample(`${sample}!`));
  };

  return (
    <div className="">
      <h1 className="text-primary text-4xl font-bold">Hello World</h1>
      <div className="">{sample}</div>
      <button
        type="button"
        className=""
        onClick={exclamationAdder}
      >
        Add exclamation!!!
      </button>
    </div>
  );
}

export default App;
