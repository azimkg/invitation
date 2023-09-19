import React, { useRef, useState } from 'react';
import music from "../assets/images/ornament.png"
import voice from "../assets/voice.mp3"

const Music = () => {
    const audioRef = useRef(null);
    const [play, isPlay] = useState(false)
    function playMus() {
        audioRef.current.play();
        isPlay(true)
    }

    function pauseMus() {
        audioRef.current.pause();
        isPlay(false)
    }

    const handleAudioEnd = () => {
    isPlay(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };
    return (
        <div className="fixed bottom-4 w-16 h-16 md:w-20  md:h-20 right-4 z-30 flex items-center justify-center">
            <audio ref={audioRef} src={voice} onEnded={handleAudioEnd}></audio>
            <img src={music} className={play ? "w-16 h-16 md:w-20  md:h-20 animation": "w-16 h-16 md:w-20  md:h-20 animation hidden"} alt="music" />
            <svg onClick={pauseMus}  className={play ? "absolute w-14 shad rounded-full":"absolute w-14 shad rounded-full hidden"} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"/>
                    <path d="M8.07612 8.61732C8 8.80109 8 9.03406 8 9.5V14.5C8 14.9659 8 15.1989 8.07612 15.3827C8.17761 15.6277 8.37229 15.8224 8.61732 15.9239C8.80109 16 9.03406 16 9.5 16C9.96594 16 10.1989 16 10.3827 15.9239C10.6277 15.8224 10.8224 15.6277 10.9239 15.3827C11 15.1989 11 14.9659 11 14.5V9.5C11 9.03406 11 8.80109 10.9239 8.61732C10.8224 8.37229 10.6277 8.17761 10.3827 8.07612C10.1989 8 9.96594 8 9.5 8C9.03406 8 8.80109 8 8.61732 8.07612C8.37229 8.17761 8.17761 8.37229 8.07612 8.61732Z" fill="#fff"/>
                    <path d="M13.0761 8.61732C13 8.80109 13 9.03406 13 9.5V14.5C13 14.9659 13 15.1989 13.0761 15.3827C13.1776 15.6277 13.3723 15.8224 13.6173 15.9239C13.8011 16 14.0341 16 14.5 16C14.9659 16 15.1989 16 15.3827 15.9239C15.6277 15.8224 15.8224 15.6277 15.9239 15.3827C16 15.1989 16 14.9659 16 14.5V9.5C16 9.03406 16 8.80109 15.9239 8.61732C15.8224 8.37229 15.6277 8.17761 15.3827 8.07612C15.1989 8 14.9659 8 14.5 8C14.0341 8 13.8011 8 13.6173 8.07612C13.3723 8.17761 13.1776 8.37229 13.0761 8.61732Z" fill="#fff"/>
                </svg>
                <svg onClick={playMus} className={play ? "absolute w-14 shad rounded-full hidden":"absolute w-14 shad rounded-full "} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#1C274C"/>
                    <path d="M15.4137 13.059L10.6935 15.8458C9.93371 16.2944 9 15.7105 9 14.7868V9.21316C9 8.28947 9.93371 7.70561 10.6935 8.15419L15.4137 10.941C16.1954 11.4026 16.1954 12.5974 15.4137 13.059Z" fill="#fff"/>
                </svg>
        </div>
    );
};

export default Music;