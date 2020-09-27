import React from 'react'

// Package imports
import { Link } from 'react-router-dom'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

// Styled imports
import { Container, Flex } from '../../styles/globalStyles'
import { HomeFeatureSection, FeaturedContent, FeaturedImage } from '../../styles/pages/homeStyles'
import { ImageLight } from './ImageLight'
import { ConceptAbout } from './ConceptAbout'
import { ConceptDetail } from './ConceptDetail'
export const ConceptContent = ({ toggleCount, handleSwitch }) => {
  const animation = useAnimation()

  const [hovered, setHovered] = React.useState(false)
  const [featuredRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-300px'
  })

  React.useEffect(() => {
    if (inView) {
      animation.start('visible')
    }
  }, [animation, inView])
  return (
    <>
      <HomeFeatureSection
        ref={featuredRef}
        animate={animation}
        initial='hidden'
        style={{
          marginTop: '8em'
        }}
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
          <Link>
            <FeaturedContent
              onHoverStart={() => setHovered(!hovered)}
              onHoverEnd={() => setHovered(!hovered)}
            >
              <Flex spaceBetween>
                <h3>Hyde Lamp is off</h3>
                <motion.div
                  animate={{
                  // y: hovered ? 0 : -48,
                    opacity: hovered ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                  class='meta'
                >
                  <h4>VC</h4>
                  <h4>2020</h4>
                </motion.div>
              </Flex>
              <h2 class='featured-title'>
              DARK
                <span class='arrow'>
                  <motion.svg
                    animate={{ x: hovered ? 48 : 0 }}
                    transition={{ duration: 0.3, ease: [0.6, 0.05, -0.01, 0.9] }}
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 101 57'
                  >
                    <path
                      d='M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z'
                      fill='#FFF'
                      fillRule='evenodd'
                    />
                  </motion.svg>
                </span>
              </h2>
            </FeaturedContent>
            <FeaturedImage />
          </Link>
        </Container>
      </HomeFeatureSection>
      <ImageLight />
      <ConceptAbout />
      <ConceptDetail handleSwitch={handleSwitch} toggleCount={toggleCount} />
    </>
  )
}
