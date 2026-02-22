import { useState, useEffect } from 'react';

export function useVisitorCount() {
  const [count, setCount] = useState<number | null>(null);
  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/noida-live/page-visits/up')
      .then((r) => r.json())
      .then((data: { count?: number }) => {
        if (typeof data.count === 'number') setCount(data.count);
      })
      .catch(() => {});
  }, []);
  return count;
}
