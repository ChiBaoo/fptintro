import React from 'react'

function Notificationd(props) {
  return (props.trigger) ? (
    <div className='popup'>
      <div className='popup-inner'>
        <a className='close-btn ' onClick={() => props.setTrigger(false)}>close</a>
        {props.children}
      </div>
    </div>
  ) : "";
}

export default Notificationd