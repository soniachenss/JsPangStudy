import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow: false
         }
         this.toToggle = this.toToggle.bind(this)
    }
    render() { 
        const { isShow } = this.state
        return (  
            <div>
                <CSSTransition 
                    in={isShow}
                    timeout={2000}
                    classNames={'boss-text'}
                >
                    <div>Boss级任务-孙悟空</div>
                </CSSTransition>
                
                <div><button onClick={this.toToggle}>召唤Boss</button></div>
            </div>
        );
    }
    toToggle(){
        this.setState({
            isShow: !this.state.isShow
        })
    }
}
 
export default Boss;