import { useEffect, useState, useRef, useLayoutEffect, useCallback } from 'react';

const useInterval = (fn: Function, time: number) => {
  const ref = useRef(fn);

  useLayoutEffect(() => {
    ref.current = fn;
  });

  const cleanUpFnRef = useRef<Function>();

  const clean = useCallback(() => {
    cleanUpFnRef.current?.();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => ref.current(), time);

    cleanUpFnRef.current = () => {
      clearInterval(timer);
    }

    return clean;
  }, []);
};

const App = () => {
  const [count, setCount] = useState(0);

  const updateCount = () => {
    setCount(count + 1);
  }

  useInterval(updateCount, 500);

  return <div>{count}</div>;
}

export default App;