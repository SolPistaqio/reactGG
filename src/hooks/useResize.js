import { useState, useEffect } from "react";

function useResize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateDimensions() {
      setWidth(window.innerWidth);
    }
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return function cleanup() {
      window.removeEventListener("resize", updateDimensions);
    };
  });

  return width;
}

export default useResize;
