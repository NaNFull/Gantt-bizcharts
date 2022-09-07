import { GanttSettingsType } from "./GanttTypes";
import { chartData } from "./GanttFunctions";

export const ganttSettings: GanttSettingsType = (data) => ({
  chartSettings: {
    autoFit: true,
    data: chartData(data.valueSeq().toArray()),
    height: data.size * 48,
    interactions: ["element-active"],
    padding: 0,
    scale: {
      range: {
        max: 2.5,
        min: -0.5,
        nice: true,
        ticks: [0, 1, 2]
      }
    }
  },
  axisEmployeeSettings: {
    name: "email",
    line: {
      style: {}
    }
  },
  axisRangeSettings: {
    name: "range",
    grid: {
      alignTick: false,
      line: {
        style: {
          lineWidth: 1,
          stroke: "#D9D9D9"
        },
        type: "line"
      }
    }
  },
  coordinateSettings: {
    transpose: true,
    scale: [1, -1]
  },
  geomSettings: {
    type: "interval",
    animate: {
      appear: {
        animation: "scale-in-x"
      }
    },
    size: 24,
    color: ["statusId", ["red", "green"]],
    position: "email*range"
  }
});
