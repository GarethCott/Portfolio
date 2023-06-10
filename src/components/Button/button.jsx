import React from 'react'
import styles from './buttom.module.css'
import Link from 'next/link'

export const Button = ({text,url}) => {
  return (
    <Link href={url}>
        <button className={styles.container}>{text}</button>
    </Link>
  )
}
