/**
 * @name ContainerLeftSecond
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';
import  {TrendTopic} from './TweetsTopics/TrendTopics'

export const ContainerLeftSecond =({trends})=> {
    return (
        <div class="row" className="classContentMargin">
            <div className="classContentMarginSize"> 
                <a className="trendTopicsLetter">Trend topics</a> <br/>
                <div>
                    {trends.map(trend=>{
                        return (        
                            <TrendTopic tittle={trend.tittle} description={trend.description} />
                        )
                    })} 
                </div>
            </div>
        </div>
    )
}