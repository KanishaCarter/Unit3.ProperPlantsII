import { useState } from 'react';
import Cart from './Cart';
import IncreaseQty from './IncreaseQty';
import DecreaseQty from './DecreaseQty';


export default function AddToCart({ plant }) {
    const [count, setCount] = useState(0);
    const [selectedPlants, setSelectedPlants] = useState([]);
    selectedPlants.push(plant);

    return (
        <div>
            <p>{plantId}: {plantName}</p>
            <p>Qty: {count}</p>
            <button onClick={()=> IncreaseQty(count)}> + </button>
            <button onClick={()=> DecreaseQty(count)}> - </button>
        </div>
    )
}