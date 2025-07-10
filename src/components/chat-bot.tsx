'use client'

import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react";
import {answers} from "../../public/data/random_chatbot_responses.json"
import { useState } from 'react';



export default function ChatBot(){



    const [history, setHistory] = useState<{question:string; thinking_response:string; final_response:string;}[]>([]);
    const [input, setInput] = useState("");
    const [randomAnswer, setAnswer] = useState(Math.floor(Math.random() * answers.length));
    const [randomWait, setWait] = useState(2000 + Math.floor(Math.random() * 3000));
    const [changed, setChanged] = useState(false);

    function submit() {
        setAnswer(Math.floor(Math.random() * answers.length));
        let line = {
            question: input,
            thinking_response: answers[randomAnswer].thinking_response,
            final_response:answers[randomAnswer].final_response
        };

        setHistory([...history, line]);
        setWait(2000 + Math.floor(Math.random() * 3000));
        setInput("");
        setChanged(false);
    }


    console.log(history);
    return(
    <div>
        <ChatMessageList>
            {
                history.map((item, i) => { 
                    let uniqueId = "loading" + `${i}`;
                    let appendId = "append" + `${i}`;
                    if (i === history.length - 1){
                        return(
                            <div key={i}>
                                <ChatBubble variant='sent'>
                                    <ChatBubbleAvatar fallback='US' />
                                    <ChatBubbleMessage variant='sent'>
                                        {item.question}
                                    </ChatBubbleMessage>
                                </ChatBubble>

                                <ChatBubble variant='received'>
                                    <ChatBubbleAvatar fallback='AI' />
                                    <ChatBubbleMessage variant='received'>
                                        {item.thinking_response}
                                    </ChatBubbleMessage>
                                </ChatBubble>

                                <ChatBubble variant='received'  id={appendId}>
                                    <ChatBubbleAvatar fallback='AI'/>
                                    <ChatBubbleMessage isLoading id={uniqueId}/>
                                    {


                                                window.setTimeout(() => {
                                                    let element = document.getElementById(uniqueId);
                                                    let before = document.getElementById(appendId);
                                                    let another = document.createElement('div');
                                                    another.className = "p-4 bg-secondary text-secondary-foreground rounded-r-lg rounded-tl-lg break-words max-w-full whitespace-pre-wrap";
                                                    another.innerText = item.final_response;

                                                    if (!changed){
                                                        before?.replaceChild(another, element!);
                                                        setChanged(true);
                                                    }
                                                }, randomWait)
                                        }
      
                                </ChatBubble>

                            </div> )
                    } else {
                       return(
                            <div key={i}>
                                <ChatBubble variant='sent'>
                                    <ChatBubbleAvatar fallback='US' />
                                    <ChatBubbleMessage variant='sent'>
                                        {item.question}
                                    </ChatBubbleMessage>
                                </ChatBubble>

                                <ChatBubble variant='received'>
                                    <ChatBubbleAvatar fallback='AI' />
                                    <ChatBubbleMessage variant='received'>
                                        {item.thinking_response}
                                    </ChatBubbleMessage>
                                </ChatBubble>

                                <ChatBubble variant='received'>
                                    <ChatBubbleAvatar fallback='AI' />
                                    <ChatBubbleMessage variant='received'>
                                        {item.final_response}
                                    </ChatBubbleMessage>
                                </ChatBubble>

                            </div>)
                    }       

                    
                    
                })
                
            }

        </ChatMessageList>

         <div className="flex-1 flex h-[10vh] justify-evenly items-center absolute bottom-0 right-0 left-0">
            <ChatInput placeholder="Ask a question" className="w-3/4" onChange={e => setInput(e.target.value)} value={input}/>
            <Button onClick={submit} size="sm"><SendHorizontal className="size-1.5" /></Button>
        </div>

    </div>
    ) ;
}




