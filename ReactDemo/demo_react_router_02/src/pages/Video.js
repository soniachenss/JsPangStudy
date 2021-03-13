import React from 'react';
import { Route, Link } from 'react-router-dom'

import ReactPage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'

function Video(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li>
                        <Link to='/video/reactpage'> React教程</Link>
                    </li>
                    <li>
                        <Link to='/video/fluteer'> Flutter教程</Link>
                    </li>
                    <li>
                        <Link to='/video/vue'> Vue教程</Link>
                    </li>
                </ul>
            </div>
            <div className='vedioContent'>
                <div><h2>视频教程</h2></div>
                <Route path='/video/reactpage' component={ReactPage}/>
                <Route path='/video/fluteer' component={Flutter}/>
                <Route path='/video/vue' component={Vue}/>
            </div>
        </div>
    )
}

export default Video;

