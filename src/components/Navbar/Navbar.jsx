import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

export default function Navbar({userData , Logout }) {

const user = JSON.parse(localStorage.getItem('user'));


  return (
    <nav className={`navbar navbar-expand-lg bg-dark ${styles.navColor}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to={''}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     {userData?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item ">
          <Link className="nav-link active" aria-current="page" to={''}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'movies'}>Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'tvshowes'}>Tv Shows</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'people'}>People</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'about'}>About</Link>
        </li>
       
      </ul>:''}

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <div className={`${styles.socialIcons} d-flex align-items-center `}>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-spotify'></i>
            <i className='fab fa-youtube'></i>
            <i className='fab fa-twitter'></i>

        </div>
        {userData?   <li className="nav-item d-flex align-items-center">
          <span className=''>{user?`Hello ${user.name}`:''}</span>
          <Link className="nav-link" onClick={Logout}>Logout</Link>
        </li>
        :<>
         <li className="nav-item">
          <Link className="nav-link active"  to={'login'}>Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'register'}>Register</Link>
        </li>
        </>}
       
       
     
       
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeHolder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>
  )
}
