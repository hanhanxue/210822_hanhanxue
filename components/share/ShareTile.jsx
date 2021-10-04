


// 00 Vendor Libs
import {useRouter} from 'next/router'
let moment = require('moment')

// 01 Vendor Components

// 02 My Libs


// 03 My Components
import MyLink from '../global/MyLink'

// 04 My Styles
import styles from './ShareTile.module.scss'





const ShareTile = ( {tileType, coverImage,   categories, date,    title,    slug }) => {


    const router = useRouter()
    const viewPost = (href) => {
      router.push(href)
    }
    
        const postLink = `/share/${slug}`

    const backgroundImageStyle = {
        backgroundImage: `url('${coverImage.publicFilePath}')`
    }







    return ( 
        <div className={`${styles.tile} ${styles['tile' + tileType]}`}>

            <div className={`${styles.card}`}>





                    <div className={styles.imageFrame} style={backgroundImageStyle} onClick={ () => viewPost(postLink) }>
                    </div>

                    <div className={styles.textFrame}>
                        <div className={`${styles.flexItem} ${styles.metaFrame}`}>
                            <div className={`subhead ${styles.metaCategory}`}>{categories[0]}</div>
                            <div className={`subhead ${styles.metaDate}`}>  {moment(date).format('MMM Do YYYY')} </div>
                        </div>

                        <div className={`headline ${styles.flexItem} ${styles.titleFrame}`}>
                            <MyLink href={postLink}>{title}</MyLink>
                        </div>
                    </div>





            </div>

        </div>
     );

}
 
export default ShareTile;
