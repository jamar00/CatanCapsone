import React from 'react';

const style = {
    endButton:`h-8 w-24 bg-yellow-300 border-black border-2 rounded-md text-medium bg-yellow-200 flex items-center justify-center font-mono text-center`
}

function handleClick(){
    alert('Turn Ended')
}
function EndButton() {
    return(
        <button className={style.endButton} onClick={handleClick}>
            End Turn
        </button>
    );
}

export default EndButton;