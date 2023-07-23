function formatDate(timestamp: number): string {
  const date = new Date(timestamp);

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export default formatDate;
