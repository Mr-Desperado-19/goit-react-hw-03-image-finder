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
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.setState({ page: 1, images: [] });
      this.fetchImages();
    }

    if (prevState.page !== this.state.page) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({ searchQuery: query });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    const options = { query: searchQuery, page };

    this.setState({ isLoading: true });

    fetchImages(options)
      .then(images => {
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
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
          <Button label="Load more" onClick={this.fetchImages} />
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
