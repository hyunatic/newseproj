import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router/Routes';
import Store from './Redux/Store/Store';
import { Provider } from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase, { config } from './Redux/Firebase/fbConfig'
import { createFirestoreInstance } from 'redux-firestore';


class App extends Component {
  state = {
    collapseID: ''
  };
  render() {
    const { collapseID } = this.state;
    return (
      <Provider store={Store}>
        <ReactReduxFirebaseProvider firebase={firebase} config={config} createFirestoreInstance={createFirestoreInstance} dispatch={Store.dispatch}>
          <Router>
            <div className='flyout'>
              {collapseID && overlay}
              <main style={{ marginTop: '4rem' }}>
                <Routes />
              </main>
            </div>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  }
}

export default App;
