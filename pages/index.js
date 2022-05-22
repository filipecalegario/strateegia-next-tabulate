import Head from 'next/head'
import Image from 'next/image'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Table/>
    </div>
  )
}
