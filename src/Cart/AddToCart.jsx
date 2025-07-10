import { useState } from 'react';
import DecreaseQty from './DecreaseQty';
import IncreaseQty from './IncreaseQty';

export default function AddToCart({id, name, image}) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>{id}: {name}</p>
            <p>Qty: {count}</p>
            <button onClick={()=>IncreaseQty}> + </button>
            <button onClick={()=>DecreaseQty}> - </button>
        </div>
    )
}