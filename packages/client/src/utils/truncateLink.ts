export const truncateLink = (url: string, length = 60) => {
  return url.length > length ?
         url.substring(0, length) + "..." :
         url;
}
