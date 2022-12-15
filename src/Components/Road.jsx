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
    road : `h-15 w-3 bg-gray-600 my-6 -mx-1.5 z-10 <hover:bg-gray-700></hover:bg-gray-700>`,
    rdRoad : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-[60deg]`,
    ldRoad : `h-15 w-3 bg-gray-600 my-7 mx-[18px] z-10 rotate-[300deg]`
}

function Road(props) {
    // Use the useState hook to track the state of the hasDropped variable
    const [hasDropped, setHasDropped] = useState(false)
    // Use the useDrop hook from the react-dnd library to enable drag and drop functionality
  const [, drop] = useDrop(
  // Define an object with the configuration for the useDrop hook
  () => ({
    // Only divs with the type ROAD can have the target functionality
    accept: ItemTypes.ROAD,
    // Upon a drop, set the hasDropped variable to true
    drop() {
        setHasDropped(true);
    },
    // Collect mouse event data relating to the source div
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }),
  // Pass the setHasDropped function as a dependency for useDrop
  [setHasDropped]
);
    
    // Use the useEffect hook to log a message to the console when a road piece is dropped on the road div
    useEffect(() => {
      if (hasDropped) {
        console.log("do stuff once a piece has been dragged in");
      }
  }, [hasDropped])
    // Use a switch statement to render a different div element depending on the value of the dir property from the props object
    switch(props.dir) {
        case 1:
            return(
            <div className={style.ldRoad} 
            // Use the drop reference from the useDrop hook to enable drag and drop functionality
            ref={drop}
            // Use inline styles to set the background color of the div based on the value of the hasDropped variable
            style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}}
                />);
        case 2:
            return(<div className={style.rdRoad} ref={drop}
              // Use inline styles to set the background color of the div based on the value of the hasDropped variable
              style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}}/>);
        default:
            return(<div 
              className={style.road} 
              // Use the drop reference from the useDrop hook to enable drag and drop functionality
              ref={drop}
              // Use inline styles to set the background color of the div based on the value of the hasDropped variable
              style={
                hasDropped ? 
                {backgroundColor:'red'} :
                {backgroundColor:'gray-600'}} />)
    }
}

export default Road;