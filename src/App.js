import React, {Suspense} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


// import  Home  from './pages/home'
import { Category } from './pages/Category'
import { SearchResults } from './pages/SearchResults'
import { Error } from './pages/error'

import { Header } from './components/Header'
import { ImageDetail } from './components/DetailImage'
import { PictureCategory } from './components/pictureCategory'
import { Searcher } from './components/searcher'

import { useDarkMode } from './hooks/useDarkMode'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'
import { lightTheme, darkTheme } from './components/styles/Themes' 

import { DetailContextProvider } from './context/DetailContextProvider'

const HomePage = React.lazy(() => import('./pages/home'))

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <Router>
      <ThemeProvider theme = {themeMode}>
      <GlobalStyle />
      <Header theme = {theme} toggleTheme = {themeToggler}  />
      <Searcher />
      <PictureCategory />
      <Suspense fallback={<h1>LOADIIIIING....</h1>}>
      <DetailContextProvider> 
        <ImageDetail />
        <Switch>
          <Route exact path="/category/:category" component={Category}/>
          <Route exact path= "/search/:keyword" component={SearchResults} />
          <Route  path="/" component={HomePage} />
          <Route exact path="/error" component={Error} />
        </Switch>
      </DetailContextProvider>

      </Suspense>

      </ThemeProvider>
    </Router>

  )
}

export default App;
