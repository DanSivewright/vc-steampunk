import React from 'react'

// Styled Imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeAboutSection, About } from '../../styles/pages/homeStyles'

// Package Imports
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'
import { Switch } from '../shared/Switch'
export const PlanningContent = ({ toggleCount, handleSwitch }) => {
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
              How the image was made.
            </h2>
            <p>
            To further the concept, I created a photo-manipulation in Adobe Photoshop. The three images above were used to create a scene and the Steampunk HYDE LAMP artefact. The was show the context in which the lamp would be used and to also visually aid the project. As previously stated, the Brass Goggles bar is located in space. This is where the most hardened criminals meet to discuss their confidential matters. 
            </p>
          </About>
          <Switch handleSwitch={handleSwitch} toggleCount={toggleCount} />
        </Flex>
      </Container>
    </HomeAboutSection>
  )
}
