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

export const beerInfoEntries = [
  {
    title: 'NAME',
    field: 'name',
    cellStyle: {
      // whiteSpace: 'nowrap',
      minWidth: '18rem',
    },
    table: true,
    modal: true,
  },
  {
    title: 'TAGLINE',
    field: 'tagline',
    cellStyle: {
      // whiteSpace: 'nowrap',
      minWidth: '18rem',
    },
    table: true,
    modal: true,
  },
  {
    title: 'TAGLINE',
    field: 'description',
    table: false,
    modal: true,
  },
  {
    title: 'ABV',
    field: 'abv',
    table: true,
    modal: true,
  },
  {
    title: 'IBU',
    field: 'ibu',
    table: true,
    modal: true,
  },
  {
    title: 'SRM',
    field: 'srm',
    table: true,
    modal: true,
  },
  {
    title: 'EBC',
    field: 'ebc',
    table: true,
    modal: true,
  },
  {
    title: 'PH',
    field: 'ph',
    table: true,
    modal: true,
  },
  {
    title: 'ATTENUATION',
    field: 'attenuation_level',
    table: false,
    modal: true,
  },
  {
    title: 'TARGET FG',
    field: 'target_fg',
    table: false,
    modal: true,
  },
  {
    title: 'TARGET OG',
    field: 'target_og',
    table: false,
    modal: true,
  },
  {
    title: 'FIRST BREWED',
    field: 'first_brewed',
    table: false,
    modal: true,
  },
  {
    title: 'VOLUME',
    field: 'volume',
    table: false,
    modal: true,
  },
];
