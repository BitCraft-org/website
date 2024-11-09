<template>
    <div @click="$router.push({name: 'project', params: {id: projectId}})" class="border border-gray-50 dark:border-gray-700 rounded-md overflow-hidden">
        <video :id="projectId" class="w-full h-32">
            <source src="/sample_vid.mp4" type="video/mp4" class="w-full">
            Your browser does not support the video tag.
        </video>
        <div class="p-4 border-t border-gray-700 space-y-2">
            <div class="font-bold text-lg max-w-full truncate">{{ project?.title }}</div>
            <div class="flex space-x-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd"/>
                </svg>
                <span class="max-w-full truncate">{{ project?.owner }}</span>
            </div>
            <div class="flex space-x-2">
                <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M9.166 19.986A.915.915 0 0 1 9 20H5a1 1 0 1 1 0-2h4c.057 0 .112.005.166.014a3.001 3.001 0 0 1 5.668 0A.915.915 0 0 1 15 18h4a1 1 0 1 1 0 2h-4c-.056 0-.112-.005-.166-.014a3.001 3.001 0 0 1-5.668 0ZM11 19a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" clip-rule="evenodd"/>
                    <path d="M11.5 2.131a1 1 0 0 1 1 0l4.601 2.657c-.06.018-.12.044-.179.075L12.08 7.475 6.946 4.76 11.5 2.131ZM5.967 6.505v5.21a1 1 0 0 0 .5.866l4.57 2.638V9.186l-5.07-2.681Zm7.07 8.671 4.496-2.595a1 1 0 0 0 .5-.866v-5.2a1 1 0 0 1-.161.108l-4.835 2.608v5.945Z"/>
                </svg>
                <span class="max-w-full truncate">{{ project?.topic }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useShowcaseStore, Project } from '@/store/showcaseStore';
    import { onMounted, ref, Ref } from 'vue';

    const showcaseStore = useShowcaseStore()
    const props = defineProps<{projectId: string}>()
    const project: Ref<undefined> | Ref<Project> = ref()

    onMounted(()=> {
        const thisProject = showcaseStore.projects.find(project => project.id == props.projectId)

        if (thisProject != undefined) {
            project.value = thisProject
        }
    })

</script>