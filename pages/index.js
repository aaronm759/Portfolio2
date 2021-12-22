import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import Exp from '../components/Experience'
import Chat from '../components/chatBot'

export default function Home() {
  
  return(
    <>
      <Chat/>
      <Hero/>
      <Exp/>
      
    </>
  )

  
}
