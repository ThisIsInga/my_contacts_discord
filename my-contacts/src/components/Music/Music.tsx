import { useState, useRef } from 'react';
import style from './Music.module.css';
import music from './../../assets/music/meow_justChill.mp3';

function Music() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);;

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.volume = 0.5; 
                audioRef.current.play();
            }
        }
        setIsPlaying(!isPlaying);
    }

    return(
        <section className={style.background_block}>
            <section className={style.text_block}>
                <audio 
                    ref={audioRef}
                    src={music}
                    loop
                />
                <button onClick={toggleMusic}>
                    {isPlaying ? "⏸" : "▶"}
                </button>
                <span>Just chill</span>
            </section>
        </section>
    )
}

export default Music;