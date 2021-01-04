import React from 'react';

const Header = () => {
    return (
        <header>
          <div className="logo-wrap">
              <div className="logo">
                  <img src="https://codervent.com/rocker-angular/assets/images/logo-icon.png" alt="" />
                  <h5>RockerAdmin</h5>
              </div>
          </div>
          <div className="main-header-wrap">
              <div className="pillers main-header-first">
                  <i className="fas fa-bars"></i>
                  <input type="text" className="" placeholder="Search" name="" />
              </div>
              <div className="pillers">
                  <i className="fas fa-envelope-open-text"></i>
                  <i className="fas fa-bell"></i>
                  <img src="https://i.pravatar.cc/200" alt="" />
              </div>
          </div>
      </header>
    );
}

export default Header;

//  Creating Component as functional;