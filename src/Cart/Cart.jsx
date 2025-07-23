/** 
import { useState } from 'react';
import PlantList from '../Plants/PlantList';

export default function Cart({ selectedPlant }) {
    const [count, setCount] = useState(1);

    const userCart = [];
    userCart.push(selectedPlant);

    return (
        <div className="cart-container">
            {userCart.map((plant) => {
                return (
                    <div className="plant-details">
                        <ul>
                            <li key={plant.id}>
                                <p>{plant.name}</p>
                                <p>{plant.image}</p>
                                <p>Qty: {count}</p>
                                <button onClick={() => setCount(count + 1)}>Add + </button>
                                <button onClick={() => setCount((count > 0 ? count - 1 : count))}>Remove - </button>
                            </li>
                        </ul>
                    </div>
                )
            })
            }
        </div>
    )
}
    */