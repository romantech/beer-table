export default (selectedRange, data, abvRange) => {
  if (selectedRange.length === 0) {
    return data;
  }
  return selectedRange.reduce((acc, cur) => {
    const {
      range: [fromRange, toRange],
    } = abvRange[cur];
    return acc.concat(
      data?.filter(({ abv }) => !!(fromRange <= abv && toRange >= abv)),
    );
  }, []);
};
