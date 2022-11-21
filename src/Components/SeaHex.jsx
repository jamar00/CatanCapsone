import React from 'react';

const style = {
    seaHex : `w-24 h-28 bg-blue-400 flex items-center text-center z-5
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
}

function SeaHex(props) {
    return(
        <div className={style.seaHex}>
            {props.text}
        </div>
    );
}

export default SeaHex;