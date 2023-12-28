import { Box } from "@mantine/core"
import { useEffect, useState } from "react";

function Square() {
    const [time, setTime] = useState(Date.now());

useEffect(() => {
  const interval = setInterval(() => setTime(Date.now()), 1000);
  return () => {
    clearInterval(interval);
  };
}, []);
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
  return (
    <Box bg={getRandomColor()} c="transparent">Hi</Box>
  )
}

export default Square