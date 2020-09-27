import React from 'react'

// Hooks
// import useWindowSize from './hooks/useWindowSize'

// Context Imports
import { useGlobalStateContext, useGlobalDispatchContext } from './context/globalContext'

// Package Import
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Styled Components
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { normalize } from 'styled-normalize'
// import { AppWrapper, ScrollWrapper } from './styles/globalStyles'

// Component Imports
import { Header } from './components/shared/Header'
import { CustomCursor } from './components/shared/CustomCursor'
import { HomeBanner } from './components/home/HomeBanner'
import { Navigation } from './components/navigation/Navigation'
import { HomeContent } from './components/home/HomeContent'
import { HomeFeature } from './components/home/HomeFeature'
import { HomeAbout } from './components/home/HomeAbout'
import { ProjectBanner } from './components/project/ProjectBanner'
import { ConceptContent } from './components/concept/ConceptContent'
import { PlanningImages } from './components/planning/PlanningImages'

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  cursor: none;
}
html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`
// eslint-disable-next-line
const darkTheme = {
  background: '#000',
  text: '#fff',
  red: '#ea291e'
}

const lightTheme = {
  background: '#fff',
  text: '#000',
  red: '#ea291e'
}

export const App = () => {
  const [toggleCount, setToggleCount] = React.useState(0)
  const handleSwitch = () => {
    setToggleCount(toggleCount + 1)
    if (toggleCount < 2) {
      alert(`You've found ${toggleCount + 1} out of 3 switches`)
    } else {
      toggleTheme()
      alert('Well done! You found all 3 switches. Let the meeting begin.')
    }
  }



  // Hooks
  // const size = useWindowSize()

  // Menu State
  const [toggleMenu, setToggleMenu] = React.useState(false)
  const toggleTheme = () => {
    if (currentTheme === 'dark') {
      dispatch({ type: 'TOGGLE_THEME', theme: 'light' })
    } else {
      dispatch({ type: 'TOGGLE_THEME', theme: 'dark' })
    }
  }

  // Context Setup
  const dispatch = useGlobalDispatchContext()
  const { currentTheme, cursorStyles } = useGlobalStateContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: 'CURSOR_TYPE', cursorType: cursorType })
  }

  // Smooth Scroll Refs
  // const app = React.useRef()
  // const scrollContainer = React.useRef()
  // const skewConfig = {
  //   ease: 0.1,
  //   current: 0,
  //   previous: 0,
  //   rounded: 0
  // }

  // React.useEffect(() => {
  //   document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
  // }, [size.height])

  // React.useEffect(() => {
  //   window.requestAnimationFrame(() => skewScrolling())
  //   // eslint-disable-next-line
  // }, [])

  // const skewScrolling = () => {
  //   skewConfig.current = window.scrollY
  //   skewConfig.previous += (skewConfig.current - skewConfig.previous) * skewConfig.ease
  //   skewConfig.rounded = Math.round(skewConfig.previous * 100) / 100

  //   // variables
  //   const difference = skewConfig.current - skewConfig.rounded
  //   const acceleration = difference / size.width
  //   const velocity = +acceleration
  //   const skew = velocity * 7.5

  //   // Assigning skew to the DOM
  //   scrollContainer.current.style.transform = `translate3d(0, -${skewConfig.rounded}px, 0) skewY(${skew}deg)`

  //   window.requestAnimationFrame(() => skewScrolling())
  // }

  return (
    <ThemeProvider theme={currentTheme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyle />

      <Router>
        <CustomCursor toggleMenu={toggleMenu} />
        <Header
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
          onCursor={onCursor}
        />
        <Navigation
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
          onCursor={onCursor}
        />
        {/* <AppWrapper ref={app}>
          <ScrollWrapper ref={scrollContainer}> */}
        <Switch>
          <Route exact path='/'>
            <HomeBanner onCursor={onCursor} />
            <HomeContent />
            <HomeFeature onCursor={onCursor} />
            <HomeAbout handleSwitch={handleSwitch} toggleCount={toggleCount} onCursor={onCursor} />
          </Route>
          <Route exact path='/concept'>
            <ConceptContent handleSwitch={handleSwitch} toggleCount={toggleCount} onCursor={onCursor} />
          </Route>
          <Route exact path='/planning'>
            <PlanningImages handleSwitch={handleSwitch} toggleCount={toggleCount} onCursor={onCursor} />
          </Route>
          <Route
            path='/' render={() => (
              <div>404</div>
            )}
          />
        </Switch>
        {/* </ScrollWrapper>
        </AppWrapper> */}
      </Router>
    </ThemeProvider>

  )
}
