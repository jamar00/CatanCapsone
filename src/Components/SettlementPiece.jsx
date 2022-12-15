import React from 'react';
import { ItemTypes } from '../Constants';
import {useDrag} from 'react-dnd';

const style = {
    settlement : `w-10 h-10 bg-gray-600 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%]`
}

function SettlementPiece() {
    // Use the useDrag hook from the react-dnd library to enable drag and drop functionality
    const [, drag] = useDrag(() => ({ 
        // Only divs with the type PIECE can have the source functionality
          type: ItemTypes.PIECE,
          // Collect mouse event data relating to the target div
           end: (item, monitor) => {
             const dropResult = monitor.getDropResult()
             if (item && dropResult) {
               console.log(dropResult);
             }
           },
         }))

      // Return a div element representing the settlement piece
      return(
          <div
          className={style.settlement}
          // Use the drag reference from the useDrag hook to enable drag and drop functionality
          ref={drag} 
          
          />)   
      }

export default SettlementPiece;