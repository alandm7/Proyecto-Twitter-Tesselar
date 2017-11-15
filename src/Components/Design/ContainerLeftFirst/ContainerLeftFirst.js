/**
 * @name ContainerLeftFirst
 * @description TODO
 * @author Alan De Miguel Garcia
 */
import React, { Component } from 'react';

export class ContainerLeftFirst extends Component {
    render() {
        return (
            <div class="row" className="classContentMargin">
              <div class="col s12 m3">
                <div class="card" >
                  <div class="card-image">
                    <img className="imgTheme" src="https://img.autocosmos.com/noticias/fotosprinc/NAZ_1fad0591b6514413bd98ca44540ee34a.jpg"/>
                    <a class="cardTitleUser">Alan Dm</a>        
                    <img className="imgCircle"  src="https://pbs.twimg.com/profile_images/922894641766256641/tOnNhK4t_400x400.jpg"/>
                    <span class="cardSubtitleUser">@dimigele</span>
                  </div>
                  <div class="card-content"  >
                    <table class="centered">
                     <thead>
                       <tr>
                        <th>Tweets</th>
                        <th>Follow</th>
                        <th>Followers</th>
                      </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>3.189</td>
                          <td>309</td>
                          <td>280</td>
                        </tr>
                     </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}