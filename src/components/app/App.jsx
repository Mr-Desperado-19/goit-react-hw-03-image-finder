import React, { Component } from 'react';
import Searchbar from '../searchbar';
import ImageGallery from '../image-gallery';
import Button from '../button';
import Modal from '../modal';
import { fetchImages } from '../../services/api';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    images: [],
    selectedImage: null,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, page } = this.state
    
    if (
      prevState.page !== this.state.page ||
      prevState.searchQuery !== this.state.searchQuery
    ) {
      this.fetchImagesApp(searchQuery, page);
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  fetchImages = (searchQuery, page) => {
    this.setState({ isLoading: true });

    fetchImages(searchQuery, page)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images.hits],
          total: images.totalHits,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  btnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = image => {
    this.setState({ selectedImage: image });
  };

  closeModal = () => {
    this.setState({ selectedImage: null });
  };

  render() {
    const { images, selectedImage, isLoading, error } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.onChangeQuery} />

        {images.length > 0 && (
          <ImageGallery images={images} onSelect={this.openModal} />
        )}

        {isLoading && <Button label="Loading..." disabled />}
        {!isLoading && images.length > 0 && (
          <Button label="Load more" onClick={this.btnClick} />
        )}

        {selectedImage && (
          <Modal image={selectedImage} onClose={this.closeModal} />
        )}

        {error && <p>Whoops, something went wrong: {error.message}</p>}
      </div>
    );
  }
}

export default App;
