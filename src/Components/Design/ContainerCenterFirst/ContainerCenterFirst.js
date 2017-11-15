/**
 * @name ContainerCenterFirst
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';

export class ContainerCenterFirst extends Component {
    render() {
        return (
            <div className="divContainerCenterFisrt">
                <div className="divContainerCenterFisrtSize">
                    <img className="imgCircleCenterFirst" src="https://pbs.twimg.com/profile_images/922894641766256641/tOnNhK4t_400x400.jpg"/>
                    <input className="inputContainerCenterFirst" type="text" placeholder="    What´s happening ..."/>
                </div>
            </div>
        )
    }
}