import { useState, useRef } from "react";
import './Musics.css'
import song1 from "../Musics/audios/song1.mp3";
import song2 from "../Musics/audios/song2.mp3";
import song3 from "../Musics/audios/song3.mp3";
import cover1 from "../Musics/images/cover1.png";
import cover2 from "../Musics/images/cover2.png";
import cover3 from "../Musics/images/cover3.png";

const musicData = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    audio: song1,
    cover: cover1
  },
  {
    id: 2,
    title: "Viva La Vida",
    artist: "Coldplay",
    audio: song2,
    cover: cover2
  },
  {
    id: 3,
    title: "I'm Yours",
    artist: "Jason Mraz",
    audio: song3,
    cover: cover3
  },
  {
    id: 4,
    title: "Perfect",
    artist: "Ed Sheeran",
    audio: song1,
    cover: cover1
  },
  {
    id: 5,
    title: "Viva La Vida",
    artist: "Coldplay",
    audio: song2,
    cover: cover2
  },
  {
    id: 6,
    title: "I'm Yours",
    artist: "Jason Mraz",
    audio: song3,
    cover: cover3
  },
];

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

const Musics = () => {
  const [playingId, setPlayingId] = useState(null);
  const [timeData, setTimeData] = useState({});
  const audioRefs = useRef({});

  const togglePlay = (id) => {
    const currentAudio = audioRefs.current[id];
    if (!currentAudio) return;

    if (currentAudio.paused) {
      // stop all others
      Object.entries(audioRefs.current).forEach(([key, audio]) => {
        if (key !== String(id)) {
          audio.pause();
        }
      });
      currentAudio.play();
      setPlayingId(id);
    } else {
      currentAudio.pause();
      setPlayingId(null);
    }
  };

  const handleTimeUpdate = (id) => {
    const audio = audioRefs.current[id];
    setTimeData((prev) => ({
      ...prev,
      [id]: {
        current: audio.currentTime,
        duration: audio.duration
      }
    }));
  };

  const handleSeek = (id, value) => {
    const audio = audioRefs.current[id];
    audio.currentTime = value;
  };

  return (
    <section className="music-section">
      <div className="container">
        <div className="info">
          <h2 >Musiqalar</h2>
          <p>Bu yerda siz o'qish, ishlash yoki shunchaki dam olish uchun musiqalar topishingiz mumkin</p>
        </div>
        <div className="music-grid">
          {musicData.map((music) => (
            <div key={music.id} className="music-card">
              <div className="music-left">
                <div className="image-overlay">
                  <img src={music.cover} alt={music.title} className="music-cover" />
                  <button
                    className="play-button"
                    onClick={() => togglePlay(music.id)}
                  >
                    {playingId === music.id ? (
                      <i className="fas fa-pause"></i>
                    ) : (
                      <i className="fas fa-play"></i>
                    )}
                  </button>
                </div>
              </div>
              <div className="music-right">
                <h3 className="music-title">{music.title}</h3>
                <p className="music-artist">{music.artist}</p>
                <audio
                  ref={(el) => (audioRefs.current[music.id] = el)}
                  src={music.audio}
                  onTimeUpdate={() => handleTimeUpdate(music.id)}
                  onLoadedMetadata={() => handleTimeUpdate(music.id)}
                />
                <div className="time-controls">
                  <span className="time">
                    {formatTime(timeData[music.id]?.current || 0)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={timeData[music.id]?.duration || 0}
                    value={timeData[music.id]?.current || 0}
                    step="0.1"
                    onChange={(e) => handleSeek(music.id, e.target.value)}
                  />
                  <span className="time">
                    {formatTime(timeData[music.id]?.duration || 0)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Musics