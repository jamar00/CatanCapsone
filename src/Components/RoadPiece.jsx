import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import {useDrag} from 'react-dnd';

const style = {
    road : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-300`
}

function RoadPiece(){
    const [, drag] = useDrag(() => ({ 
        //Only divs with the type PIECE can have the source functionality
          type: ItemTypes.ROAD,
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
          className={style.road}
          //sets this div as the source for a target.
          ref={drag} 
          
          />)   
      }

export default RoadPiece;