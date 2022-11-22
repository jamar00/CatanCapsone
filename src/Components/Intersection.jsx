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

function Intersection(props) {
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
    // switch(props.dir) {
    //     case 1:
    //         return(
    //         <div className={style.ldRoad} ref={drop}
    //         style={
    //             hasDropped ? 
    //             {backgroundColor:'red'} :
    //             {backgroundColor:'gray-600'}}
    //             />);
    //     case 2:
    //         return(<div className={style.rdRoad} ref={drop}
    //           style={
    //             hasDropped ? 
    //             {backgroundColor:'red'} :
    //             {backgroundColor:'gray-600'}}/>);
    //     default:
    //         return(<div className={style.road} ref={drop}
    //           style={
    //             hasDropped ? 
    //             {backgroundColor:'red'} :
    //             {backgroundColor:'gray-600'}} />)
    // } 
    switch (props.h) {
        case 1 :
            return(<div className={ hasDropped ? 
                            style.botSettlement :
                            style.botInit} ref={drop}/>);
        default : 
        return(<div className={ hasDropped ? 
            style.topSettlement :
            style.topInit} ref={drop}/>);
    }
  }

export default Intersection;