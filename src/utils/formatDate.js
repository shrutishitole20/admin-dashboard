export const formatDate = (date, format = 'MM/DD/YYYY') => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  switch (format) {
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'YYYY-MM-DD':
      return `${year}-${month}-${day}`;
    default:
      return d.toLocaleDateString();
  }
};

export const formatTime = (date, format24 = true) => {
  const d = new Date(date);
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');

  if (format24) {
    return `${hours}:${minutes}:${seconds}`;
  }

  const ampm = d.getHours() >= 12 ? 'PM' : 'AM';
  const hours12 = String(d.getHours() % 12 || 12).padStart(2, '0');
  return `${hours12}:${minutes} ${ampm}`;
};

export const formatDateTime = (date, dateFormat = 'MM/DD/YYYY', timeFormat24 = true) => {
  return `${formatDate(date, dateFormat)} ${formatTime(date, timeFormat24)}`;
};

export default formatDate;
