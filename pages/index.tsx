import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React, { useEffect, useRef } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const ref = useRef<HTMLElement | null>()
  useEffect(() => {
    if (ref.current) {
      return
    }
    ref.current = document.getElementById('lottie')

    window.lottie.useWebWorker(true)
    window.lottie.setQuality('low')

    const anim = window.lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: false,
      autoplay: true,
      rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: 'xMidYMid meet',
        imagePreserveAspectRatio: 'xMidYMid meet',
        title: 'TEST TITLE',
        description: 'TEST DESCRIPTION',
      },
      path: 'animation.json',
    })
    anim.setSubframe(false)
    anim.onError = function (errorType: any) {
      console.log(errorType)
    }

    anim.addEventListener('error', function (error: any) {
      console.log(error)
    })

    anim.addEventListener('error', function (error: any) {
      console.log(error)
    })

    anim.addEventListener('DOMLoaded', function () {
      console.log('DOMLoaded')
    })
  }, [])
  return (
    <div className={styles.container}>
      <div id='lottie' style={{ width: 800, margin: 'auto', display: 'block' }}></div>
    </div>
  )
}