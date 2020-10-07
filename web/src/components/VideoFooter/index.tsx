import React from 'react';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import './styles.css';
import Ticker from 'react-ticker';

interface VideoFooterProps {
  channel: string;
  description: string;
  song: string;
}

const VideoFooter: React.FC<VideoFooterProps> = ({ channel, description, song }) => {

  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth" >
            {
              ({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )
            }
          </Ticker>
        </div>
      </div>
      <img src="https://static.thenounproject.com/png/934821-200.png" alt="record"
        className="videoFooter__record" />
    </div>
  );
}

export default VideoFooter;