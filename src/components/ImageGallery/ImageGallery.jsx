import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import styles from './imageGallery.module.css';

function ImageGallery({ images, onOpenModal }) {
  console.log(images);
  const element = images.map(image => (
    <ImageGalleryItem
      onClick={() => onOpenModal(image)}
      key={image.id}
      image={image.webformatURL}
    />
  ));
  return <ul className={styles.list}>{element}</ul>;
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onOpenModal: PropTypes.func.isRequired,
};
