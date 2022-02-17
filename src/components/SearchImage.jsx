import { Component } from 'react';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoaderComponent from './LoaderComponent';
import Button from './Button';
import Modal from './Modal';

import { apiService } from './services/apiService';

import styles from './searchImage.module.css';

class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    search: '',
    page: 1,
    modalOpen: false,
    modalContent: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { search, page } = this.state;
    if (search !== prevState.search || page !== prevState.page) {
      this.setState({
        loading: true,
      });
      this.apiService();
    }
  }

  async apiService() {
    const { search, page } = this.state;
    try {
      const data = await apiService(page, search);
      this.setState(prevState => {
        return {
          images: [...prevState.images, ...data],
          loading: false,
          error: null,
        };
      });
    } catch (error) {
      this.setState({
        error: error.message,
        loading: false,
      });
    }
  }

  changeSearch = ({ search }) => {
    this.setState({ search, images: [] });
  };

  onLoadMore = () => {
    this.setState(({ page }) => {
      return {
        page: page + 1,
      };
    });
  };

  showModal = image => {
    this.setState({
      modalOpen: true,
      modalContent: image,
    });
  };

  hideModal = () => {
    this.setState({
      modalOpen: false,
      modalContent: null,
    });
  };

  findPic = () => {
    const largeImg = this.state.images.find(image => {
      return image.id === this.state.largeImageId;
    });
    return largeImg;
  };

  render() {
    const { changeSearch, onLoadMore, showModal, hideModal } = this;
    const { loading, error, images, search, modalOpen, modalContent } =
      this.state;

    return (
      <div className={styles.container}>
        <div className={styles.searchContainer}>
          <Searchbar onSubmit={changeSearch} />
        </div>
        <ImageGallery onOpenModal={showModal} images={images} />
        {loading && <LoaderComponent />}
        {error && <p>Ошибка поиска</p>}
        {!images.length && search && !loading && !error && (
          <p>Ничего не найдено</p>
        )}
        {!loading && images.length >= 12 && !error && (
          <Button onLoadMore={onLoadMore} />
        )}
        {modalOpen && (
          <Modal handleClose={hideModal}>
            <div className={styles.imageBox}>
              <img src={modalContent.largeImageURL} alt={modalContent.tags} />
            </div>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
