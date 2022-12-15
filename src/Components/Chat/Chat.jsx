import React, {useState, useEffect, useRef} from "react";
import Message from './Message'
import SendMessage from "./SendMessage";
import {db} from '../../firebase'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore'


const style = {
    main: ` rounded relative pb-14 flex flex-col-reverse overflow-auto p-[10px] max-h[200px] max-w[400px] padding-bottom-16`
}

// The Chat component defines a chat window that renders a list of messages and
// a form for sending new messages.
const Chat = () => {
    // Define a state variable to store the list of messages in the chat window.
    const [messages, setMessages] = useState([])

    // Use the useRef hook to create a reference to an HTML element that will be
    // used to scroll to the bottom of the list of messages when they are updated.
    const scroll = useRef();
    const messagesEndRef=useRef(null);

    // Use the useEffect hook to fetch and update the list of messages when the
    // component is rendered.
    useEffect(()=> {
        // Use the Firebase/Firestore API to query the 'messages' collection, sorting
        // the results by the 'timestamp' field in ascending order.
        const q = query(collection(db, 'messages'), orderBy('timestamp'))

        // Subscribe to updates on the query, and call the provided callback function
        // whenever the query snapshot is updated.
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            // Initialize an empty array to store the messages.
            let messages = []

            // Iterate over each document in the query snapshot and add it to the array
            // of messages.
            querySnapshot.forEach((doc) => {
                messages.unshift({...doc.data(), id: doc.id});
        });

        // Update the state variable with the new array of messages.
        setMessages(messages);
    });

    // Return an unsubscribe function that can be called to stop listening for
    // updates on the query.
    return () => unsubscribe();
    },[]);

    // Use the useEffect hook to scroll to the bottom of the list of messages when
    // they are updated.
    useEffect(()=> {
        // If the reference to the HTML element exists, call the scrollIntoView
        // method on the element to scroll to it.
        messagesEndRef.current?.scrollIntoView();
    },[messages]);

    // Render the chat window, consisting of a list of messages and a form for
    // sending new messages.
    return (
        <>
        <main className={style.main}>
             {/* Map over the list of messages and render a Message component for each one. */}
            {messages && messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
        
        {/* Chat Message Component */}
        </main>
        {/* Create a hidden HTML element that will be used to scroll to the bottom
             of the list of messages when they are updated. */}
        <div ref={messagesEndRef}/>
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
        
        </>
    )
}

export default Chat