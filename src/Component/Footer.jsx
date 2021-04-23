import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h6>{year} @ Project by Subir</h6>
    </div>
  )
}

export default Footer
