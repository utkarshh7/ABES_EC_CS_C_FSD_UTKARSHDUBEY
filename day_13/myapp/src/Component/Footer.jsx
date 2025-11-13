import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <small>© {new Date().getFullYear()} MyShop. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer