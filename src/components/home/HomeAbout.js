import React from 'react'

// Styled Imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About } from '../../styles/pages/homeStyles'

// Package Imports
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Switch } from '../shared/Switch'

export const HomeAbout = ({ onCursor, toggleCount, handleSwitch }) => {
  // Animation State
  const animation = useAnimation()
  const [aboutRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])

  return (
    <HomeAboutSection
      ref={aboutRef}
      animate={animation}
      initial='hidden'
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
        },
        hidden: { opacity: 0, y: 72 }
      }}
    >
      <Container>
        <Flex alignTop>
          <About>
            <h2>
              What is the HYDE LAMP?
            </h2>
            <p>
            In the world, we live in today nothing is confidential. We are monitored, spied on, tracked, and our information is sold. Thus, we are forced to use traditional mediums. This is why I invented the HYDE LAMP, well, a digital version at least. Be sure to open the menu, at the top left of the page, to read more about the concept, ideas, and how it was made. 
            </p>
          </About>
          <Switch handleSwitch={handleSwitch} toggleCount={toggleCount} />
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}
