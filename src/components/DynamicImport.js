import { Component } from 'react';

class DynamicImport extends Component {
  state = {
    component: null,
  };

  // willMount instead for ssr?
  componentDidMount() {
    this.props.load().then(mod => this.setState({ component: mod.default }));
  }

  render() {
    return this.props.children(this.state.component);
  }
}

export default DynamicImport;
