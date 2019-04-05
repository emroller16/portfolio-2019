const images = require.context('./images', true, /\.png$/);

const items = [
  {
    name: 'Amistad',
    src: images('./img/amistad.png'),
  },
  {
    name: 'Root Cellar',
    src: images('./img/amistad.png'),
  },
  {
    name: 'Another',
    src: images('./img/amistad.png'),
  },
];

export default items;
