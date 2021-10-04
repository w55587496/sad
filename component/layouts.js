
import HeroBanner from './banner'
import HeroFooter from './footer'
import Nav from './Nav'
import styles from '../styles/layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
        <div className = {styles.container}>
            <head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>yunlostinemotion</title>
            </head>
      
            <div className = {styles.main}>       
                <HeroBanner/>
                <Nav />
            </div>
        </div>
        
        </>
    );
}