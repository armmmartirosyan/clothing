"use client";

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function Home() {
  const handleClick = () => {
    axios
      .get(`${baseUrl}api/init`)
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
