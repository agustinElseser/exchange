export const formatDateMMMD = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.toLocaleDateString("en-us", { month: "short" })} ${date.getDate()}`;
};
