import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import background from '../public/portbackground.jpg'


export default function Hero(){

    const variants = {
      introM: {
        x: ["-40vw","0vw"],
        y: ["-25vh", "0vh"],
        opacity:[0, 1, 1],
        fontSize: ["10em","4em"],
        transition: {
          type: "tween",
          duration: 3
        }
      },
        introE: {
        x: ["-40vw","0vw"],
        y: ["-20vh", "0vh"],
        opacity:[0, 1, 1],
        fontSize: ["10em","4em"],
        transition: {
          delay: .4,
          type: "tween",
          duration: 3
        }
      },
      introR: {
        x: ["-40vw","0vw"],
        y: ["-15vh", "0vh"],
        opacity:[0, 1, 1],
        fontSize: ["10em","4em"],
        transition: {
          delay: .8,
          type: "tween",
          duration: 3
        }
      },
      introN: {
        x: ["-40vw","0vw"],
        y: ["-10vh", "0vh"],
        opacity:[0, 1, 1],
        fontSize: ["10em","4em"],
        transition: {
          delay: 1.2,
          type: "tween",
          duration: 3
        }
      }
  }
  
  return (
   <>
      <div className={styles.bg}>
        <Image src={background} alt='custom image' layout='responsive'/>
      </div>
      <div className={styles.overlay}></div>
      <div className={styles.herobox}>
        <motion.div className={styles.titlebox}
            animate={{ opacity:[0,1]}}
            transition={{ delay: 3}}>
          <h1 className={styles.name}>Aaron McFarlin</h1>
          <h2 className={styles.title}>Full Stack Developer</h2>
        </motion.div>
        <div className={styles.stackbox}>
          <motion.div className={styles.stack}
             animate="introM"
              variants={variants}>
                <h3 >MongoDB</h3>
          </motion.div>
          <motion.div className={styles.stack}
              animate="introE"
              variants={variants}>
                <h3>Express</h3>
          </motion.div>
          <motion.div className={styles.stack} 
          animate="introR"
          variants={variants} >
            <h3 >React</h3>
          </motion.div>
          <motion.div className={styles.stack}
            animate="introN"
            variants={variants}>
            <h3>Node</h3>
          </motion.div>
        </div>
      </div>
   </>
  )
}