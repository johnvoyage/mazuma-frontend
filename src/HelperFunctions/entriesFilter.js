const filterEntriesWithinDateRange = (arrayOfEntries, beginDate, endDate) => {
  return arrayOfEntries.filter(entry => {
    // debugger;
    const entryDate = entry.date.slice(0, 10);
    return entryDate >= beginDate.toString() && entryDate <= endDate;
  });
  // console.log(arrayOfEntries);
  // console.log(beginDate);
  // console.log(endDate);
};

export default {
  // entriesFilter: {
  filterEntriesWithinDateRange: filterEntriesWithinDateRange
  // }
};
