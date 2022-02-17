import React from "react"

export const Alert = ({alert}) => {

  return (
    <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible`} 
    role="alert"
    >
      {alert.text}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>  
  )
}