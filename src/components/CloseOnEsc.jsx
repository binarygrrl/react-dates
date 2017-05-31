import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';

export default class CloseOnEsc extends Component {
  constructor() {
    super();
    this.onEscape = this.onEscape.bind(this);
  }

  onEscape({ keyCode }) {
    if (keyCode === 27) {
      this.props.onEscape();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  render() {
    return Children.only(this.props.children);
  }
}

CloseOnEsc.propTypes = {
  onEscape: PropTypes.func.isRequired
};