import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-center" >
        <div className="intro" style={{width:'390px'}}>
            <Navbar.Brand style={{color:'white'}} className='fw-bolder'>
              <i className='fa-solid fa-music me-2'></i>
            Media Player
            </Navbar.Brand>
            <p>Designed and built with all the love in the world by the luminar team with the help of our contributors.</p>
            <p>Code licensed Luminar, docs CC BY 3.0.</p>
            <p>Currently v5.3.2.</p>
        </div>
        <div className="links ms-3 fw-bolder" style={{color:'white'}}>Links
          <div>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Landing Page</Link>
          </div>
          <div>
            <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>Home Page</Link>
          </div>
          <div>
            <Link to={'/history'} style={{textDecoration:'none', color:'white'}}>Watch History Page</Link>
          </div>
        </div>
        <div className="guides ms-3 fw-bolder" style={{color:'white'}}>Guides
          <p>React</p>
          <p>React Bootstrap</p>
          <p>React Router</p>
        </div>
        <div className="contact ms-3 fw-bolder" style={{color:'white'}}>Contact Us</div>
      </div>
      <p className='text-center mt-3'>Copyright © Jan 2024 Batch, Media Player. Built with React.</p>
    </div>
  )
}

export default Footer