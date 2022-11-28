import React, {useState, useEffect, useRef} from "react";
import Message from './Message'
import SendMessage from "./SendMessage";
import {db} from '../../firebase'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore'


const style = {
    main: ` relative pb-14 flex flex-col overflow-auto p-[10px] max-h[200px] max-w[400px] padding-bottom-16`
}


const Chat = () => {
    const [messages, setMessages] = useState([])
    const scroll = useRef();

    useEffect(()=> {
        const q = query(collection(db, 'messages'), orderBy('timestamp'))
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let messages = []
            querySnapshot.forEach((doc) => {
                messages.push({...doc.data(), id: doc.id});
        });
        setMessages(messages);
    });
    return () => unsubscribe();
    },[]);

    return (
        <>
        <main className={style.main}>

            {messages && messages.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
        {/* Chat Message Component */}
        </main>
        {/* Send Message Component */}
        <SendMessage scroll={scroll}/>
        <span ref={scroll}></span>
        </>
    )
}

export default Chat