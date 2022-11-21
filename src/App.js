import React from 'react';
import Hex from './Components/Hex';
import SeaHex from './Components/SeaHex'
import Road from './Components/Road';
import Deck from './Components/Deck';
import Pieces from './Components/Pieces'
import Settlement from './Components/Settlement'
import RoadPiece from './Components/RoadPiece';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {io} from 'socket.io-client';

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
    <DndProvider backend={HTML5Backend}>
    <div className={style.appContainer}>
    <div className={style.sideCol}>
      CHAT
    <div class="bg-gray-700 h-auto w-auto m-4 rounded-md">
      HI
    </div>
    <div class="bg-gray-700 h-auto w-auto m-4 rounded-md">
      Hello
    </div>
    </div>
    <div className={style.midCol}>
    <div className={style.titleCard}>
      <div class="mx-16 text-2xl font-bold">
      Settlers of Catan
      </div>
    </div>
    <div className={style.board}>
    <div className={style.topRow}>
    <SeaHex text="3 Wood : 1 Wool"/>
    <SeaHex/>
    <SeaHex/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex id={12}/>
    <Road/>
    <Hex id={6}/>
    <Road/>
    <Hex id={5}/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    </div>
    <div className={style.row}>
    <SeaHex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <Hex/>
    <Road/>
    <SeaHex/>
    </div>
    <div className={style.roadRow}>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
    <Road dir={1}/>
    <Settlement h={1}/>
    <Road dir={2}/>
    <Settlement/>
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
    <Deck/>
    <Pieces/>
    </div> 
    
    </div>
    </DndProvider>
  );
}

export default App;
