import React from 'react';
import photos from '../../../displayphoto';
import Image from 'next/image';
import Modal from '../../../../components/modal'

const SinglePhoto = ({ params: { id } }) => {
  const photoId = parseInt(id); 
  const photo = photos.find(a => a.id === photoId);
  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <>main
   <Modal>
     <div style={{textAlign:'center'}}>
      <Image src={photo.img} alt={`Photo ${photoId}`} width={500} height={500}/>
    </div>
   </Modal>
    </>
  );
};

export default SinglePhoto;
