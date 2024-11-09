<template>
    <div class="h-full p-2 px-8 overflow-y-auto tiny-scroll">
        <div v-if="openChallenge">
            <div class="mb-10 text-justify">
                {{ openChallenge.value }}
            </div>
            <div class="mb-8">
                <span class="font-bold text-lg">Tags:</span>
                <div class="flex overflow-x-auto space-x-2 mt-1.5">
                    <span v-for="(category, index) in openChallenge.categories" :key="index" class="p-1 border border-gray-500 rounded text-gray-500 font-light text-xs">
                        {{ category }}
                    </span>
                </div>
            </div>
            <div class="flex justify-between">
                <div @click="challengeStore.selectChallege(challengeStore.challenges[currentIndex-1].id)" v-if="currentIndex > 0" class="cursor-pointer flex flex-col items-start space-y-2 rounded border border-gray-600 hover:border-blue-500 p-3 px-5">
                    <span>Prev</span>
                    <div class="flex space-x-2 hover:text-blue-500">
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
                        </svg>
                        <span class="font-bold max-w-28 truncate">{{ challengeStore.challenges[currentIndex-1].title }}</span>
                    </div>
                </div>
                <div v-else></div>

                <div @click="challengeStore.selectChallege(challengeStore.challenges[currentIndex+1].id)" v-if="currentIndex < challengeStore.challenges.length-1" class="cursor-pointer flex flex-col items-end space-y-2 rounded border border-gray-600 hover:border-blue-500 p-3 px-5">
                    <span>Next</span>
                    <div class="flex space-x-2 hover:text-blue-500">
                        <span class="font-bold max-w-28 truncate">{{ challengeStore.challenges[currentIndex+1].title }}</span>
                        <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 16 4-4-4-4m6 8 4-4-4-4"/>
                        </svg>
                    </div>
                </div>
                <div v-else></div>
            </div>
        </div>

        <div v-else class="h-full flex justify-center items-center">
            <div class="flex flex-col items-center space-y-2">
                <span>No challenge opened!</span>
                <span>Select challenge from list to preview</span>
            </div>
        </div>
</div>
</template>

<script setup lang="ts">
    import { useChallengesStore } from '@/store/challengesStore';
    import { watch, ref, computed } from 'vue';

    const challengeStore = useChallengesStore()
    const openChallenge = computed(()=> challengeStore.openChallenge)
    const currentIndex = ref()

    const setCurrentIndex = () => {
        const index = challengeStore.challenges.findIndex(challenge => challenge.id == challengeStore.openChallenge?.id)
        if (index != undefined) {
            currentIndex.value = index
        }
    }

    setCurrentIndex()

    watch(openChallenge, ()=>{
        setCurrentIndex()
    })
</script>