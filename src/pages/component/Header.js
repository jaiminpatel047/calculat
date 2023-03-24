import React from 'react'

const Header = (props) => {
  return (
    <>
        <div className="container-fluid bg-clr mb-4 sticky-top shadow-sm">
              <div className="container p-3">
                    <h3 className="text-center">{props.title}</h3>
              </div>
        </div>
    </>
  )
}

export default Header;