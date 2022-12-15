import React from 'react'
import SignIn from './SignIn'
import LogOut from './LogOut'
import {auth} from '../../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

const style ={
    nav: ` rounded bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}

// The Navbar component defines a navigation bar for a chat application.
const Navbar = () => {
    // Use the useAuthState hook from the react-firebase-hooks library to check
    // whether the user is logged in.
    const [user] = useAuthState(auth)

    // Log the user object to the console.
    console.log(user)

    // Render the navigation bar, consisting of a heading and a log out button (if
    // the user is logged in) or a sign in form (if the user is not logged in).
    return (
        <div className={style.nav}>
            {/* Render the heading. */}
            <h1 className={style.heading}>CHAT</h1>
            {/* If the user is logged in, render the LogOut component. Otherwise,
                render the SignIn component. */}
            {user ? <LogOut /> : <SignIn/>}

        </div>
        
    );
};

export default Navbar;