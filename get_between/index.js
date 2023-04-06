const getBetween = (str, start, end) => {
const startIndex = str.indexOf(start)
const endIndex = str.indexOf(end, startIndex + 1)
return str.substring(startIndex + 1, endIndex).trim()
}
