import React from 'react'

function popup(props) {
  return (props.trigger) ? (
    <div className='overlay'>
       <div className='modal-content'>
          { props.children }
          <button className='button-66' onClick={() => props.setTrigger(false)}>Close</button>
       </div>
    </div>
  ) : "";
}

export default popup;