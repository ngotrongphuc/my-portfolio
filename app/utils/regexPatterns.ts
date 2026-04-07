/** Matches an absolute http(s)/ftp URL. */
export const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;

/** Matches a basic email address (something@something.tld). */
export const emailPattern = /^\S+@\S+\.\S+$/;

/** Matches a phone number of 9 to 11 digits (no separators). */
export const phoneNumberPattern = /^\d{9,11}$/;

/**
 * Convert a `RegExp` to its pattern string without the surrounding slashes.
 * Use this when passing a regex source to HTML attributes like `pattern`.
 */
export const regexToString = (regex: RegExp): string =>
  regex.toString().slice(1, -1);
