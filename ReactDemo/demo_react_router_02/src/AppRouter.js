import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Video from './pages/Video'
import WorkPlace from './pages/WorkPlace'
import Index from './pages/Index'
import './index.css'

function AppRouter(){
    return (
        <Router>
            <div className="mainDiv">
                <div className='leftNav'>
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">博客首页</Link></li>
                        <li><Link to="/video">视频教程</Link></li>
                        <li><Link to="/workplace">职场技能</Link></li>
                    </ul>
                </div>
                <div className='rightMain'>
                    <Route path='/' exact component={Index}/>
                    <Route path='/video' component={Video}/>
                    <Route path='/workplace' component={WorkPlace}/>
                </div>

            </div>
        </Router>
    )
}

export default AppRouter;