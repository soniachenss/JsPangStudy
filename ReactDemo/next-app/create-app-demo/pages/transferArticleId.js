import Link from 'next/link'
import Router from 'next/router'

function transferArticleId(){
    function goToArticle3(){
        Router.push({
            pathname: './article',
            query: {
                id: 3
            }
        })
    }
    return (
        <>
            <div><Link href='./article?id=1'><a>文章id为一</a></Link></div>
            <div><Link href={{pathname: './article',query:{id: 2}}}><a>文章id为二</a></Link></div>
            <div onClick={goToArticle3}>文章id为三</div>
        </>
    )
}
export default  transferArticleId;