import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
    state() {
        let displayAuth: {state: boolean, target: string} = {state: false, target: 'none'}

        return { displayAuth }
    },

    actions: {
        showLogin(){
            this.displayAuth = {state: true, target: 'login'}
        },

        showSignup() {
            this.displayAuth = {state: true, target: 'signup'}
        },

        hideAuth() {
            this.displayAuth = {state: false, target: 'none'}
        }
    }
})