import React,{useState} from 'react'


function Run() {
    const [showGif, setShowGif] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true);

    const playGIF = () => {
        setShowGif(true);
        setButtonVisible(false)
    };

    return (
        <div className="gif-container">
        {/* Conditionally render the GIF based on the state */}
        {showGif && (
            <img src="https://assets-global.website-files.com/59e16042ec229e00016d3a66/60b8f057616cb823051a2fda_blog-listing%20(11).gif" width={200} alt="GIF" />
        )}
        {/* Button to play the GIF */}
        { buttonVisible &&
        (
            <button className="button-64" onClick={playGIF} role="button"><span className="text">Run</span></button>
        )}
    </div>
    );
}


export default Run




