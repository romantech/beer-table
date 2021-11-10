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
    name: 'FAVORITEs',
    path: '/favorite',
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
      whiteSpace: 'nowrap',
      minWidth: '18rem',
    },
    isTable: true,
  },
  {
    title: 'TAGLINE',
    field: 'tagline',
    cellStyle: {
      minWidth: '18rem',
    },
    isTable: true,
  },
  {
    title: 'DESCRIPTION',
    field: 'description',
    isTable: false,
  },
  {
    title: 'ABV',
    field: 'abv',
    isTable: true,
  },
  {
    title: 'IBU',
    field: 'ibu',
    isTable: true,
  },
  {
    title: 'SRM',
    field: 'srm',
    isTable: true,
  },
  {
    title: 'EBC',
    field: 'ebc',
    isTable: true,
  },
  {
    title: 'PH',
    field: 'ph',
    isTable: true,
  },
  {
    title: 'ATTENUATION',
    field: 'attenuation_level',
    isTable: false,
  },
  {
    title: 'TARGET FG',
    field: 'target_fg',
    isTable: false,
  },
  {
    title: 'TARGET OG',
    field: 'target_og',
    isTable: false,
  },
  {
    title: 'FIRST BREWED',
    field: 'first_brewed',
    isTable: false,
  },
  {
    title: 'CONTRIBUTED BY',
    field: 'contributed_by',
    isTable: false,
  },
];
