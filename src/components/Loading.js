import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Loading extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
  };

  static defaultProps = {
    text: 'Loading',
    speed: 250,
  };

  state = {
    text: this.props.text,
  };

  componentDidMount() {
    const { text, speed } = this.props;
    const stopper = text + '...';
    this.interval = setInterval(() => {
      this.state.text === stopper
        ? this.setState({ text })
        : this.setState(({ text }) => ({ text: text + '.' }));
    }, speed);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return (
      <div className="container">
        <p className="text-center">{this.state.text}</p>
      </div>
    );
  }
}

export default Loading;
