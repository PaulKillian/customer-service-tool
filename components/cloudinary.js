import React from 'react'
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";

export const ImagePage = () => {

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dusou7u3t'
    }
  });

  const myImage = cld.image('v1668316407/cars/impala/58/exterior');

  // The URL of the image is: https://res.cloudinary.com/demo/image/upload/sample

  // Render the image in a React component.
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
};