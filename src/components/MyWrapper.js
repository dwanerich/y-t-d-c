import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { motion } from 'framer-motion';

const MyWrapper = ({ imageData }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {imageData.map((image, i) => (
          <motion.img
            key={i}
            src={image}
            style={{ width: '100%', display: 'block' }}
            alt=""
          />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MyWrapper;
