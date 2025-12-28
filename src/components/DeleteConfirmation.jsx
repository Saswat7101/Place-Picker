import { useEffect, useState } from "react";

const THREE_SECONDS = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [progress, setProgress] = useState(THREE_SECONDS);

  useEffect(() => {
    setInterval(() => {
      setProgress((prevProgress) => (prevProgress > 0 ? prevProgress - 10 : 0));
    }, 10);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      onConfirm();
    }, THREE_SECONDS); // to test modal behavior

    return () => {
      clearTimeout(timer);
    };
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={progress} max={THREE_SECONDS} />
    </div>
  );
}
