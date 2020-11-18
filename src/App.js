import React from 'react';

import { Header } from './components/Header'
import { Searcher } from './components/searcher'
import { PictureOptions } from './components/pictureOptions'
import { Home } from './components/home'

// import { ImageDetail } from './components/DetailImage'

import { useDarkMode } from './hooks/useDarkMode'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyles'
import { lightTheme, darkTheme } from './components/styles/Themes' 

function App() {
  const [theme, themeToggler] = useDarkMode()
  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <>
      <ThemeProvider theme = {themeMode}>
      <GlobalStyle />
      <Header theme = {theme} toggleTheme = {themeToggler}  />
      <Searcher />
      <PictureOptions/> 
      <Home/>
      {/* <ImageDetail /> */}
      </ThemeProvider>
    </>
  )
}

export default App;
