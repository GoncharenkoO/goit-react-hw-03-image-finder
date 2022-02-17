import styles from './button.module.css';

function Button({ onLoadMore }) {
  return (
    <button type="button" className={styles.button} onClick={onLoadMore}>
      Load more
    </button>
  );
}

export default Button;
