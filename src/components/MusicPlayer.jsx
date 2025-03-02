import React from "react";
import ReactPlayer from 'react-player'
import "react-h5-audio-player/lib/styles.css"; // Import default styles

const MusicPlayer = ({ previewUrl }) => {
    return (
        <div className="flex justify-center items-center bg-gradient-to-r from-red-300 to-blue-400 p-6 rounded-xl shadow-lg max-w-3xl my-10">
            <div className="w-full rounded-2xl overflow-hidden bg-slate-900">
                <ReactPlayer
                    url={previewUrl}
                    controls
                    width="100%"
                    height="50px"
                    className="react-player"
                    playing={false}
                    style={{
                        borderRadius: "1rem",
                        border: "2px solid rgba(255, 255, 255, 0.1)", // subtle border
                    }}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
