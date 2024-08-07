

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import YouTube from 'react-youtube';

const VideoPlayer = ({ movieTitle }) => {
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    const searchVideo = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            q: `${movieTitle} official trailer`,
            part: 'snippet',
            maxResults: 1,
            type: 'video',
            key: 'AIzaSyDpHI2kGbtdB_zGJ4Y251dIxIZxBVMNWhg', 
          },
        });

        if (response.data.items.length > 0) {
          setVideoId(response.data.items[0].id.videoId);
        } else {
          console.log('No video found');
        }
      } catch (error) {
        console.error('Error fetching YouTube video:', error);
      }
    };

    if (movieTitle) {
      searchVideo();
    }
  }, [movieTitle]);

  if (!videoId) {
    return null; 
  }

  return (
    <div className="video-player">
      <YouTube videoId={videoId} />
    </div>
  );
};

export default VideoPlayer;
