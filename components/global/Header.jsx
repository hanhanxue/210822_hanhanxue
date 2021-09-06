// import NextLink from 'next/link'

import styles from './Header.module.scss'


import NextImage from 'next/image'
import { useEffect, useState } from 'react'
import MyLink from './MyLink'



const Header = ( {theme} ) => {

    // let headerHeight = 0
    // let lastKnownScrollPosition = 0
    // let scrollDelta = 0
    // let onFirstUp = true
    // let marker = 0

    // const [scrollStyle, setScrollStyle] = useState({
    //     position: 'absolute',
    //     top: 0,
    // })

    // const handleScroll = (e) => {
    //     scrollDelta = window.scrollY - lastKnownScrollPosition



    //     if(scrollDelta < 0) {

    //         if((marker - window.scrollY) > 128)
    //         {
    //             setScrollStyle({
    //                 position: 'fixed',
    //                 top:0,
    //             })
         
    //         }
    //         // scrolling up

    //         if(onFirstUp === true) {
    //             // First scroll up
    //             setScrollStyle({
    //                 position: 'absolute',
    //                 top: lastKnownScrollPosition - 128,
    //             })
    //             marker = lastKnownScrollPosition

    //             onFirstUp = false
    //         }
    
    //     }
    //     else {
    //         if(onFirstUp === false) {
    //             // First Down
    //             setScrollStyle({
    //                 position: 'absolute',
    //                 top: lastKnownScrollPosition,
    //             })
    //         }
    //         // scrolling down
    //         // if(onFirstUp) return
    //         onFirstUp = true
    //     }


    //     lastKnownScrollPosition = window.scrollY

    // }

    // const scrollSetStyle = 

    // useEffect(() => {
    //     headerHeight = 

    //     window.addEventListener('scroll', (e) => handleScroll(e))

    //      //   cleanup this component
    // return () => {
    //     window.removeEventListener('scroll', handleScroll)
    //   }
    //   }, []);







      
    return (

        <>
        <header className={`section section${theme}`}>
        <div className={`wrapper`}>
        <div className={`${styles.letterBox}`}>

            <div className={`${styles.logoFrame}`}>
        <div className={`${styles.imageFrame}`}>
                <NextImage className={`${styles.nextImage}`} src={ `/hanhanxue@2x.png`} width='64px' height='64px'  />
                    </div>
                    </div>

            <nav className={`${styles.nav}`}>



                <div className={`${styles.introFrame}`}>
                    <span className={`body_1 ${styles.logotype}`}><MyLink href="/">Han Han Xue</MyLink></span>
                    <pre className={`body_1 ${styles.tagline}`}> — Interdisciplinary Design</pre>
                </div>

                <ul className={`body_1 ${styles.navFrame}`}>
                    <li className={`${styles.item}`}><MyLink href="/">Work</MyLink></li>
                    <li className={`${styles.item}`}><MyLink href="/share">Share</MyLink></li>
                    <li className={`${styles.item}`}><MyLink href="/play">Play</MyLink></li>
                    <li className={`${styles.item}`}><MyLink href="/info">Info</MyLink></li>
                </ul>

            </nav>

        </div>
        </div>
        </header>


        

        {/* <header className={`${styles.spacer}`}>
        <div className={`wrapper`}>
        <div className={`${styles.letterBox}`}>
            
            <div className={`body_1 ${styles.invisible}`}>

        &nbsp;

            </div>

        </div>
        </div>
        </header> */}



        </>
    )
}

export default Header




