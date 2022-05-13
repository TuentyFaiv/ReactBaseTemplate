/* eslint-disable react/display-name */
import { useDatas } from "@hooks";
import { forwardRef } from "react";

const withDatasets = (Component) => (
  forwardRef(({ data = {}, ...props }, ref) => {
    const datas = useDatas(data);

    return (
      <Component
        ref={ref}
        datas={datas}
        {...props}
      />
    );
  })
);

export default withDatasets;
