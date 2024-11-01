import React from 'react';
import {Link } from 'react-router-dom';
import { Navigation } from './Navigation';


export function Layout({ children }) {
  return (
    <div className="page-top">
      <header className="header">
        <a className="logo" href=".page-top">Sistema RFID</a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
        <Navigation />
      </header>

      <div id="main" className="main">
        {children} {/* Aquí se renderizará el contenido dinámico */}
      </div>

      <footer className="footer">
        <div className="container">
          <hr />
          <article className="foot-content-left">
            <ul>TecHunter</ul>
          </article>
          <article className="foot-content">
            <ul>
              <li><a href="pixelstrecher@gmail.com">TecHunter@gmail.com</a></li>
              <li className="social"><a href="https://www.facebook.com/">Facebook</a></li>
              <li className="social"><a href="https://twitter.com/">Twitter</a></li>
              <li className="social"><a href="https://www.linkedin.com/company/">LinkedIn</a></li>
            </ul>
          </article>
        </div>
      </footer>
    </div>
  );
}