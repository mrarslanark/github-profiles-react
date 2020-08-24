const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Septemeber",
  "October",
  "November",
  "December",
];

export const formatDate = (dateValue) => {
  const date = new Date(dateValue);
  return (
    date.getDate() + " " + months[date.getMonth()] + ", " + date.getFullYear()
  );
};
