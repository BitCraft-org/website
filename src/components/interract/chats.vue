<template>
    <div class="h-full">
        <ul v-if="interractSore.chats.length > 0" class="p-2 space-x-2">
            <li @click="interractSore.openAChat(chat.id)" v-for="(chat) in interractSore.chats" :key="chat.id" class="flex cursor-pointer space-x-2 p-3 bg-slate-800 rounded w-full">
                <div class="flex justify-center items-center font-semibold rounded-full h-11 w-11 bg-purple-700">
                    AD
                </div>
                <div class="w-[78%] flex flex-col items-start space-y-2">
                    <span class="font-bold text-md truncate max-w-full">{{ chat.title }}</span>
                    <span class="font-light text-xs text-slate-500 truncate max-w-full">{{ chat.messages[chat.messages.length-1].value ? chat.messages[chat.messages.length-1].value : chat.messages[chat.messages.length-1].blob}}</span>
                </div>
            </li>
        </ul>

        <div v-else class="h-full flex items-center justify-center">
            <div class="flex flex-col items-center">
                <span>No chats yet!</span>
                <span class="text-blue-500 cursor-pointer">Start chat?</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { useInterractStore } from '@/store/interractSore';

    const interractSore = useInterractStore()

</script>