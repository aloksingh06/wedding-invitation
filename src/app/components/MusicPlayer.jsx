"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  // Autoplay music on page load (muted)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.muted = true;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsMuted(true);
            })
            .catch((error) => {
              console.log("Autoplay prevented:", error);
              setIsPlaying(false);
            });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Unmute after first user interaction
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (audioRef.current && isMuted) {
        audioRef.current.muted = false;
        setIsMuted(false);
      }
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };

    window.addEventListener("click", handleFirstInteraction);
    window.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [isMuted]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.log("Play error:", error);
        });
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      <motion.button
        onClick={toggleMusic}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 p-4 md:p-3 rounded-full bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-colors duration-300 shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        <span className="text-xl md:text-lg">
          {isPlaying ? "⏸" : "▶"}
        </span>
      </motion.button>
    </>
  );
}
