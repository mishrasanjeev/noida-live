import { useState, useEffect } from 'react';

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/noida-live/page-visits/up')
      .then((r) => r.json())
      .then((data: { value: number }) => setCount(data.value))
      .catch(() => {});
  }, []);
  return count;
}
