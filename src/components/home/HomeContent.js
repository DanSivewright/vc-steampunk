import React from 'react'

// Styled Components
import { Container } from '../../styles/globalStyles'
import { HomeContentSection, Content } from '../../styles/pages/homeStyles'

// Package Import
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const HomeContent = () => {
  const animation = useAnimation()
  const [contentRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])
  return (
    <HomeContentSection
      ref={contentRef}
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
        <Content>
          Welcome to the Brass Goggles bar. An intergalactic Steampunk Bar! <br />
          We've called you for a highly confidential meeting, however, you need to prove you can be trusted. Across the site, you'll find 3 switches, turn them all on and the HYDE LAMO will turn on then we'll know you can be trusted.
          Scribble around on the area above to take a closer look into the Brass Goggles.
        </Content>
      </Container>
    </HomeContentSection>
  )
}
