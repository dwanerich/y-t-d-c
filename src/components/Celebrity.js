import MyWrapper from './MyWrapper';
import { celebrityAssets } from '../img';
import { deriveImageArrayFromCategory } from '../helpers';

const Celebrity = () => {
  const images = deriveImageArrayFromCategory(celebrityAssets);
  return (
    <div>
      {/* <MyWrapper imageData={images} /> */}
    </div>
  );
};

export default Celebrity;
