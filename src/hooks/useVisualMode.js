import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (nextMode, replace = false) => {
    //goes back to the previous status and replace
    setMode(nextMode);
    setHistory((prev) => {
      const newHistory = [...prev];
      if (replace) {
        newHistory.pop();
        return [...newHistory, nextMode];
      }
      //jumps to the next status
      return [...prev, nextMode];
    });
  };
  const back = () => {
    // if it's in the first mode don't do anything
    if (history.length > 1) {
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop();
        const previousMode = newHistory[newHistory.length - 1];
        setMode(previousMode);
        return newHistory;
      });
    }
  };

  return { mode, transition, back };
}
