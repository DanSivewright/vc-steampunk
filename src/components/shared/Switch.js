import React from 'react'
import { Modal } from './Modal'

export const Switch = ({ toggleCount, handleSwitch }) => {
  const [toggle, setToggle] = React.useState(false)

  return (
    <>
      <div className='switch'><button className={toggle ? 'on' : ''} onClick={() => setToggle(!toggle) & handleSwitch()} /></div>
    </>
  )
}
