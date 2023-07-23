import { MutableRefObject, useEffect, useRef } from "react";

function useCallbackRef<T extends (...args: any[]) => any>(
  callback: T
): MutableRefObject<T> {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return callbackRef;
}

export default useCallbackRef;
