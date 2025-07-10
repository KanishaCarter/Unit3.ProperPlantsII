import './plants.css';
import { PLANTS } from './data';
import { useState } from 'react';
import AddToCart from '../Cart/AddToCart';

export default function PlantList() {
    const [plant , setPlant] = useState(null);

    return (
        <div className="catalogue-container">
            <h2>Plants Catalogue</h2>
            <h3>Click "Add to Cart" to add a plant to your cart.</h3>
            {PLANTS.map((plant) => {
                return(
                    <li key={plant.id}>
                        <p>{plant.name}</p>
                        <img>{plant.image}</img>
                        <button onClick={()=> setPlant(plant)}>AddToCart</button>
                        <AddToCart id={plant.id} name={plant.name} image={plant.image} />
                    </li>
                )})}
            <AddToCart />
        </div>
    )
}

/**
const PLANTS = [
  {
    id: 1,
    image: "🌿",
    name: "Fern",
},
*/