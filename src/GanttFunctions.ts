import moment from "moment";
import { DataGantt } from "./GanttTypes";

export const valueOfDate = (datePrev: string | number, addDay = 0) => {
  const date = moment(datePrev);
  const month = date.month();
  const year = date.year();
  const nowDateValue = moment([0, 0, 1]).year(year).month(month).valueOf();
  const nextDateValue = moment([0, 0, 1])
    .year(year)
    .month(month + 1)
    .valueOf();

  return (
    month +
    (date.valueOf() + addDay * 86_400_000 - nowDateValue) /
      (nextDateValue - nowDateValue)
  );
};

export const chartData = (data: DataGantt[]) => {
  return data.map((item) => {
    if (item.range) {
      const [start, end] = item.range;
      item.range = [valueOfDate(start) - 0.5, valueOfDate(end, 1) - 0.5];
    }
    return item;
  });
};
