import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Loading from './Loading';
import DynamicImport from './DynamicImport';

function createDynamicComponents(componentNames) {
  const createComponent = name => props => (
    <DynamicImport load={() => import(`./${name}`)}>
      {Component => (!Component ? <Loading /> : <Component {...props} />)}
    </DynamicImport>
  );
  // Create variables with same name here in module scope directly?
  return componentNames.map(name => createComponent(name));
}

const [Home, Players, Teams, TeamPage, Articles] = createDynamicComponents([
  'Home',
  'Players',
  'Teams',
  'TeamPage',
  'Articles',
]);

// const Home = props => (
//   <DynamicImport load={() => import('./Home')}>
//     {Component => (!Component ? <Loading /> : <Component {...props} />)}
//   </DynamicImport>
// );

// const Players = props => (
//   <DynamicImport load={() => import('./Players')}>
//     {Component => (!Component ? <Loading /> : <Component {...props} />)}
//   </DynamicImport>
// );

// const Teams = props => (
//   <DynamicImport load={() => import('./Teams')}>
//     {Component => (!Component ? <Loading /> : <Component {...props} />)}
//   </DynamicImport>
// );

// const TeamPage = props => (
//   <DynamicImport load={() => import('./TeamPage')}>
//     {Component => (!Component ? <Loading /> : <Component {...props} />)}
//   </DynamicImport>
// );

// const Articles = props => (
//   <DynamicImport load={() => import('./Articles')}>
//     {Component => (!Component ? <Loading /> : <Component {...props} />)}
//   </DynamicImport>
// );

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/players" component={Players} />
            <Route path="/teams" component={Teams} />
            <Route path="/:teamId" exact component={TeamPage} />
            <Route path="/:teamId/articles" component={Articles} />
            <Route
              render={() => <h1 className="text-center">Four oh Four.</h1>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
