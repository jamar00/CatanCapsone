import React from 'react';
import RoadPiece from './RoadPiece';
import SettlementPiece from './SettlementPiece';
import City from './City';

const style = {
    container : `h-24 w-auto bg-gray-700 mx-4`,
}

function Pieces(props) {
    return(
        <div className={style.container}>
            <div class="bg-gray-300">
            Pieces    
            </div>
            <div class="flex flex-row h-28 ml-6 -mt-5">
            <RoadPiece/>
            <div class="mt-8 ml-8">
            <SettlementPiece/>                
            </div>
            <div class="mt-8 ml-8">
            <City/>                
            </div>
            </div>
        </div>
    );
}

export default Pieces;