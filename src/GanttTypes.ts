import { IGemo } from "bizcharts/lib/geometry";
import { ICoordinateProps } from "bizcharts/lib/components/Coordinate";
import { IAxis } from "bizcharts/lib/components/Axis";
import { IChartProps } from "bizcharts/lib/interface";
import Immutable from "immutable";

export type GanttSettingsType = (
  data: Immutable.Map<string, DataGantt>
) => {
  chartSettings: IChartProps;
  axisEmployeeSettings: IAxis;
  axisRangeSettings: IAxis;
  coordinateSettings: ICoordinateProps;
  geomSettings: IGemo;
};

export interface DataGantt {
  email: string;
  statusId: number;
  range?: [string | number, string | number];
}

export interface GanttRootProps {
  data: Immutable.Map<string, DataGantt>;
  className?: string;
}

export type GanttContentProps = GanttRootProps;
