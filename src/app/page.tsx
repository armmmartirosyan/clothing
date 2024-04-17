"use client";

import axios from "axios";

export default function Home() {
  const handleClick = () => {
    axios
      .get("http://localhost:3000/api/init")
      .then((response) => {
        console.log(response, "-----------SUCCESS-----------");
      })
      .catch((error) => {
        console.error(error, "-----------erroR-----------");
      });
  };
  return (
    <main>
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}
