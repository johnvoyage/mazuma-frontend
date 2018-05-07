export const accountSubcategoryOptions = [
  { key: "1", text: "Liquid Asset", value: "liquid" },
  { key: "2", text: "Tangible Assets", value: "tang" },
  { key: "3", text: "Intangible Asset", value: "intang" },
  { key: "4", text: "Long-Term Assets", value: "lt asset" },
  { key: "5", text: "Short-Term Liability", value: "st liab" },
  { key: "6", text: "Long-Term Liability", value: "lt liab" },
  { key: "8", text: "Earnings", value: "earnings" },
  { key: "9", text: "Spending", value: "spending" }
];

export const subcategoryIdToName = subcategoryId => {
  switch (subcategoryId) {
    case 1:
      return "Liquid Assets";
    case 2:
      return "Tangible Assets";
    case 3:
      return "Intangible Assets";
    case 4:
      return "Long-Term Assets";
    case 5:
      return "Short-Term Liability";
    case 6:
      return "Long-Term Liability";
    case 8:
      return "Earning";
    case 9:
      return "Spending";
    default:
      return "Category not named";
  }
};

export const subcategoryNameToArrayOfIds = subcategory => {
  switch (subcategory) {
    case "net worth":
      return [1, 2, 3, 4, 5, 6];
    case "assets":
      return [1, 2, 3, 4];
    case "liabilities":
      return [5, 6];
    case "net income":
      return [8, 9];
    case "income":
      return [8];
    case "spending":
      return [9];
    default:
      return;
  }
};
