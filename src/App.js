/*
A class to display the entire GUI on the frontend.
Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React from 'react';
import Hex from './Components/Hex';
import SeaHex from './Components/SeaHex'
import Road from './Components/Road';
import Deck from './Components/Deck';
import Pieces from './Components/Pieces'
import Intersection from './Components/Intersection'
import RoadPiece from './Components/RoadPiece';
import Resources from './Components/Resources';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ChatBox from './Components/Chat/ChatBox';
import {io} from 'socket.io-client';
import EndButton from './Components/EndButton';

const style = {
  appContainer : `w-screen flex flex-row`,
  sideCol : `w-1/4 bg-gray-500`,
  midCol : `w-1/2 grid justify-items-center bg-blue-600`,
  topRow : `flex flex-row mb-7 display inline-flex`,
  titleCard : `h-16 w-auto mx-4 my-8 bg-yellow-300 border-black border-2 rounded-md text-xl bg-yellow-200 flex items-center justify-center font-mono text-center`,
  row : `flex flex-row mb-7 -mt-14 display inline-flex`,
  board : `grid justify-items-center`,
  roadRow : `flex flex-row h-28 display inline-flex -my-24`,
}

function App() {
  return (
    // Use the DndProvider component from the react-dnd library to enable drag and drop functionality
    <DndProvider backend={HTML5Backend}>
    <div className={style.appContainer}>
    <div className={style.sideCol}>
    {/* Display the ChatBox component */}
    <ChatBox/>
    </div>
    <div className={style.midCol}>
    <div className={style.titleCard}>
      <div class="mx-16 text-2xl font-bold">
      Settlers of Catan
      </div>
    </div>
    <div className={style.board}>
    <div className={style.topRow}>
    {/* Display top row of SeaHex components */}
    <SeaHex text="3 Wood : 1 Wool"/>
    <SeaHex/>
    <SeaHex/>
    <SeaHex/>
    </div>

    <div className={style.roadRow}>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex id={12} r={'lumber'}/>
    <Road/>
    <Hex id={6} r={'wool'}/>
    <Road/>
    <Hex id={5} r={'wheat'}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex r={'clay'}/>
    <Road/>
    <Hex r={'ore'}/>
    <Road/>
    <Hex r={'clay'}/>
    <Road/>
    <Hex r={'wool'}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex r={'desert'}/>
    <Road/>
    <Hex r={'lumber'}/>
    <Road/>
    <Hex r={'wheat'}/>
    <Road/>
    <Hex r={'lumber'}/>
    <Road/>
    <Hex r={'wheat'}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex r={'clay'}/>
    <Road/>
    <Hex r={'wool'}/>
    <Road/>
    <Hex r={'wool'}/>
    <Road/>
    <Hex r={'ore'}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex r={'ore'}/>
    <Road/>
    <Hex r={'wheat'}/>
    <Road/>
    <Hex r={'lumber'}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    <Road dir={1}/>
    <Intersection h={1}/>
    <Road dir={2}/>
    <Intersection/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <SeaHex/>
    <SeaHex/>
    <SeaHex/>
    </div>
    <div class="h-5 w-1/2 bg-blue-600 display "></div>
    </div>
    </div>
    <div className={style.sideCol}>
    CARDS AND PIECES
    <Deck dCards={'X'}/>
    <Pieces/>
    <Resources lumber={'X'} wool={'X'} wheat={'X'} clay={'X'}/>
    <EndButton/>
    </div> 
    
    </div>
    </DndProvider>
  );
}

export default App;