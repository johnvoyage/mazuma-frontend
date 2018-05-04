const dateSymbolReplace = (date, replaceThis, withThis) => {
  return date.replace(replaceThis, withThis).replace(replaceThis, withThis);
};

const pullDateDDMMYYYY = date => {
  const [dd, mm, yyyy] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear()
  ];
  return [dd, mm, yyyy];
};

const dateHelpersEnglish = date => {
  let [dd, mm, yyyy] = pullDateDDMMYYYY(date);
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : dd;
  return `${mm}/${dd}/${yyyy}`;
};

const dateHelpersJavaScript = date => {
  let [dd, mm, yyyy] = pullDateDDMMYYYY(date);
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : dd;
  return `${yyyy}-${mm}-${dd}`;
};

const tomorrow = date => {
  let today = new Date(date);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  let [dd, mm, yyyy] = pullDateDDMMYYYY(tomorrow);
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : mm;
  return `${yyyy}/${mm}/${dd}`;
};

const arrayOfEntryDates = entries => {
  return entries.map(entry => {
    return dateSymbolReplace(entry.date.slice(0, 10), "-", "/");
  });
};

const arrayOfDatesWithEntries = (beginDate, endDate, entries) => {
  const arrayOfDates = [];
  const arrayOfDatesWithEntries = arrayOfEntryDates(entries);
  let currentDate = beginDate;
  while (new Date(currentDate) < new Date(endDate)) {
    if (arrayOfDatesWithEntries.indexOf(currentDate) > -1) {
      arrayOfDates.push(currentDate);
    }
    currentDate = tomorrow(currentDate);
  }
  return arrayOfDates;
};

export default {
  dateSymbolReplace,
  dateHelpersJavaScript,
  dateHelpersEnglish,
  arrayOfDatesWithEntries
};
