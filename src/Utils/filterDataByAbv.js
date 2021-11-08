import abvRange from './abvRange';

export default (selectedRange, data) => {
  const { range } = abvRange[selectedRange];
  const filteredData = data?.filter(({ abv }) => {
    if (range[0] <= abv && range[1] >= abv) return true;
    return false;
  });
  return filteredData;
};
