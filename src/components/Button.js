"use client";

import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export function Button() {
  const handleClick = () => {
    axios
      .post(`${baseUrl}api/insert`)
      .then((response) => {
        console.log(response, "-----------SUCCESS-----------");
      })
      .catch((error) => {
        console.error(error, "-----------erroR-----------");
      });
  };

  return <button onClick={handleClick}>Click me</button>;
}
