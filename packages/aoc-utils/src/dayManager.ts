export const getDayManager = () => {
  const days: (() => Promise<void>)[] = [];

  const addDay = (day: () => Promise<void>) => {
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
