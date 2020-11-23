import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Header } from './components/Header'
import  Home  from './components/home'
import {Category} from './pages/Category'
import { ImageDetail } from './components/DetailImage'
import { PictureCategory } from './components/pictureCategory'
import { Searcher } from './components/searcher'

import { useDarkMode } from './hooks/useDarkMode'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'
import { lightTheme, darkTheme } from './components/styles/Themes' 

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme
  const [search, setSearch] = useState('')
  return (
    <Router>
      <ThemeProvider theme = {themeMode}>
      <GlobalStyle />
      <Header theme = {theme} toggleTheme = {themeToggler}  />
      <Searcher setSearch={setSearch}/>
      <PictureCategory />
      <Switch>
        <Route exact path="/Category/:category" component={Category}/>
        <Route exact path ="/Detail/:id"> <ImageDetail /> </Route>
        <Route exact path="/" component={Home} />
      </Switch>
      </ThemeProvider>
    </Router>

  )
}

export default App;
