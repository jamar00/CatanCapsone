import React from 'react';
import { ItemTypes } from '../Constants';
import {useDrag} from 'react-dnd';

const style = {
    settlement : `w-10 h-10 bg-gray-600 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%]`
}

function SettlementPiece() {
    const [, drag] = useDrag(() => ({ 
        //Only divs with the type PIECE can have the source functionality
          type: ItemTypes.PIECE,
          /*
           * A method built in to react-dnd, collects mouse event data relating to the target div,
           * @param item the target div, automatically passed via react-dnd builtin functionality
           * @param monitor the object used to monitor mouse data and interactions
           */
           end: (item, monitor) => {
             const dropResult = monitor.getDropResult()
             if (item && dropResult) {
               console.log(dropResult);
             }
           },
         }))     
      return(
          <div
          className={style.settlement}
          //sets this div as the source for a target.
          ref={drag} 
          
          />)   
      }

export default SettlementPiece;