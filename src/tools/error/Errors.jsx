import React from 'react'
import './Error.css'

const Errors = ({error}) => {
  return (
    <div>
      <div className="error-container">
        <h2>Oops, something went wrong : {error} </h2>
      </div>
    </div>
  )
}

export default Errors
