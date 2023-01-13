import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {changeSample} from '../store/sampleReducer.js'

const App = () => {
  const sample = useSelector((state) => state.sample.testKey);
  const dispatch = useDispatch()

  const exclamationAdder = (e) => {
    // add '!' to state
    dispatch(changeSample(sample + '!'))
  }

  return (
    <div>
      <h1>Hello World</h1>
      <div>{sample}</div>
      <button onClick={exclamationAdder}>Add exclamation</button>
    </div>
  )
}

export default App