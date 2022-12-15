import React from 'react';
import RoadPiece from './RoadPiece';
import SettlementPiece from './SettlementPiece';
import CityPiece from './CityPiece';

const style = {
    container : `h-24 w-auto bg-gray-700 mx-4 mt-6`,
}

function Pieces(props) {
    // Return a div element containing other elements
    return(
        // Apply the "container" class to the outer div element
        <div className={style.container}>
            {/*Add a div element with the "bg-gray-300 font-medium" classes applied*/}
            <div class="bg-gray-300 font-medium">
            Pieces    
            </div>
            {/*Add a div element with the "flex flex-row h-28 ml-6 -mt-5" classes applied */}
            <div class="flex flex-row h-28 ml-6 -mt-5">
            <RoadPiece/>
            {/* // Add a div element with the "mt-8 ml-8" classes applied */}
            <div class="mt-8 ml-8">
            {/* Render the SettlementPiece component */}
            <SettlementPiece/>                
            </div>
            {/* Add a div element with the "mt-8 ml-8" classes applied */}
            <div class="mt-8 ml-8">
            {/* Render the CityPiece component */}
            <CityPiece/>                
            </div>
            </div>
        </div>
    );
}

export default Pieces;