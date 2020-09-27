import React from 'react'

// Styled Components
import { Container } from '../../styles/globalStyles'
import { HomeContentSection, Content } from '../../styles/pages/homeStyles'

// Package Import
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'

export const ConceptAbout = () => {
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
        As shown above, the HYDE LAMP is placed in the centre of a table and serves the basic function of a lamp. It turns on and off. However, the HYDE LAMP functions a little differently. 
        </Content>
      </Container>
    </HomeContentSection>
  )
}
