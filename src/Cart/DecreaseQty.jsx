import { useState } from 'react';

export default function DecreaseQty(count) {
    const [count , setCount] = useState(count);

    if (count > 0) {
        return setCount(count - 1);
    }
    else {
        return setCount(count);
    }
}