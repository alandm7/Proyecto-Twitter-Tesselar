/**
 * @name Tweets
 * @description  TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';

export const Tweets = ({imgPhotoUser, nameUser, user, timeTweet, bodyText}) => {
    return (
        <div > 
            <img className="imgCircleCenterSecond" src={imgPhotoUser}/>
            <a className="cardTitleUserTweet">{nameUser}<a className="textoTweet">&nbsp;&nbsp;@{user}</a><a className="textoTweet">&nbsp;  {timeTweet}</a></a> 
            <a className="textoTweetBody">{bodyText}</a>      
        </div>
    )
}