<template>
    <form class="px-2 pb-2">
        <label for="chat" class="sr-only">Your message</label>
        <div @click="focusInput" class="flex w-[90%] mx-auto items-start px-3 py-2 rounded-lg bg-white  border border-gray-300 dark:bg-gray-800 dark:border-gray-600">
            <button type="button" class="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                        <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                    </svg>
                <span class="sr-only">Attach File</span>
            </button>
            
            <textarea @input="setLineBreakCount" id="chat" :rows="textAreaRows" class="block mx-4 p-2.5 w-full scrollbar-none text-sm text-gray-900 dark:placeholder-gray-400 dark:text-white bg-transparent focus:outline-none" placeholder="Your message..."></textarea>
            <div id="mirror" aria-hidden="true" style="white-space: pre-wrap; visibility: hidden; position: absolute; top: 0; left: -9999px;"></div>
            <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                <svg class="w-5 h-5 rotate-90 rtl:-rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z"/>
                </svg>
                <span class="sr-only">Send message</span>
            </button>
        </div>
    </form>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

    const textAreaRows = ref(1)

    const focusInput = ()=> {
        const target = document.querySelector('#chat') as HTMLInputElement
        target!.focus()
    }

    const setLineBreakCount = () => {
        const textarea = document.getElementById("chat") as HTMLInputElement
        const mirror = document.getElementById("mirror");

        const textareaStyles = window.getComputedStyle(textarea);
        const lineHeight = parseInt(textareaStyles.lineHeight);

        // Copy relevant styles to the mirror for accurate measurement
        mirror!.style.width = textareaStyles.width;
        mirror!.style.font = textareaStyles.font;
        mirror!.style.padding = textareaStyles.padding;
        mirror!.style.border = textareaStyles.border;
        mirror!.style.whiteSpace = "pre-wrap";
        mirror!.style.wordWrap = "break-word";

        // Copy the textarea content into the mirror element
        mirror!.textContent = textarea.value + '\u200b';  // Zero-width space to force line height

        // Calculate the number of lines by dividing mirror height by line height
        let lineCount = Math.floor(mirror!.offsetHeight / lineHeight);

        if (lineCount-1 > 4) {
            return
        }
        textAreaRows.value = lineCount-1;
    }
</script>