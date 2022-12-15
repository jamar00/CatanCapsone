import React from 'react';

const style = {
    endButton:`h-8 w-24 bg-yellow-300 border-black border-2 rounded-md text-medium bg-yellow-200 flex items-center justify-center font-mono text-center`
}

// Function to handle button clicks
function handleClick(){
    // Display an alert message
    alert('Turn Ended')
}

// React component for rendering an "End Turn" button
function EndButton() {
    // Render the button and attach the handleClick function to the onClick event
    return(
        <button className={style.endButton} onClick={handleClick}>
            End Turn
        </button>
    );
}

export default EndButton;