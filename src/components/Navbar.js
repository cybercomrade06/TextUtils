import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link
             className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
         
        </ul>
        <div className={`form-check form-switch text-${props.mode === 'dark'? 'light': 'dark'} mx-5`}>
  <input className="form-check-input" type="checkbox" role="switch" onClick={()=>{props.toggleMode(null)}} id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Toggle Mode</label>
</div>

    <div className="d-flex">
      <div className="bg-primary rounded mx-2" onClick={()=>{props.toggleMode('primary')}} style={{height:"30px",width:'30px',cursor:'pointer'}}></div>
      <div className="bg-danger rounded mx-2" onClick={()=>{props.toggleMode('danger')}} style={{height:"30px",width:'30px',cursor:'pointer'}}></div>
      <div className="bg-success rounded mx-2" onClick={()=>{props.toggleMode('success')}} style={{height:"30px",width:'30px',cursor:'pointer'}}></div>
      <div className="bg-warning rounded mx-2" onClick={()=>{props.toggleMode('warning')}} style={{height:"30px",width:'30px',cursor:'pointer'}}></div>
    </div>

      </div>
    </div>
 </nav>
 </div>
  )
}
Navbar.propTypes = {title: PropTypes.string,
                    aboutText: PropTypes.string   
}
Navbar.defaultProps ={
    title:'set title here',
    aboutText:'about text here'
    
}