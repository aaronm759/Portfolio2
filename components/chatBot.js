import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import styles from "../styles/chat.module.css"


const Chat = () => {
    const [responses, setResponses] = useState([]);
    const [currentMessage, setCurrentMessage] = useState("");
    const [view, setView] = useState('none');
    const scrollToBottom = useRef(null);

    const handleMessageSubmit = message => {
        const data = {
            message
        };

        axios
            .post('https://freelance-backend1.herokuapp.com/chatbot', data)
            .then(response => {
                

                const responseData = {
                    text: response.data["message"]["fulfillmentText"] != "" ? response.data["message"]["fulfillmentText"] : "Sorry, I can't get it. Can you please repeat once?",
                    isBot: true
                };

                setResponses(responses => [...responses, responseData]);
                setView('flex')
                
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    };


    const handleMessageChange = event => {
        setCurrentMessage(event.target.value);
    };

    const handleSubmit = event => {
       
        if (event.key === "Enter") {

             const message = {
            text: currentMessage,
            isBot: false
        };
        
            setResponses(responses => [...responses, message]);
            handleMessageSubmit(message.text);
            setCurrentMessage("");
        }

    };

    const displayChat = () => {

        if(view == "none"){
            setView("flex")
        }else{
            setView("none")
        }


    };

    useEffect(() => {
    if (scrollToBottom) {
      scrollToBottom.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

    return (
        <>
        <div style={styles.chatContainer}>
            <div className={styles.chatSection} style={{display: view}}>
                <div className={styles.botContainer}>
               
                    <div className={styles.messagesContainer} ref={scrollToBottom}>
                   
                        {responses.map( (message, index)=>{
                             return (
                                <div className={styles.messageCard} key={index}>
                                    {message.isBot ? (
                                        <div className={styles.botCard}>
                                            <p className={styles.botText}>
                                            {message.text}
                                            </p>
                                        </div>
                                     ) : (
                                        <div className={styles.userCard}>
                                            <p className={styles.userText}                        >
                                            {message.text}
                                            </p>
                                        </div>
                                    )}
                                </div>
                                    );

                            })
                        }
                    </div>
                </div>
                    
                <div className={styles.inputSection}>
                        <textarea
                        type="text"
                        value={currentMessage}
                        onChange={handleMessageChange}
                        onKeyDown={handleSubmit}
                        placeholder="Say something..."
                        className={styles.input}
                        />
                </div>

                 
                
           
           
            </div>
           
            <div className={styles.chatHolder} onClick={displayChat}>
                Chat
            </div>
        </div>
        </>
    );
};

export default Chat;