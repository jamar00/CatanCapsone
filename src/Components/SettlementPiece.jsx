import React from 'react';

const style = {
    settlement : `w-10 h-10 bg-gray-600 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%]`
}

function SettlementPiece() {
    return(
        <div className={style.settlement}>
        </div>
    );
}

export default SettlementPiece;