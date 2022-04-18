import { useEffect, useState } from "react";
import config from "@config";

export default function useGetCountry() {
  const [countryState, setCountry] = useState({
    phoneCode: "",
    name: "",
    code: "",
    emoji: ""
  });
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(`${config.ipregistry_url}?key=${config.ipregistry_key}`);
        const { location: { country } } = await request.json();
        setCountry((prevCountry) => ({
          ...prevCountry,
          phoneCode: `+${country.calling_code}`,
          name: country.name,
          code: country.code,
          emoji: country.flag.emoji
        }));
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return { country: countryState, error };
}
