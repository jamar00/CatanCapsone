import React from 'react';

const style = {
    lumberHex : `w-24 h-28 bg-green-800 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    woolHex : `w-24 h-28 bg-green-500 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    clayHex : `w-24 h-28 bg-orange-700 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    wheatHex : `w-24 h-28 bg-yellow-400 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    oreHex : `w-24 h-28 bg-gray-800 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    desertHex : `w-24 h-28 bg-yellow-200 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    hex : `w-24 h-28 bg-red-900 text-center text-align-center flex items-center
    clip-path-polygon-[50%_0,_100%_25%,_100%_75%,_50%_100%,_0_75%,_0_25%]`,
    puck : `h-10 w-10 font-bold text-gray-700 rounded-full bg-yellow-200 flex items-center justify-center font-mono text-center m-auto`,
}

// Define a function that returns the appropriate style class
// for a hexagon based on the value of the "r" property
function getStyle(props) {
    switch(props){
        case("wheat"):return style.wheatHex;
        case("lumber"):return style.lumberHex;
        case("clay"):return style.clayHex;
        case("wool"):return style.woolHex;
        case("desert"):return style.desertHex;
        case("ore"):return style.oreHex;
        default:return style.hex;
    }
}

// Define a Hex component that takes a "r" and an "id" property as inputs
function Hex(props) {
    return(
        // Create a div element with the "hex" class and the style class returned by getStyle
        <div class="hex" className={getStyle(props.r)}>
            {/*Create an inner div element with the "puck" class that displays the value of the "id" property*/}
            <div className={style.puck}>
            {props.id}
            </div>
        </div>
    );
}

export default Hex;