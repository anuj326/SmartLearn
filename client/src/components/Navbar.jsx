import React from 'react'
require('./navbar.css')

function Navbar() {
  return (
    <div className='fs-2'>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand fs-2" href="http://localhost:3000/">SmartLearn</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <i className="fa-solid fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/subject">Subjects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Project</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href="https://testmoz.com/q/12877228">Quiz</a>
        </li>
       
        
        
      </ul>
      <div className="" role="search">
        {/* <input className="form-control " type="search" placeholder="Search" aria-label="Search"/> */}
        <button className="btn btn-outline-success sign" type="submit" ><a href="/login">Sign In</a></button>
        <button className="btn btn-outline-success sign" type="submit"> <a href="/register">Sign Up</a> </button>
      </div>
    </div>
  </div>
  
</nav>
<div className="contianer bottomnav">
        <div className='contianer'>
        <a className="btn btn-light btn-sm mx-2 mb-3" href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-bars"></i>
        </a>

        
        <a className="btn btn-light btn-sm float-end mx-2 mb-3" href='#' data-bs-toggle="modal" data-bs-target="#exampleModal1"><i className="fa-solid fa-screwdriver-wrench"></i></a>
        </div>
       
    </div>

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-left">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Table of Content</h5>
          
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body d-grid gap-2">
          
          <button className="btn btn-success bt"><a  href="/physics/scientificmethod">1.1 Scientific Method</a > </button><br />
          <button className="btn btn-success bt"><a href="/physics/scientificmeasurement">1.2 Scientific Measurement</a></button>  <br />
          <button className="btn btn-success bt"><a href="/physics/mathtoolsforphysics">1.3 Math Tools for Physics</a></button> <br />
          <button className="btn btn-success bt"><a href="/physics/resolvingvectors">1.4 Resolving Vectors into Components</a></button> <br />
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>

        </div>
      </div>
    </div>
  </div>
  {/* second modal setting button */}
  <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
        <div className="modal-dialog modal-dialog-left">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">Coming Soon</h5>
              
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-grid gap-2">
            
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar