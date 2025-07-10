import { useState } from 'react';
import Cart from './Cart';
import IncreaseQty from './IncreaseQty';
import DecreaseQty from './DecreaseQty';


export default function AddToCart({ plantid, plantName, plantImg }) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{plantId}: {plantName}</p>
            <p>Qty: {count}</p>
            <button onClick={()=> IncreaseQty(count)}> + </button>
            <button onClick={()=> DecreaseQty(count)}> - </button>
        </div>
    )
}