<template>
    <div class="h-full overflow-y-auto p-2 tiny-scroll">
        <ul class="space-y-2">
            <li v-for="(item, index) in feeds" :key="index">
                <feed :item="item"/>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import feed from '@/components/feed.vue';

    const feeds = [
        {
            title: "Intoduction to Asssembly", createdAt: "Nov 7",
            commentsCount: 32, reactionCount: 213, readLength: '8 min'
        },
        {
            title: "Why Asssembly programming is known to few", createdAt: "Nov 7",
            commentsCount: 32, reactionCount: 213, readLength: '8 min',
            coverPhoto: '/Assembly-language.webp'
        },
        {
            title: "Why Asssembly programming is known to few", createdAt: "Nov 7",
            commentsCount: 32, reactionCount: 213, readLength: '8 min',
            coverPhoto: '/Assembly-language.webp'
        }
    ]
</script>
