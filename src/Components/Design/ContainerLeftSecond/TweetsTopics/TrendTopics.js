/**
 * @name TrendTopic
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';

export const TrendTopic  =({tittle, description}) => {
    return (
        <div>
            <div className="divTittleTrendsTopic"> 
                <a href="#">{tittle}</a>
            </div>
            <div>
                <span className="textDescriptionTopics">{description}</span>
            </div>
        </div>
    )
}