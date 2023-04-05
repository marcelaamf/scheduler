import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (nextMode, replace = false) => {
    //goes back to the previous status and replace
    const newHistory = [...history];
    if (replace) {
      newHistory.pop();
      setMode(nextMode);
      setHistory([...newHistory, nextMode]);
    }
    //jumps to the next status
    else {
      setMode(nextMode);
      setHistory([...history, nextMode]);
    }
  };
  const back = () => {
    // if it's in the first mode don't do anything
    if (history.length <= 1) {
      return;
    } else {
      const newHistory = [...history];
      newHistory.pop();
      const previousMode = newHistory[newHistory.length - 1];
      setMode(previousMode);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
}
