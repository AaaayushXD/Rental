export function formatDate(date: Date): string {
  const day = date.getDate();
  const daySuffix = getDaySuffix(day);
  const month = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  const formattedHours = hours % 12 || 12;

  return `${day}${daySuffix} ${month}, ${year}, ${formattedHours}:${minutes} ${ampm}`;
}

function getDaySuffix(day: number): string {
  if (day >= 11 && day <= 13) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
