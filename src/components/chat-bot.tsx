'use client'

import { ChatMessageList } from "@/components/ui/chat/chat-message-list";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
} from "@/components/ui/chat/chat-bubble";
import { ChatInput } from "@/components/ui/chat/chat-input";
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react";

export default function ChatBot(){
    return(
    <div>
        <ChatMessageList className="items-end">
            <ChatBubble variant='sent'>
                <ChatBubbleAvatar fallback='US' />
                <ChatBubbleMessage variant='sent'>
                    Hello, how has your day been? I hope you are doing well.
                </ChatBubbleMessage>
            </ChatBubble>

            <ChatBubble variant='received'>
                <ChatBubbleAvatar fallback='AI' />
                <ChatBubbleMessage variant='received'>
                    Hi, I am doing well, thank you for asking. How can I help you today?
                </ChatBubbleMessage>
            </ChatBubble>
    
            <ChatBubble variant='received'>
                <ChatBubbleAvatar fallback='AI' />
                <ChatBubbleMessage isLoading />
            </ChatBubble>
        </ChatMessageList>

        <div className="flex-1 flex justify-evenly items-center absolute bottom-0 right-0 left-0">
            <ChatInput placeholder="Ask a question" className="w-3/4"/>
            <Button size="sm"><SendHorizontal className="size-1.5" /></Button>
        </div>

    </div>
    ) ;
}


