import './plants.css';
import PLANTS from './data';
import { useState } from 'react';

export default function PlantList() {
    const [selectedPlant, setSelectedPlant] = useState(null);

    if (!selectedPlant) {
        return (
            <>
            <div className="catalogue-container">
                    <h2>Plants Catalogue</h2>
                    <text>-Click "Add to Cart" to add a plant to your cart.</text><br></br>
                    
                    {PLANTS.map((plant) => {
                        return (
                            <div key={plant.id} className="plant-details">
                                <h3>{plant.name}</h3>
                                <p>{plant.image}</p>
                                <button onClick={() => setSelectedPlant(plant)}>AddToCart</button>
                            </div>
                        )
                    })}
                </div>
            </>
        )
    }
}