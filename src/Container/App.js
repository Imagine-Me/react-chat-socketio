import React, { useState } from 'react';
import Home from './Home'
import Chat from './Chat'
import { Switch, Route } from 'react-router'






function App() {
  const [socket, setSocket] = useState(null)

  const changeSocket = (value) => {
    setSocket(value)
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={() => <Home socket={socket} setsocket= {changeSocket}  />} />
        <Route path="/chat" exact render={() => <Chat socket={socket} />} />
      </Switch>
    </div>
  );
}

export default App;
