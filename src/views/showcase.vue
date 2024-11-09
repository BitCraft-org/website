<template>
    <div class="h-full overflow-y-auto tiny-scroll p-2">
        <ul v-if="!showcaseStore.openProject" class="grid gap-3 grid-cols-3">
            <li @click="showcaseStore.loadProject(project.id)" v-for="(project) in showcaseStore.projects" :key="project.id">
                <displayCard :project-id="project.id"/>
            </li>
        </ul>
        <div v-else class="p-2 px-8 text-justify">
            <RouterView/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import displayCard from '@/components/showcase/display_card.vue'
    import { useShowcaseStore } from '@/store/showcaseStore'

    const showcaseStore = useShowcaseStore()
</script>