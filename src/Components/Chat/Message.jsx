/*
A class to define individual message components and functionality
Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React from 'react'
import { auth } from '../../firebase'


const style = {
    message: `flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full`,
  name: `absolute mt-[-4rem] text-gray-600 text-xs`,
  sent: `bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full`,
  received: `bg-[#e5e5ea] text-black float-left rounded-br-full`,
}

// The Message component defines a single chat message.
const Message = ({message}) => {
    // Determine if the message was sent by the currently logged in user.
    const messageClass = 
    message.uid === auth.currentUser.uid
    ? `${style.sent}`
    : `${style.recieved}`

    // Render the message container and its contents.
    return (
        <div>
            <div className={`${style.message} ${messageClass}`}>
                {/* Render the sender's name. */}
                <p className={style.name}>{message.displayName}</p>
                {/* Render the message text. */}
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Message