const formatDate = (date: string) => {
  if (date === undefined) {
    return;
  }
  const DateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const USdate = new Intl.DateTimeFormat("en-US", DateOptions);

  const datePost = new Date(date);

  return USdate.format(datePost);
};

export default formatDate;
