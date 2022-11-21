import React from 'react';

const style = {
    deck: `h-24 w-auto bg-gray-700 mx-4 mb-6`,
    card :`h-16 w-8 bg-gray-400 border-2 border-black border-style-solid rounded-md -mr-2`
}

function Deck(props) {
    return(
        <div className={style.deck}>
        <div class="bg-gray-300 display-table mb-1">
        Player 1
        </div>
        <div class="ml-1 flex flex-row">
        <div className={style.card}/>
        <div className={style.card}/>
        <div className={style.card}/>
        <div className={style.card}/>
        <div className={style.card}/>
        <div className={style.card}/>
        </div>
        </div>
    );
}

export default Deck;