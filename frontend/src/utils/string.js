export const removeHtml = (str) => {
  const cleanStr = str.replace(/(<([^>]+)>)/ig, '')
  return `${cleanStr.length > 160 ? `${cleanStr.substring(0, 160)}...` : cleanStr}`;
}