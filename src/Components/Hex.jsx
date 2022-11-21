import React from 'react';

const style = {
    hex : `w-24 h-28 bg-red-900 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    puck : `h-10 w-10 font-bold text-gray-700 rounded-full bg-yellow-200 flex items-center justify-center font-mono text-center m-auto`,
}

function Hex(props) {
    return(
        <div class="hex" className={style.hex}>
            <div className={style.puck}>
            {props.id}
            </div>
        </div>
    );
}

export default Hex;