import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

// 只能用 query传递参数  ?id=

// routeChangeStart  路由将要发生变化
// routeChangeComplete  发生变化之后
// beforeHistoryChange
// routeChangeError
// hashChangeStart
// hashChangeComplete

const Home = () => {
  // 钩子函数  常用于路由跳转动画，离开路由关闭链接等防止内存溢出
  Router.events.on('routeChangeStart',(url,{shallow}) => {
    console.log('1 routeChangeStart->路由开始变化，参数为：',url,shallow);
  })
  Router.events.on('beforeHistoryChange',(url,{shallow}) => {
    console.log('2 beforeHistoryChange->路由变化结束，参数为：',url,shallow);
  })
  Router.events.on('routeChangeComplete',(url,{shallow}) => {
    console.log('3 routeChangeComplete->路由变化结束，参数为：',url,shallow);
  })
  Router.events.on('routeChangeError',(url,{shallow}) => {
    console.log('4 routeChangeError->路由发生错误，参数为：',url,shallow);
  }) //不包括404
  Router.events.on('hashChangeStart',(url,{shallow}) => {
    console.log('5 hashChangeStart->hash路由发生改变之前，参数为：',url,shallow);
  })
  Router.events.on('hashChangeComplete',(url,{shallow}) => {
    console.log('6 hashChangeComplete->hash路由发生改变之后，参数为：',url,shallow);
  })

  function goToA(){
    Router.push('/Sudieer')
  }
  function getArticle(){
    Router.push({
      pathname: '/article',
      query: {
        name: 'A'
      }
    })
  }
  return (
      <div>
          <div>我是首页</div>
          {
            // <div><Link href='/Sudieer'><a>A页面</a></Link></div>
            // <div><Link href='/SudieerB'><a>B页面</a></Link></div>
            // <div>
            //    <button onClick={goToA}>A页面</button>
            // </div>
          }
          <div>
            <Link href={{pathname: '/article',query: {name: 'A'}}}><a>A文章</a></Link>
            <Link href='/article?name=B'><a>B文章</a></Link>
            <div>
              <button onClick={getArticle}>A文章</button>
            </div>
            <div>
              <Link href='#Sudieer'><a>选苏蝶</a></Link>
            </div>
          </div>
      </div>
  )
}

export default Home
