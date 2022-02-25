import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchParams = useMemo(() => ({}), []);

  query.forEach((value, key) => {
    searchParams[key] = value;
  });

  return searchParams;
}
