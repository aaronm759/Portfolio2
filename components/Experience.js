import styles from '../styles/exp.module.css'
import Image from 'next/image'
import Link from 'next/link'

import cfdc from '../public/cfdcLogo.png'
import idlogo from '../public/logoS.jpg'


export default function Experience(){

    return(
        <>
            <div className={styles.container}>
                <h1 className={styles.title}>Experience</h1>
                <a href='https://github.com/codefordc/us-congress-pizza-flag-tracker-frontend'>
                    <div className={styles.expbox}>
                        <div className={styles.imgbox}>
                            <div className={styles.overlay}></div>
                            <Image src={cfdc} alt='custom image' />
                            
                        </div>
                        <div className={styles.info}>
                            <p>Code for DC - Congressional Flag Tracker</p>
                            <p>Developer</p>
                            <p>We are creating a web app to streamline the process congressional staffers
                                use to deliver flags to their constituents</p>
                        </div>
                    </div>
                </a>
                <a href='https://www.influentialdesignagency.com/'>
                    <div className={styles.expbox}>
                        <div className={styles.imgbox}>
                            <div className={styles.overlay}></div>
                            <Image src={idlogo} alt='custom image' layout='responsive' />
                        </div>
                        <div className={styles.info}>
                            <p>Influential Design</p>
                            <p>Developer</p>
                            <p>This is my personal web development business</p>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}