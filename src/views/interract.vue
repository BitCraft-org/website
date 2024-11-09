<template>
    <section class="chat h-full grid">
        <div class="chat-header border-b dark:border-gray-800 shadow dark:shadow-none">
            <chat_header/>
        </div>
        <section class="messages overflow-y-auto h-full tiny-scroll">
            <ul v-if="interractSore.openChat" class="p-2">
                <li v-for="(message) in interractSore.openChat?.messages" :key="message.id" class="mb-5">
                    <plain_txt v-if="message.type == 'plain'" :value="message.value" :id="message.id" :sender="message.sender" :sent-at="message.sentAt"/>
                    <file :value="message.value" file-type="PDF" :msg-type="message.type" :sender="message.sender" :sent-at="message.sentAt" size="18 MB" blob="Its here" :id="message.id"
                    v-if="message.type == 'file' || message.type == 'file+text'"/>
                </li>
            </ul>
            <div v-else class="h-full flex justify-center items-center">
                <div class="flex flex-col items-center space-y-2">
                    <span>No chat opened!</span>
                    <span>Select chat from list to preview</span>
                </div>
            </div>
        </section>
        <div class="text-area">
            <text_input/>
        </div>
    </section>
</template>

<script setup lang="ts">
    import chat_header from '@/components/interract/chat_header.vue'
    import text_input from '@/components/interract/text_input.vue'
    import plain_txt from '@/components/interract/plain_txt.vue';
    import file from '@/components/interract/file.vue';
    import { useInterractStore } from '@/store/interractSore';

    const interractSore = useInterractStore()

</script>

<style scoped>
.chat-header{
    grid-area: header;
}
.messages{
    grid-area: messages;
}
.text-area {
    grid-area: text-area;
}
.chat {
    grid-template-rows: min-content 1fr auto;
    grid-template-areas: "header" "messages" "text-area";
}

</style>