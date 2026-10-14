import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import YouTubePlayer from 'youtube-player';

function App() {
  const [count, setCount] = useState(0)

  // let player = YouTubePlayer('video-player');
      
  // player.loadVideoById("NEqhf-0fN_k");
  
  // player.playVideo();

  return (
    <>
      <section id="center">
        <h1>This is git.</h1>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
