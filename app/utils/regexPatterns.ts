export const urlPattern = new RegExp(/^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/);
export const emailPattern = new RegExp(/^\S+@\S+\.\S+$/);
export const phoneNumberPattern = new RegExp(/^\d{9,11}$/);

export const regexToString = (regex: RegExp) => {
  let str = regex.toString();
  str = str.slice(1);
  str = str.slice(0, -1);
  return str;
};
