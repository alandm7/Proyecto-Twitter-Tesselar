/**
 * @name UserToFollow
 * @author Alan De Miguel Garcia
 */
 import React, { Component } from 'react';

 export const UserToFollow =({ imgUser,nameUser, User }) => {
     return (
        <div>
            <img className="imgCircleCenterSecond" src={imgUser}/>
            <a className="cardTitleUserTweet">{nameUser} <a className="textoTweet">  @{User}</a></a> 
            <button className="buttonFollow">Seguir</button>
            <br/> 
        </div>
     )
 }