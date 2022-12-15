/*
A class to define the road piece and drag and drop functionality
Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'
import {useDrag} from 'react-dnd';

const style = {
    road : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-[300deg]`
}

function RoadPiece(){
    // Use the useDrag hook from the react-dnd library to enable drag and drop functionality
    const [, drag] = useDrag(() => ({ 
        // Only divs with the type ROAD can have the source functionality
          type: ItemTypes.ROAD,
          // Collect mouse event data relating to the target div
           end: (item, monitor) => {
             const dropResult = monitor.getDropResult()
             if (item && dropResult) {
               console.log(dropResult);
             }
           },
         })) 
      // Return a div element representing the road piece    
      return(
          <div
          className={style.road}
          // Use the drag reference from the useDrag hook to enable drag and drop functionality
          ref={drag} 
          
          />)   
      }

export default RoadPiece;