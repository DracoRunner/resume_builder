export const years = (back: number) => {
  const year = new Date().getFullYear();
  return Array.from({ length: back }, (v, i) => year - back + i + 1);
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const selectionAry = (arr: any[]) => {
  return arr.map((item) => ({ text: item, value: item }));
};
