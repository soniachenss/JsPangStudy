import Link from 'next/link'
import Router from 'next/router'

export default function Home() {
  function gotoSudieerA(){
    Router.push('./SudieerA')
  }
  Router.events.on('routeChangeStart',(...args)=>{
    console.log('1.routeChangeStart->路由开始变化，参数为',...args);
  })
  Router.events.on('routeChangeComplete',(...args)=>{
    console.log('2.routeChangeComplete->路由结束变化，参数为',...args);
  })
  Router.events.on('routeHistoryChange',(...args)=>{
    console.log('3.routeHistoryChange->路由结束变化，参数为',...args);
  })
  Router.events.on('routeChangeError',(...args)=>{
    console.log('4.routeChangeError->跳转发生错误（不包括404），参数为',...args);
  })
  Router.events.on('hashChangeStart',(...args)=>{
    console.log('5.hashChangeStart->hash跳转开始时执行，参数为',...args);
  })
  Router.events.on('hashChangeComplete',(...args)=>{
    console.log('6.hashChangeComplete->hash跳转完成时，参数为',...args);
  })
  return (
    <>
      <div>我是首页</div>
      <div><Link href="./SudieerA">跳转SudieerA</Link></div>
      <div><Link href="./SudieerB">跳转SudieerB</Link></div>
      <div><Link href="./transferArticleId">跳转transferArticleId</Link></div>
      <div onClick={gotoSudieerA} >编程式跳转到SudieerA</div>
      <div><Link href="#Sudieer"><a>hash跳转</a></Link></div>
    </>
  )
}
