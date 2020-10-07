import React, { useEffect, useState } from 'react';
import './App.css';
import Video from './components/Video';
import api from './services/api';

interface Video {
  _id: string;
  url: string;
  channel: string;
  description: string;
  song: string;
  likes: string;
  shares: string;
  messages: string;
}

function App() {
  const [videos, setVideos] = useState<Video[]>([]);
  useEffect(() => {
    async function getPosts() {
      const response = await api.get('/posts');
      setVideos(response.data);
    }

    getPosts();
  }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(video => (
          <Video
            key={video._id}
            url={video.url}
            channel={video.channel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            shares={video.shares}
            messages={video.messages}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
