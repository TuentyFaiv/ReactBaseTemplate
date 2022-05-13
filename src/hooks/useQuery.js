import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function useQuery() {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const query = useMemo(() => ({}), []);

  searchParams.forEach((value, key) => {
    query[key] = value;
  });

  return query;
}
