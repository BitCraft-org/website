import { api } from "@/router/api";
import { defineStore } from "pinia";

export const useChallengesStore = defineStore('challenges', {
    state() {
        let openChallenge: Challenge | undefined;
        let challenges: Challenge[] = [
            {
                id: "eufhdnqoi9",
                title: 'Math Compiler',
                createdAt: '23:45',
                updatedAt: '23:45',
                value: 'hi!',
                categories: ['Compiler', 'DSA']
            },
            {
                id: "njJHsu",
                title: 'Build your own grep',
                createdAt: '23:45',
                updatedAt: '23:45',
                value: 'Build Your Own grep. This challenge is to build your own version of the Unix command line tool grep. The Unix command line tools are a great metaphor for good software engineering and they follow the Unix Philosophies of:',
                categories: ['Low level', 'DSA']
            },
            {
                id: "mxihxuchw9",
                title: 'Build a Shell from scratch upto many',
                createdAt: '23:45',
                updatedAt: '23:45',
                value: 'This challenge is to build your own shell. A shell is a program that exposes the operating system’s services to us, the user of the system. We’re going to focus on the command line versions, like sh, bash, zsh and others.',
                categories: ['Arrays', 'DSA']
            },
            
        ]
        
        return { openChallenge, challenges }
    },

    actions: {
        selectChallege(challengeId: string) {
            const challengeIndex = this.challenges.findIndex(challenge => challenge.id == challengeId)
            if (challengeIndex == undefined) {
                return
            }

            this.openChallenge = this.challenges[challengeIndex]
        },

        async createChallenge(challenge: RawChallenge) {
            try {
                const response = await api.post('/challenge/create', challenge)

                if (response.status == 201) {
                    this.challenges.push(response.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
})

export interface RawChallenge {
    title: string,
    value: string,
    categories: string[]
}

export interface Challenge extends RawChallenge {
    id: string,
    createdAt: string,
    updatedAt: string,
}