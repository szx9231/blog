import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav className="main-navigation">
        
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="navbar-header">
                <FontAwesomeIcon className="hamburger-btn" size='2x' icon={faBars} />
                <a className="slogan" href="/">多看多想多写多思考</a> 
              </div>
              <div className="navbar-collapse navbar" id="main-menu">
                <ul className="menu">
                  <li><a id="test" href="/">首页</a></li>
                  <li><a href="/">前端</a></li>
                  <li><a href="/">后端</a></li>
                  <li><a href="/">工具</a></li>
                  <li><a href="/">时间轴</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>    
    );
  }
}

export default Nav;