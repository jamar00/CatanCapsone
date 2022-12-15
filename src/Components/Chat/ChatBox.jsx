import React from 'react'
import Navbar from './Navbar'
import Chat from './Chat'

import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style = {
    appContainer: `max-w-[728px] mx-1 text-center`,
    sectionContainer: `flex flex-col h-[90vh] overflow-hidden bg-gray-100 mt-10 shadow-xl border relative`
}

// The ChatBox component defines a chat window that consists of a navigation bar
// and a chat window.
function ChatBox() {
  // Use the useAuthState hook from the react-firebase-hooks library to check
  // whether the user is logged in.
  const [user] = useAuthState(auth)

  // Log the user object to the console.
  console.log(user)

  // Render the chat window, consisting of a navbar and a chat window. If the
  // user is logged in, render the Chat component. Otherwise, render nothing.
  return (
    <div className={style.appContainer}>
      <section className={style.sectionContainer}>
      {/* Render the Navbar component. */}
      <Navbar/>
      {/* If the user is logged in, render the Chat component. Otherwise, render
          nothing. */}
      {user ? <Chat /> : null}
      </section>
    </div>
  );
}

export default ChatBox;
