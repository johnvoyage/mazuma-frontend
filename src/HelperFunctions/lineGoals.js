export const lineGoals = (
  numberOfDataPoints,
  startingDataPoint,
  percentOrDollar
) => {
  const goalData = [startingDataPoint];
  for (let i = 1; i < numberOfDataPoints; i++) {
    const priorDataPoint = goalData[i - 1];
    const nextDataPoint =
      Math.abs(percentOrDollar) < 1
        ? priorDataPoint * (1 + percentOrDollar)
        : priorDataPoint + percentOrDollar;
    goalData.push(nextDataPoint);
  }
  return goalData;
};
