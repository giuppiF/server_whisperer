"use client";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  console.log("somma");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-xl">Hello world!</div>
    </main>
  );
}
