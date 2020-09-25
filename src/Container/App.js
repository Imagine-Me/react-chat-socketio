import React from 'react';
import Home from './Home'
import Chat from './Chat'
import { Switch, Route } from 'react-router'






function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/chat" exact component={Chat} />
      </Switch>
    </div>
  );
}

export default App;
