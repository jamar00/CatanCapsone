/*

Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'

const style = {
    topInit : `w-7 h-7 -mx-3.5 mt-8 rounded-full bg-gray-700 z-20`,
    botInit : `w-7 h-7 -mx-3.5 mt-14 rounded-full bg-gray-700 z-20`,
    topSettlement : `w-7 h-7 -mx-3.5 mt-8 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%] z-20`,
    botSettlement : `w-7 h-7 -mx-3.5 mt-14 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_50%_0,_0_25%] z-20`,
    topCity : `w-6 h-6 -mx-3 mt-8 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_75%_0,_50%_25%,_50%_50%,_0_50%] z-20`,
    botCity : `w-6 h-6 -mx-3 mt-14 bg-gray-700 clip-path-polygon-[0_100%,_100%_100%,_100%_25%,_75%_0,_50%_25%,_50%_50%,_0_50%] z-20`
}

// Define a function that returns the appropriate style class
// for an intersection based on the "prop" and "val" properties
function getStyle(prop, val){
  switch(prop){
  // If the "prop" property is 1, use the "val" property to determine the style class
  case(1):
  switch(val){
    case(0):return style.botInit;
    case(1):return style.botSettlement;
    default:return style.botCity;
  }
  // If the "prop" property is none of the above, use the "val" property to determine the style class
  default:
  switch(val){
    case(0):return style.topInit;
    case(1):return style.topSettlement;
    default:return style.topCity;
    }
  }
}

// Define an Intersection component that takes a "h" property as an input
function Intersection(props) {
  const [counter, setCounter] = useState(0);
 
  // Define a function that increases the counter by 1 if it is less than 3
  const increase = () => {
    if(counter<3){
    setCounter(count => count + 1);
    }
  };
    // Use the useState hook to initialize a boolean flag with a value of false
    const [hasDropped, setHasDropped] = useState(false)
  // Use the useDrop hook provided by react-dnd to create a drop target for draggable divs
  const [, drop] = useDrop(
  () => ({
    // Only divs with the type PIECE can be dropped on this target
    accept: ItemTypes.PIECE,
    // When a div is dropped on this target, increase the counter by 1 and set the flag to true
    drop() {
        increase();
        setHasDropped(true);
    },
    /*
     * A method built in to react-dnd, collects mouse event data relating to the source div
     * @param monitor the object used to monitor mouse data and interactions
     */
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }),
  //all of this occurs when useDrop occurs when setHasDropped is called
  [setHasDropped]
);
    /*
     * Prints a message when a div is dropped
     */
    useEffect(() => {
      if (hasDropped) {
        console.log("do stuff once a piece has been dragged in");
      }
  }, [hasDropped])
    //returns a div with the style defined by the getStyle function, when passed
    //the counter variable. Sets the div to be a target for drag and drop
    return(<div className={getStyle(props.h,counter)} ref={drop}/>)
  }

export default Intersection;