import { useLocation } from "react-router-dom";

const useQuery = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchParams = {};

  query.forEach((value, key) => {
    searchParams[key] = value;
  });

  return searchParams;
};

export default useQuery;
