import React, { useState, useRef, useEffect } from 'react';
import playIcon from '../assets/right-arrow-play-button-svgrepo-com.svg';
import pauseIcon from '../assets/pause-button-svgrepo-com.svg';
import volumeMaxIcon from '../assets/volume-max-svgrepo-com.svg';
import volumeMinIcon from '../assets/volume-min-svgrepo-com.svg';
import volumeMuteIcon from '../assets/volume-xmark-svgrepo-com.svg';

const CustomAudioPlayer = ({ src, label }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const setAudioData = () => {
      setDuration(audio.duration);
      setCurrentTime(audio.currentTime);
      setIsLoading(false);
    };

    const setAudioTime = () => setCurrentTime(audio.currentTime);
    
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    if (audio) {
      audio.addEventListener('loadeddata', setAudioData);
      audio.addEventListener('timeupdate', setAudioTime);
      audio.addEventListener('loadstart', handleLoadStart);
      audio.addEventListener('canplay', handleCanPlay);
      audio.addEventListener('ended', () => setIsPlaying(false));

      return () => {
        audio.removeEventListener('loadeddata', setAudioData);
        audio.removeEventListener('timeupdate', setAudioTime);
        audio.removeEventListener('loadstart', handleLoadStart);
        audio.removeEventListener('canplay', handleCanPlay);
        audio.removeEventListener('ended', () => setIsPlaying(false));
      };
    }
  }, []);

  const togglePlayPause = () => {
    if (isLoading) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeChange = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value / 100;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const togglePlaybackSpeed = () => {
    const speeds = [1, 1.25, 1.5, 2, 0.25, 0.5];
    const currentIndex = speeds.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newRate = speeds[nextIndex];
    
    setPlaybackRate(newRate);
    audioRef.current.playbackRate = newRate;
  };

  const getVolumeIcon = () => {
    if (isMuted || volume === 0) return volumeMuteIcon;
    if (volume < 0.5) return volumeMinIcon;
    return volumeMaxIcon;
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="mechaton-audio-block">
      <div className="mechaton-audio-label">{label}</div>
      <div className="custom-audio-player-advanced">
        <audio
          ref={audioRef}
          src={src}
          preload="metadata"
        />
        
        <div className="audio-controls-main">
          <button 
            className={`play-pause-btn-advanced ${isLoading ? 'disabled' : ''}`} 
            onClick={togglePlayPause}
            disabled={isLoading}
          >
            <img 
              src={isPlaying ? pauseIcon : playIcon} 
              alt={isPlaying ? 'Pause' : 'Play'}
              className="control-icon"
            />
          </button>
          
          <div className="audio-progress-section">
            <div className="time-display-left">
              {formatTime(currentTime)}
            </div>
            
            <div className="progress-container">
              <input
                type="range"
                className="audio-progress-advanced"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleTimeChange}
                disabled={isLoading}
              />
              <div className="progress-background">
                <div 
                  className="progress-fill" 
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
            </div>
            
            <div className="time-display-right">
              {formatTime(duration)}
            </div>
          </div>
          
          <button 
            className="speed-btn"
            onClick={togglePlaybackSpeed}
            title={`Prędkość: ${playbackRate}x`}
          >
            {playbackRate}x
          </button>
          
          <div className="volume-control-section">
            <button 
              className="volume-btn"
              onClick={toggleMute}
            >
              <img 
                src={getVolumeIcon()} 
                alt="Volume"
                className="control-icon"
              />
            </button>
            
            <div className="volume-slider-container">
              <div className="volume-slider-wrapper">
                <div className="volume-slider-track"></div>
                <div 
                  className="volume-slider-fill" 
                  style={{ width: `${isMuted ? 0 : volume * 100}%` }}
                ></div>
                <input
                  type="range"
                  className="volume-slider"
                  min="0"
                  max="100"
                  value={isMuted ? 0 : volume * 100}
                  onChange={handleVolumeChange}
                />
              </div>
            </div>
          </div>
        </div>
        
        {isLoading && (
          <div className="loading-indicator">
            Ładowanie...
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomAudioPlayer;