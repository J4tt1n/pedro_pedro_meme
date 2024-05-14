import React, { useEffect } from 'react';
import './App.css';
import pedro_pic from './pedro-picture.jpg';
import pedroSongFile from './pedro-meme-song.mp3';

function App() {
  useEffect(() => {
    const pedroSong = new Audio(pedroSongFile);
    pedroSong.play();

    return () => {
      pedroSong.pause();
    };
  }, []);

  return (
    <div className='container'>
      <div className='pedro-header'><h1>Pedro Meme</h1></div>
      <div className='pedro'><img src={pedro_pic} alt='pedro-pic' className='pedro-pic' /></div>
    </div>
  );
}

export default App;
