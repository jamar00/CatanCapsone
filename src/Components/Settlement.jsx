import React from 'react';

const style = {
    topInit : `w-7 h-7 -mx-3.5 mt-8 rounded-full bg-gray-700 z-20`,
    botInit : `w-7 h-7 -mx-3.5 mt-14 rounded-full bg-gray-700 z-20`,
    topSettlement : `w-7 h-7 -mx-3.5 mt-8 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%] z-20`,
    botSettlement : `w-7 h-7 -mx-3.5 mt-14 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%] z-20`,
    topCity : `w-6 h-6 -mx-3 mt-8 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_75%_0,_50%_25%,_50%_50%,_0_50%] z-20`,
    botCity : `w-6 h-6 -mx-3 mt-14 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_75%_0,_50%_25%,_50%_50%,_0_50%] z-20`
}

function Settlement(props) {
    
    switch (props.h) {
        case 1 :
            return(
            <div className={style.botInit}>
            </div>
        );
        default : 
        return(
            <div className={style.topInit}>
            </div>
        );
    }
  }

export default Settlement;