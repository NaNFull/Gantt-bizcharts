import { Chart, Geom, Axis, Tooltip, Legend, Coordinate } from "bizcharts";
import { ganttSettings } from "../GanttSettings";
import { GanttContentProps } from "../GanttTypes";
import React from "react";

export const GanttContent = ({
  data,
  className = "antVG2_gantt"
}: GanttContentProps) => {
  const {
    chartSettings,
    axisEmployeeSettings,
    axisRangeSettings,
    coordinateSettings,
    geomSettings
  } = ganttSettings(data);

  return (
    <Chart className={className} {...chartSettings}>
      <Axis {...axisEmployeeSettings} />
      <Axis {...axisRangeSettings} />
      <Coordinate {...coordinateSettings} />
      <Geom {...geomSettings} />
      <Legend container="container" visible={false} />
      <Tooltip showMarkers={false} />
    </Chart>
  );
};
