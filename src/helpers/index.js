import image2 from '../img/baddie_cover-art.png';
import image1 from '../img/about-services.gif';
import image3 from '../img/myhood.png';


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
    headline: 'VS THE KING',
    info: "BADDIE (COMING SOON)",
    image: image2,
    options: [],
  },
  {
    direction: 'basic',
    headline: 'VS THE KING',
    info: "THATS MY HOOD",
    image: image3,
    options: [],
  },
];
