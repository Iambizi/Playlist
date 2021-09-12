import Head from 'next/head';
import styles from '../styles/scss/styles.module.scss';
import TiltCover from '../src/components/tilt.jsx';
import Player from  '../src/components/player.jsx';
import React, {useState, useEffect } from 'react';
import { Credentials } from '../src/keys/credentials.js';
import axios from 'axios';

export default function Home() {
  const spotify = Credentials();
  // useEffect(()=>{
  //   axios(`https://accounts.spotify.com/api/token`,{
  //     headers: {
  //       'content-Type': 'application/x-www-form-urlencoded',
  //       'Authorization': 'Basic' + btoa(spotify.ClientId + ':' + spotify.ClientSecret)
  //     },
  //     data: 'grant_type-client_credentials',
  //     method: 'POST'
  //   })
  //     .then(tokenResponse =>{
  //       console.log(tokenResponse.data.access_token);
  //       setToken(tokenResponse.data.access_token);
  //     })
    
  // },[]);
  console.log(process.env.NEXT_PUBLIC_CLIENT_ID);
  
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
