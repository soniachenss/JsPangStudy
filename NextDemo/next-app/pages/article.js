import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'

// getInitialProps  请求都写这里

const Article = ({router,list})=> {
    return (
        <>
            <div>{router.query.name}文章</div>
            <div>{list}</div>
            <div><Link href='/'><a>返回首页</a></Link></div>
        </>
    )
}

Article.getInitialProps = async () => {
    const promise = new Promise((resolve)=>{
        axios('http://localhost:3002/data').then(
            (res)=>{
                console.log(res);
                resolve(res.data.data)
            }
        )
    })

    return await promise
}

export default withRouter(Article)