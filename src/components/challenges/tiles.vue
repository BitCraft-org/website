<template>
    <div class="h-full">
        <ul v-if="challengeStore.challenges.length > 0" class="p-2 space-y-2">
            <li @click="challengeStore.selectChallege(challenge.id)" v-for="(challenge) in challengeStore.challenges" :key="challenge.id" class="flex cursor-pointer space-x-2 p-2 bg-slate-800 rounded w-full">
                <div class="w-full flex flex-col items-start">
                    <span class="font-bold text-md max-w-full truncate">{{ challenge?.title }}</span>
                    <div class="flex overflow-x-auto space-x-2 mt-1.5">
                        <span v-for="(category, index) in challenge?.categories" :key="index" class="p-1 border border-gray-500 rounded text-gray-500 font-light text-xs">
                            {{ category }}
                        </span>
                    </div>
                </div>
            </li>
        </ul>

        <div v-else class="h-full flex items-center justify-center">
            <span>No challenges yet!</span>
        </div>
    </div>
    
</template>

<script lang="ts" setup>
    import { useChallengesStore } from '@/store/challengesStore'

    const challengeStore = useChallengesStore()
</script>