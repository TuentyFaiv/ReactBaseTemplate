import { useEffect, useState } from "react";
import config from "@config";

export default function useGetCountry() {
  const [countryState, setCountry] = useState({
    phoneCode: "",
    name: "",
    code: "",
    emoji: ""
  });

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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    })();
  }, []);

  return countryState;
}
