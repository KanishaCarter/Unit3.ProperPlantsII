import { useState } from 'react';

export default function DecreaseQty(count) {
    const [count , setCount] = useState(count);

    return count - 1;
}