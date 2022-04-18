import { useMemo } from "react";

export default function useDatas(config) {
  const datas = useMemo(() => ({}), []);

  Object.keys(config).forEach((key) => {
    datas[`data-${key}`] = config[key];
  });

  return datas;
}
