import { useState, useEffect, Dispatch, SetStateAction } from "react";

function useProxyValue<T>(value: T): [T, Dispatch<SetStateAction<T>>] {
  const [proxyValue, setProxyValue] = useState(value);

  useEffect(() => {
    setProxyValue(value);
  }, [value]);

  return [proxyValue, setProxyValue];
}

export default useProxyValue;
