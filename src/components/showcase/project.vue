<template>
    <div class="h-full overflow-y-auto tiny-scroll">
        <div @click="backward" class="flex space-x-1 cursor-pointer">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m17 16-4-4 4-4m-6 8-4-4 4-4"/>
            </svg>
            <span class="font-bold">Back</span>
        </div>
        <div class="  h-[28rem] overflow-hidden">
            <video :id="loadedProject?.id" class="h-full w-full mt-3 rounded-md overflow-hidden object-fill" controls>
                <source src="/sample_vid.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
        <div class="mt-8">
            {{ loadedProject?.value }}
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useShowcaseStore } from '@/store/showcaseStore';
    import { computed } from 'vue';
    import { useRouter } from 'vue-router';

    const showcaseStore = useShowcaseStore()
    const router = useRouter()
    const loadedProject = computed(() => showcaseStore.openProject)

    const backward = ()=> {
        router.back()
        showcaseStore.offloadProject()
    }
</script>