import React from 'react'

export const Modal = ({ modalState, setModalState, toggleCount, setToggleCount, handleModal }) => {
  return (
    <div className={`modalBackground modalShowing--${modalState}`}>
      <div className='modalInner'>x</div>
    </div>
  )
}
