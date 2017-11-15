/**
 * @name FirstRow
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';

export class FirstRow extends Component {
    render() {
        return (
            <nav className="divTop">
                 <div className="nav-wrapper"  >
                     <a href="#!" className="brand-logo center">
                     <i className="fa fa-twitter" aria-hidden="true"></i>
                     </a>
                     <ul className="left hide-on-med-and-center">
                        <li><a className="list-group-item" href="#"><i className="fa fa-home fa-1x" aria-hidden="true"></i> Home</a></li>
                        <li><a className="list-group-item" href="#"><i className="fa fa-bolt fa-1x" aria-hidden="true"></i> Moments</a></li>
                        <li><a className="list-group-item" href="#"><i className="fa fa-bell fa-1x" aria-hidden="true"></i> Notifications</a></li>
                        <li><a className="list-group-item" href="#"><i className="fa fa-envelope fa-1x" aria-hidden="true"></i> Messages</a></li>
                     </ul>
                     <ul className="right hide-on-med-and-center">
                         <li><input className="inputSearchTwitter" type="text" placeholder="  Search in Twitter"/></li>
                         <li><img className="imgFirstRow" src="https://pbs.twimg.com/profile_images/922894641766256641/tOnNhK4t_400x400.jpg"/></li>
                         <li><button className="buttonTwittear">Twittear</button></li>
                     <br/>
                    </ul> 
                 </div>
          </nav>  
        )
    }
}