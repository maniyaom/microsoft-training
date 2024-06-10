import { useEffect, useState } from 'react';

const Counter = () => {

const productPrice = 230;

  const [counterValue, setCounterValue] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const incrementCount = () => {
    setCounterValue(counterValue + 1);
  }

  const decrementCount = () => {
    setCounterValue(counterValue - 1);
  }

  useEffect(() => {
    setTotalPrice(counterValue*productPrice);
  },[counterValue])

return(
<div className="App">
      <span className='text-value'>{counterValue}</span>
      <button className='btn' onClick={incrementCount}>+</button>
      <button className='btn' onClick={decrementCount}>-</button>
      <span className='text-value'>Price : {totalPrice}</span>
</div>
)
}

export default Counter;