/**
 * @description TODO
 */
import React, { Component } from 'react';
import { FirstRow } from './FirstRow/FirstRow';
import { ContainerLeftFirst} from './ContainerLeftFirst/ContainerLeftFirst';
import { ContainerLeftSecond } from './ContainerLeftSecond/ContainerLeftSecond';
import { ContainerCenterFirst } from './ContainerCenterFirst/ContainerCenterFirst';
import { ContainerCenterSecond } from './ContainerCenterSecond/ContainerCenterSecond';
import { ContainerRightFirst } from './ContainerRightFirst/ContainerRightFirst';

export class Design extends Component {
    constructor(props) {
        super(props)
        this.state = {
            trends:[
                {tittle:'#MartesDeAlitas', description:'12,8 K Tweets'},
                {tittle:'#TresPalabrasQueDuelen', description:'@IkerCasillas esta hablando sobre esto'},
                {tittle:'#TodoEsCulpaDeLayun', description:'Mira lo que ha hecho layun!'},
                {tittle:'#OdiameMas', description:'America le gana a las chivas'},
                {tittle:'#FelizMartes', description:'29,2 K Tweets'},
                {tittle:'#LordCachetada', description:'Mira lo que hizo chava iglesias'}
            ],
            tweets:[
                {imgPhotoUser:'https://pbs.twimg.com/profile_images/922894641766256641/tOnNhK4t_400x400.jpg',nameUser:'Alan Dm',
                    user:'Dimigele', timeTweet:'3 Seconds', bodyText:'Justo cuando creí que estaba afuera.... me volvieron a meter'},
                    {imgPhotoUser:'https://pbs.twimg.com/profile_images/519939532092104704/eTpfmD47_400x400.jpeg',nameUser:'Alberto Bautista',
                    user:'Dachb', timeTweet:'13 nov', bodyText:'Shampu anticaida que me recomienden?'},
                    {imgPhotoUser:'https://pbs.twimg.com/profile_images/891730529334284288/ZD82Vahg_400x400.jpg',nameUser:'Rodrigo Orozco',
                    user:'rodrigorozc', timeTweet:'8 nov', bodyText:'Alguien sabe donde deje mis pastillas del AlzHeimer?'},
                    {imgPhotoUser:'https://pbs.twimg.com/profile_images/799383302452805633/yd5bobMS_400x400.jpg',nameUser:'Alan G. Sánchez',
                    user:'Alang_sv', timeTweet:'5 nov', bodyText:'Tendre que poner el domicilio de Tamazula.. o el de aqui?'}
            ],
            usersFollow:[
                {imgUser:'https://pbs.twimg.com/profile_images/799383302452805633/yd5bobMS_400x400.jpg',nameUser:'Alan G',
                User:'Alang_sv'},
                {imgUser:'https://pbs.twimg.com/profile_images/928951694557433861/5Agr9ZeJ_400x400.jpg',nameUser:'KAKA',
                User:'KAKA'},
                {imgUser:'https://pbs.twimg.com/profile_images/928189325568827392/3eFJIePn_400x400.jpg',nameUser:'Mesut ózil',
                User:'MezutOzil'}

            ]
        }
    }

    render() {
        return (
            <div>
               <FirstRow/>
               <ContainerCenterFirst/>
               <ContainerRightFirst usersFollow={this.state.usersFollow}/>
               <ContainerCenterSecond tweets={this.state.tweets}/>
                <ContainerLeftFirst/>
                <ContainerLeftSecond trends={this.state.trends}/>         
            </div>
        )
    }
}