import React from 'react';
import { Route, Link } from 'react-router-dom'

import GetUp from './workplace/GetUp'
import Money from './workplace/Money'

function WorkPlace(){
    return (
        <div>
            <div className='topNav'>
                <ul>
                    <li>
                        <Link to='/workplace/money'> 程序员加薪秘笈</Link>
                    </li>
                    <li>
                        <Link to='/workplace/getup'>程序员早起攻略</Link>
                    </li>
                </ul>
            </div>
            <div className='vedioContent'>
                <div><h2>职场软技能</h2></div>
                <Route path='/workplace/money' component={Money}/>
                <Route path='/workplace/getup' component={GetUp}/>
            </div>
        </div>
    )
}

export default WorkPlace;

