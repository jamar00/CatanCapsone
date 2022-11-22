import React from 'react';

const style = {
    container : `h-30 w-auto bg-gray-700 mt-28 mx-4 mb-6 text-gray-200 mt-6`,
    lumberCard :`h-24 w-16 mx-2 bg-green-600 border-2 border-black border-style-solid rounded-md`,
    woolCard: `h-24 w-16 mx-2 bg-gray-200 border-2 border-black border-style-solid rounded-md`,
    clayCard: `h-24 w-16 mx-2 bg-orange-700 border-2 border-black border-style-solid rounded-md`,
    wheatCard: `h-24 w-16 mx-2 bg-yellow-400 border-2 border-black border-style-solid rounded-md`,
    puck : `h-10 w-10 mt-2 font-bold text-gray-700 rounded-full bg-yellow-200 flex items-center justify-center font-mono text-center m-auto`
}

function Resources(props) {
    return(
        <div className={style.container}>
        <div class="bg-gray-300 text-black font-medium">
            Resources
        </div>
        <div class="flex flex-row justify-center">
        <div>
        <div className={style.lumberCard}/>
        <div className={style.puck}/>
        </div>
        <div>
        <div className={style.woolCard}/>
        <div className={style.puck}/>
        </div>
        <div>
        <div className={style.clayCard}/>
        <div className={style.puck}/>
        </div>
        <div>
        <div className={style.wheatCard}/>
        <div className={style.puck}/>
        </div>
        </div>
        </div>
    );
}

export default Resources;