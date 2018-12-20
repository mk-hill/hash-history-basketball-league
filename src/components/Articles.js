import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getTeamsArticles } from '../api';

class Articles extends Component {
  state = {
    loading: true,
    teamsArticles: [],
  };

  componentDidMount() {
    getTeamsArticles(this.props.match.params.teamId).then(teamsArticles =>
      this.setState({
        loading: false,
        teamsArticles: teamsArticles.map(article => article.title),
      })
    );
  }

  render() {
    const { loading, teamsArticles } = this.state;
    const { params, url } = this.props.match;
    const { teamId } = params;

    return loading ? (
      <h1>Loading</h1>
    ) : (
      <div className="container two-column">
        <Sidebar
          loading={loading}
          title="Articles"
          list={teamsArticles}
          {...this.props}
        />
      </div>
    );
  }
}

export default Articles;
