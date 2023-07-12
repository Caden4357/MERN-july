import React, {useState} from 'react';

const Counter = (props) => {

    //    Getter,  Setter
    const [count, setCount] = useState(10)

    const increaseCount = () => {
        setCount(count+1)
    }
    return (
        <div>
            <h2>The Count Is: {count}</h2>
            <button onClick={() => setCount(count+1)}>Increase the count</button>
            <button onClick={increaseCount}>Increase the count</button>

        </div>
)}

export default Counter;