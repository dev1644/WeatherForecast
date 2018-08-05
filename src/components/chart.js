import _ from "lodash";
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

const average = data => {
  return _.round(_.sum(data) / data.length);
};
export default props => {
  const { data, color, units } = props;
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine mean="avg" />
      </Sparklines>
      <div>
        {average(data)}
        {units}
      </div>
    </div>
  );
};
