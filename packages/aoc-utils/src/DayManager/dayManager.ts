import type {DayMethod} from "./dayManager.types";

export const getDayManager = () => {
  const days: DayMethod[] = [];

  const addDay = (day: DayMethod) => {
    days.push(day);
  };

  const runAll = async () => {
    for (const day of days) {
      await day();
    }
  };

  return {
    addDay,
    runAll,
  };
};
