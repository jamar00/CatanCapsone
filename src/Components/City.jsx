import React from 'react';

const style = {
    city : `w-10 h-10 bg-gray-600 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_75%_0,_50%_25%,_50%_50%,_0_50%]
    `,
}

function City(props) {
    return(
        <div className={style.city}>
        </div>
    );
}

export default City;