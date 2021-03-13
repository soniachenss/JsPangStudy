import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list: [
                {cid: 123, title:'css个人博客1'},
                {cid: 456, title:'css个人博客2'},
                {cid: 789, title:'css个人博客3'},
            ]
         }
    }
    render() { 
        return ( 
            <div>
                
                {
                    <ul>
                        {
                            this.state.list?.map((item,index)=>{
                                return (
                                    <li key={item.cid}><Link to={`/list/${item.cid}`}>{item.title}</Link></li>
                                )
                            })
                        }
                    </ul>
                }
            </div>
         );
    }
}
 
export default Index;