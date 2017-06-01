import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class CloseOnEsc extends Component {
  constructor() {
    super();
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onEscape({ keyCode }) {
    if (keyCode === 27) {
      this.props.onCloseModal();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onCloseModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onCloseModal);
  }

  render() {
    return Children.only(this.props.children);
  }
}
CloseOnEsc.propTypes = {
  onCloseModal: PropTypes.func.isRequired
};