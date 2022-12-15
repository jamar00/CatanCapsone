/*

Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React from 'react';

const style = {
    container : `h-30 w-auto bg-gray-700 mt-6 mx-4 mb-6 text-gray-200 mt-6`,
    lumberCard :`h-20 w-12 mx-2 bg-green-800 border-2 border-black border-style-solid rounded-md`,
    woolCard: `h-20 w-12 mx-2 bg-green-600 border-2 border-black border-style-solid rounded-md`,
    clayCard: `h-20 w-12 mx-2 bg-orange-700 border-2 border-black border-style-solid rounded-md`,
    wheatCard: `h-20 w-12 mx-2 bg-yellow-400 border-2 border-black border-style-solid rounded-md`,
    oreCard: `h-20 w-12 mx-2 bg-gray-800 border-2 border-black border-style-solid rounded-md`,
    puck : `h-8 w-8 mt-1 mb-1 font-bold text-gray-700 rounded-full bg-gray-200 flex items-center justify-center font-mono text-center m-auto`
}

function Resources(props) {
    // Return a div element containing other elements
    return(
        // Apply the "container" class to the outer div element
        <div className={style.container}>
        {/* Add a div element with the "bg-gray-300 text-black font-medium" classes applied */}
        <div class="bg-gray-300 text-black font-medium">
            Resources
        </div>
        {/* Add a div element with the "flex flex-row justify-center" classes applied */}
        <div class="flex flex-row justify-center ">
        {/* Add a div element containing an image and text for the "lumber" resource */}
        <div>
        {/* Apply the "lumberCard" class to the div element containing the lumber image */}
        <div className={style.lumberCard}/>
        {/* Add a div element with the "puck" class applied, containing the lumber count from the props object */}
        <div className={style.puck}>
            {props.lumber}
        </div>
        </div>
        {/* Add a div element containing an image and text for the "wool" resource */}
        <div>
        {/* Apply the "woolCard" class to the div element containing the wool image */}
        <div className={style.woolCard}/>
        {/* Add a div element with the "puck" class applied, containing the wool count from the props object */}
        <div className={style.puck}>
            {props.wool}
        </div>
        </div>
        {/* Add a div element containing an image and text for the "clay" resource */}
        <div>
        {/* Apply the "clayCard" class to the div element containing the clay image */}
        <div className={style.clayCard}/>
        {/* Add a div element with the "puck" class applied, containing the clay count from the props object */}
        <div className={style.puck}>
            {props.clay}
        </div>
        </div>
        {/* Add a div element containing an image and text for the "wheat" resource */}
        <div>
        {/* Apply the "wheatCard" class to the div element containing the wheat image */}
        <div className={style.wheatCard}/>
        {/* Add a div element with the "puck" class applied, containing the wheat count from the props object */}
        <div className={style.puck}>
            {props.wheat}
        </div>
        </div>
        {/* Add a div element containing an image and text for the "ore" resource */}
        <div>
        {/* Apply the "oreCard" class to the div element containing the ore image */}
        <div className={style.oreCard}/>
        {/* Add a div element with the "puck" class applied, containing the ore count from the props object */}
        <div className={style.puck}>
            {props.wheat}
        </div>
        </div>
        </div>
        </div>
    );
}

export default Resources;