import './nav.css';
import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ModalImage from 'react-modal-image'
import MyWrapper from './MyWrapper';
import { deriveImageArrayFromCategory } from '../helpers';
import { editorialAssets } from '../img';

const Editorial = () => {
  const images = deriveImageArrayFromCategory(editorialAssets);
  return (
    <div>
      {/* <MyWrapper imageData={images} /> */}
    </div>
  );
};

export default Editorial;
