
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice'
import { useState } from 'react';

function App() {
 const {counter}  = useSelector(state => state.counter)
 const [inputValue, setInputValue] = useState(1);

 const handleInputChange = (event) => {
  const value = parseInt(event.target.value);
  setInputValue(value);
};


 const dispatch = useDispatch()
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
       <p>count is {counter}</p>
        <button onClick={()=>dispatch(increment())}>
          increment
        </button>

        <button onClick={()=>dispatch(decrement())}>
          Decrement
        </button>

        
        <button onClick={()=>dispatch(incrementByAmount(inputValue))}>
          increment By {inputValue || '-'}
        </button>

        <input
        type='number'
        name='numero'
        value={inputValue}
        onChange={handleInputChange}
      />




        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
