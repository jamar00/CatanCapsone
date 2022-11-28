import React from 'react'
import GoogleButton from 'react-google-button'

import {auth} from '../../firebase'
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth'


const style = {
    wrapper: `flex justify-center`
}

const googleSignIn = () => {
    const provider = new GoogleAuthProvider()
    signInWithRedirect(auth,provider)
}

const SignIn = () => {
    return (
        <div className={style.wrapper}>
            <GoogleButton onClick={console.log("HELLO")}/>        
        </div>
    )
}

export default SignIn