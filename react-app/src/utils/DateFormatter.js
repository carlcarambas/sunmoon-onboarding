
const pad = (n) => {
	return n < 10 ? '0' + n : n
}

export const current_date = () => {
    var date = new Date();
    var formatted_date =
      date.getFullYear() +
      "-" +
      pad(date.getMonth() + 1) +
      "-" +
      pad(date.getDate()) +
      " " +
      pad(date.getHours()) +
      ":" +
      pad(date.getMinutes()) +
      ":" +
      pad(date.getSeconds());
    return formatted_date;
}

