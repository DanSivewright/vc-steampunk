import React from 'react'

// Styled Imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About } from '../../styles/pages/homeStyles'

// Package Imports
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Switch } from '../shared/Switch'

export const ConceptDetail = ({ handleSwitch, toggleCount }) => {
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
              HYDE LAMP Concept
            </h2>
            <p>
            Much like the home page alluded too. The HYDE LAMP is a Steampunk solution to the problem we all face. Our right to privacy online. Everything online is tracked; messages, photos, videos, locations, basically nothing goes unnoticed. This is why the HYDE LAMP is so useful. Here's how it works. The HYDE LAMP is powered by at least 2 switches when activated the lamp is turned on, indicating to the parties involved in the conversation that this is confidential, there is no tech involved, there is no internet and there no one listening. When one party releases a switch, or the lamp turns off the confidential conversation is now over. In a nutshell, the HYDE LAMP is a symbol of privacy and a rebellion against the invasion of privacy. For the sake of the revised brief, the HYDE LAMP is now virtual. When all three switches located accross the site are activated the site changes to light mode and the HYDE LAMP in the bar image turns on. In an ideal world, where COVID-19 never took place I would've built a physical version of the HYDE LAMP.
            </p>
          </About>
          <Switch handleSwitch={handleSwitch} toggleCount={toggleCount} />
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}
