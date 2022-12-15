import React, {useState} from "react";
import {auth, db} from '../../firebase'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const style = {
    form: `h-14 w-full max-w[728px] flex text-xl absolute bottom-0`,
    input: ` rounded rounded-r-none w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
    button: `rounded rounded-l-none w-[20%] bg-green-500`
}

// The SendMessage component defines a form for sending messages in a chat
// application.
const SendMessage = ({scroll}) => {
// Define a state variable for the input field in the form.
const [input,setInput] = useState('')


// Define an inline function that is executed when the form is submitted. The
// function adds the new message to the 'messages' collection in the Firebase
// database.
const sendMessage = async(e) => {
    // Prevent the default form submission behavior.
    e.preventDefault()

    // If the input field is empty, display an error message and return.
    if (input === '') {
        alert('Please enter a valid message')
        return
    }
    // Use the Firebase auth object to get the current user's ID and display
    // name.
    const {uid, displayName} = auth.currentUser

    // Use the addDoc function from the Firebase firestore library to add the new
    // message to the 'messages' collection in the database. Set the text of the
    // message to the value of the input field, and use the current user's ID and
    // display name as the sender of the message. Use the serverTimestamp
    // function to set the timestamp of the message.
    await addDoc(collection(db, 'messages'), {
        text: input,
        displayName,
        uid,
        timestamp: serverTimestamp()
    })
    // Clear the input field and scroll the chat window to the bottom.
    setInput('')
    scroll.current.scrollIntoView({behavior: 'smooth'})
}
    // Render the message form, consisting of an input field and a submit button.
    return (
        // Render a form with a text input field and a submit button
        <form onSubmit={sendMessage} className={style.form}>
            <input 
            // Use the input state to pre-populate the input field
            value={input} 
            // When the input field changes, update the input state with the new value
            onChange={(e) => setInput(e.target.value)} 
            // Apply a CSS class for styling purposes
            className={style.input} 
            // Set the input field to be a text field
            type="text" 
            // Set the placeholder text for the input field
            placeholder='Message' />
            <button className={style.button} type="submit">Send</button>
        </form>
    )
}

export default SendMessage