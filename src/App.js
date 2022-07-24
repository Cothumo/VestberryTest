import React from 'react'
import {ApolloProvider} from '@apollo/client'
import Page from './Page'
import client from './apollo'
import styles from 'App.scss'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Create from 'Create'
import ThemeSelector from 'components/ThemeSelector'

const App = () =>
  <div className={styles.main}>
    <div className={styles.header}>
      VESTBERRY TEST ASSIGNMENT
      <ThemeSelector/>
    </div>
    <div className={styles.content}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">   
              <Page /> 
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </ApolloProvider>
    </BrowserRouter>
    </div>
  </div>

export default App
