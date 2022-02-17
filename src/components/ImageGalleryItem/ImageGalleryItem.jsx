import PropTypes from 'prop-types';
import styles from './imageGalleryItem.module.css';

function ImageGalleryItem({ onClick, id, image, largeImageURL, tags }) {
  return (
    <li className={styles.item}>
      <img
        key={id}
        src={image}
        alt={tags}
        data-source={largeImageURL}
        className={styles.image}
        onClick={onClick}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  webformatURL: PropTypes.string,
};

export default ImageGalleryItem;
