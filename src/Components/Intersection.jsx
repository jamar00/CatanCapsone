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

function getStyle(prop, val){
  switch(prop){
  case(1):
  switch(val){
    case(0):return style.botInit;
    case(1):return style.botSettlement;
    default:return style.botCity;
  }
  default:
  switch(val){
    case(0):return style.topInit;
    case(1):return style.topSettlement;
    default:return style.topCity;
    }
  }
}

function Intersection(props) {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    if(counter<3){
    setCounter(count => count + 1);
    }
  };
    const [hasDropped, setHasDropped] = useState(false)
    /*
     * A custom hook for react-dnd, uses a lambda to handle mouse events
     */
  const [, drop] = useDrop(
  () => ({
    //Only divs with the type PIECE can have the target functionality
    accept: ItemTypes.PIECE,
    //upon a drop call, set hasDropped to true
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
    return(<div className={getStyle(props.h,counter)} ref={drop}/>)
  }

export default Intersection;