import { useEffect, useState } from "react";

export default function ProgressBar({ timer }) {
  const [progress, setProgress] = useState(timer);

  useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0));
    }, 10);
  }, []);

  return <progress value={progress} max={timer} />;
}
