import React, { useCallback, useRef, useState } from 'react';
import VideoFooter from '../VideoFooter';
import VideoSidebar from '../VideoSidebar';

import './styles.css';

interface VideoProps {
  url: string;
  channel: string;
  description: string;
  song: string;
  likes: string;
  messages: string;
  shares: string;
}

const Video: React.FC<VideoProps> = ({ url, channel, description, song, likes, messages, shares }) => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoPress = useCallback(() => {
    if (playing) {
      videoRef.current?.pause();
      setPlaying(false);
    } else {
      videoRef.current?.play();
      setPlaying(true);
    }
  }, [playing]);

  return (
    <div className="video">
      <video className="video__player" onClick={handleVideoPress} src={url} loop ref={videoRef}></video>

      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
    </div>
  );
}

export default Video;