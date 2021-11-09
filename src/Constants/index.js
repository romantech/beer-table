export const UNIT = {
  PERCENT: '%',
};

export const sitemap = [
  {
    name: 'HOME',
    path: '/home',
  },
  {
    name: 'BEERs',
    path: '/beerlist',
  },
  {
    name: 'CART',
    path: '/cart',
  },
];

export const abvRange = [
  {
    range: [3, 4],
    unit: UNIT.PERCENT,
  },
  {
    range: [4, 5],
    unit: UNIT.PERCENT,
  },
  {
    range: [5, 6],
    unit: UNIT.PERCENT,
  },
  {
    range: [6, 7],
    unit: UNIT.PERCENT,
  },
  {
    range: [7, 8],
    unit: UNIT.PERCENT,
  },
  {
    range: [8, 9],
    unit: UNIT.PERCENT,
  },
  {
    range: [10, 100],
    unit: `10${UNIT.PERCENT} 이상`,
  },
];

export const beerListColumns = [
  {
    title: 'NAME',
    field: 'name',
    cellStyle: {
      // whiteSpace: 'nowrap',
      minWidth: '18rem',
    },
  },
  {
    title: 'TAGLINE',
    field: 'tagline',
    cellStyle: {
      // whiteSpace: 'nowrap',
      minWidth: '18rem',
    },
  },
  {
    title: 'ABV',
    field: 'abv',
  },
  {
    title: 'IBU',
    field: 'ibu',
  },
  {
    title: 'SRM',
    field: 'srm',
  },
  {
    title: 'EBC',
    field: 'ebc',
  },
  {
    title: 'PH',
    field: 'ph',
  },
];
