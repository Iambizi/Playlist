import Head from 'next/head';
import styles from '../styles/scss/styles.module.scss';
import TiltCover from '../src/tilt.jsx';
import Player from  '../src/player.jsx';
import React, {useState, useEffect } from 'react';

const defaultEndPoint = 'https://api.spotify.com/token';


export async function getServerSideProps(){

  const res = await fetch(defaultEndPoint);
  const data = await res.json();
  return{
    props:{
      data
    }
  }
}

export default function Home({data}) {
  console.log(data);
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
