import { useEffect, useState } from "react";

export function useHost() {
  const [host, setHost] = useState("host");

  useEffect(() => {
    const host =
      window.document.location.protocol +
      "//" +
      window.document.location.host +
      "/";

    setHost(host);
  }, []);

  return host;
}
