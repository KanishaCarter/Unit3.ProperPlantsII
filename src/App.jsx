import { useState } from 'react';
import PlantList from './Plants/PlantList';


export default function App() {
  const [count, setCount] = useState();

  return (
    <>
      <div>
        <header>
          <h1>Proper Plants</h1>
        </header>
      </div>
      <PlantList />
    </>
  )
}
