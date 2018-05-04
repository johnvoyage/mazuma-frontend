const hyphensToSlashes = date => {
  return date.replace("-", "/").replace("-", "/");
};

const pullDateDDMMYYYY = date => {
  const [dd, mm, yyyy] = [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear()
  ];
  return [dd, mm, yyyy];
};

const formatDateEnglish = date => {
  let [dd, mm, yyyy] = pullDateDDMMYYYY(date);
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : dd;
  return `${mm}/${dd}/${yyyy}`;
};

const formatDateJavaScript = date => {
  let [dd, mm, yyyy] = pullDateDDMMYYYY(date);
  dd = dd < 10 ? "0" + dd : dd;
  mm = mm < 10 ? "0" + mm : dd;
  return `${yyyy}-${mm}-${dd}`;
};

const tomorrow = date => {
  let today = new Date(date);
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  return formatDateEnglish(tomorrow);
};

const arrayOfDates = (beginDate, endDate) => {
  const arrayOfDates = [];
  let currentDate = beginDate;
  while (new Date(currentDate) <= new Date(endDate)) {
    arrayOfDates.push(currentDate);
    currentDate = tomorrow(currentDate);
  }
  return arrayOfDates;
};

export default {
  hyphensToSlashes,
  formatDateJavaScript,
  formatDateEnglish
};
