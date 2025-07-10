import { useState } from 'react';

export default function IncreaseQty(count) {
    const [count , setCount] = useState(count);

    return count + 1;
}