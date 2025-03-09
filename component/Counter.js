"use client";

import { useState } from "react";

export default function Counter({ title, id }) {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  async function handleCounterAction(action) {
    setIsLoading(true);

    try {
      const response = await fetch(`/api/counter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ action, counterId: id }),
      });

      if (!response.ok) {
        throw new Error("Failed to update counter");
      }

      // Update local state after successful API Call
      setCount((prev) =>
        action === "increment" ? prev + 1 : prev - 1
      );
    } catch (error) {
      console.error("Error updating counter", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <button 
        onClick={() => handleCounterAction("decrement")} 
        className="btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        disabled={isLoading} > - </button>
      <span>{count}</span>
      <button 
        onClick={() => handleCounterAction("increment")} 
        className="btn-circle btn-xs sm:btn-sm md:btn-md lg:btn-lg"
        disabled={isLoading} > + </button>
    </div>
  );
}