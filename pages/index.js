import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import globalStyle from '../styles/global.module.css'
import HeroFooter from '../component/footer'


export default function Home() {
  const homePageShow = "這邊index.js";
  return (  
    <>
    <div className = {globalStyle.container}>
        <h1 className = {globalStyle.test}> 
            {homePageShow} <br/>
        </h1>
       
    </div>
    </>
  )
}
