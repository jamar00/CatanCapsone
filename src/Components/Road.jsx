import React, { useEffect } from 'react';
import { useState } from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../Constants'

const style = {
    road : `h-15 w-3 bg-gray-600 my-6 -mx-1.5 z-10 <hover:bg-gray-700></hover:bg-gray-700>`,
    redRoad : `h-15 w-3 bg-red-600 my-6 -mx-1.5 z-10`,
    rdRoad : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-45`,
    ldRoad : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-45`
}

function Road(props) {
    const [hasDropped, setHasDropped] = useState(false)
    /*
     * A custom hook for react-dnd, uses a lambda to handle mouse events
     */
  const [, drop] = useDrop(
  () => ({
    //Only divs with the type PIECE can have the target functionality
    accept: ItemTypes.ROAD,
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
    switch(props.dir) {
        case 1:
            return(
            <div className={style.ldRoad} ref={drop}
            style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}}
                />);
        case 2:
            return(<div className={style.rdRoad} ref={drop}
              style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}}/>);
        default:
            return(<div className={style.road} ref={drop}
              style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}} />)
    }
}

export default Road;