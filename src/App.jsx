import { useState } from 'react';
import PlantList from './Plants/PlantList';


export default function App() {
  const [count, setCount] = useState();

  return (
  <>
  <PlantList />
  </>
  )
}
