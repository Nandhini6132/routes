import React from 'react';
import photos from '../displayphoto';
import Image from 'next/image';

const SinglePhoto = ({ params: { id } }) => {
  const photoId = parseInt(id); // Convert id to a number
  const photo = photos.find(a => a.id === photoId);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div style={{textAlign:'center'}}>
      <Image src={photo.img} alt={`Photo ${photoId}`} width={500} height={500}/>
    </div>
  );
};

export default SinglePhoto;
