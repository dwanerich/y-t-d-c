import image1 from '../img/barclays-logo.jpg'
import image2 from '../img/spectrum-logo.png'
import image3 from '../img/pix-logo.png'


export const deriveImageArrayFromCategory = (categoryAssets) => {
  const imageArray = [];

  for (let image in categoryAssets) {
    imageArray.push(categoryAssets[image]);
  }

  return imageArray;
};

export const serviceData = [
  {
    direction: 'basic',
    headline: 'services',
    info: "",
    image: image1,
    options: [
      {
        optionName: 'Management',
        url: 'management',
      },
      {
        optionName: 'Marketing',
        url: 'marketing',
      },
      {
        optionName: 'Songwriting',
        url: 'songwriting',
      },
    ],
  },
  {
    direction: 'reverse',
    headline: 'SPECTRUM ARENA',
    info: "BADDIE (COMING SOON)",
    image: image2,
    options: [],
  },
  {
    direction: 'basic',
    headline: 'PIX-11 NEWS',
    info: "THATS MY HOOD",
    image: image3,
    options: [],
  },
];
