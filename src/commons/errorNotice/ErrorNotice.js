import React from 'react'

function ErrorNotice(props) {
  return (
    <div className="contentNotice">
      <div className="error-notice">
        <span>{props.message}</span>
        <button onClick={props.clearError}>X</button>
      </div>
    </div>
  )
}

export default ErrorNotice
