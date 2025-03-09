"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div>
        <button className="btn-circle	btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={decrement}>-</button>
        <span>{count}</span>
        <button className="btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={increment} >+</button>
    </div>
          
  );
}