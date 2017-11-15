/**
 * @name ContainerRightFirst
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';
import { UserToFollow } from './UsersToFollow/UserToFollow'

export const ContainerRightFirst =({usersFollow})=> {
    return (
         <div className="divContainerRight" >
            <div className="divContainerRightSize">
                <a className="trendTopicsLetter">How to follow</a> <br/>
                {usersFollow.map(userFollow=>{
                    return (
                        <UserToFollow imgUser={userFollow.imgUser} nameUser={userFollow.nameUser} User={userFollow.User} />                       
                    )
                })}
                <br/>
                <hr/>                       
            </div>
        </div>
    )
}