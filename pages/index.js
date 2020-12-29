import Head from 'next/head';
import styles from '../styles/scss/styles.module.scss';
import TiltCover from '../src/tilt.jsx';
import Player from  '../src/player.jsx';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <TiltCover></TiltCover>
        <Player></Player>
      </main>
    </div>
  )
}
