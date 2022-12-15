import React from 'react';
import {auth} from '../../firebase'

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

// The LogOut component defines a button that, when clicked, logs the user out.
const LogOut = () => {
    // Define an inline function that calls the auth.signOut method when it is
    // executed.
    const signOut = () =>
    signOut(auth)
    // Render the log out button. When the button is clicked, call the signOut
    // function to log the user out.
    return ( 
        <button onClick={() => auth.signOut()} className={style.button}>
            Logout
            </button>
    )
}

export default LogOut