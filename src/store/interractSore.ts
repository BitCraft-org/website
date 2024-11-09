import { api } from "@/router/api"
import { defineStore } from "pinia"

export const useInterractStore = defineStore('interract', {
    state() {
        let openChat: Chat | undefined
        let chats: Chat[] = [
            {
                id: 'et3er23r4d2312dwfs',
                title: 'Aine Dixon',
                messages: [
                    {
                        id: 'x34fj-349eo3',
                        type: 'plain',
                        value: 'Hello there, good morning!',
                        sender: 'Aine Dixon',
                        sentAt: '23:43',
                        receiver: 'Admin'
                    },
                    {
                        id: 'dniuuhz2983',
                        type: 'file',
                        sender: 'Aine Dixon',
                        sentAt: '23:44',
                        receiver: 'Admin',
                        blob: "Microprocessor based sys design is another source of data"
                    },
                ]
            }
        ]

        return {openChat, chats}
    },

    actions: {
        async sendMessage(message: RawMessage, parentChat: string){
            try {
                const response = await api.post('/message/send', message)

                if (response.status == 201) {
                    const parentIndex = this.chats.findIndex(chat => chat.id == parentChat)

                    if (parent != undefined) {
                        this.chats[parentIndex].messages.push(response.data)
                    }
                }
            } catch (error) {
                console.log(error)
            }
        },

        openAChat(chatId: string) {
            const chatIndex = this.chats.findIndex(chat => chat.id = chatId)

            if (chatIndex != undefined) {
                this.openChat = this.chats[chatIndex]
            }
        }
    }
})

export interface Chat {
    id: string
    title: string,
    messages: Message[]
}

export interface RawMessage {
    type: 'file' | 'plain' | 'file+text',
    sender: string,
    receiver: string,
    value?: string,
    blob?: string
}

export interface Message extends RawMessage {
    id: string,
    sentAt: string,
    updatedAt?: string
}