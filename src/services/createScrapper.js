module.exports = ({ getData, parseData }) => async (url) => {
  const data = await getData(url);

  return parseData(data, url)
}
