import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './store'
import Header from './common/header'
import Login from './pages/login'
import Write from './pages/write'
import Detail from './pages/detail/loadable'
import Home from './pages/home'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/write" exact component={Write} />
              <Route path="/detail/:id" exact component={Detail} />
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
