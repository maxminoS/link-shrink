export const shrinkLink = (length = 6) => {
  let shrunk = "";
  const charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  for (let i = 0; i < length; i += 1) {
    shrunk += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return shrunk;
};
