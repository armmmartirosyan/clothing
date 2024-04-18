"use client";

import axios from "axios";
import { useHost } from "@/hooks/useHost";

export default function Home() {
  const host = useHost();

  const handleClick = () => {
    if (!host) {
      console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      return;
    }

    axios
      .get(`${host}api/init`)
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
