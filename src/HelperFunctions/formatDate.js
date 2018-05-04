const hyphensToSlashes = date => {
  return date.replace("-", "/").replace("-", "/");
};

// const englishToJavaScriptDate = date => {
//   const [mm, dd, yyyy] = [
//     date.split("/")[0],
//     date.split("/")[1],
//     date.split("/")[2]
//   ];
//   return `${yyyy}-${mm}-${dd}T05:00:00.000Z`;
// };

export default {
  hyphensToSlashes
};
