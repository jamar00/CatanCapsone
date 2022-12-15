/*
A class to define the login button and login and authentication functionality
Author(s): Jonathan Amar
Version: 15 December 2022
Catan Capstone Project
*/

import React from 'react'
import GoogleButton from 'react-google-button'
import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const style = {
    wrapper: `flex justify-center`
}

// Function to handle Google sign-in
const googleSignIn = () => {
    // Create a new GoogleAuthProvider instance
    const provider = new GoogleAuthProvider()
    // Sign in using the provider and the redirect method
    signInWithRedirect(auth,provider)
}

// React component that renders a Google sign-in button
const SignIn = () => {
    // Render the button and attach the googleSignIn function to the onClick event
    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={googleSignIn}/>        
        </div>
    )
}

export default SignIn