/**
 * @name ContainerCenterSecond
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';
import { Tweets } from './Tweets/Tweets'

export const ContainerCenterSecond =({tweets}) => {
    return (
        <div className="containerCenterSecond">
            {tweets.map(tweet=>{
                return (
                    <div className="containerCenterSecondSize">
                        <Tweets imgPhotoUser={tweet.imgPhotoUser} nameUser={tweet.nameUser} user={tweet.user} timeTweet={tweet.timeTweet} bodyText={tweet.bodyText} />
                        <div className="DivBodyTweet">  
                            <i class="fa fa-comment-o" aria-hidden="true" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i className="btnSpacingButtons" class="fa fa-retweet" aria-hidden="true" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-heart-o" aria-hidden="true"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <i class="fa fa-envelope-o" aria-hidden="true"/>
                        </div>
                        <hr/>
                    </div>
                )
            })}
      </div>
    )
}