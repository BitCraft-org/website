<template>
  <div class="app h-screen grid dark:text-white text-slate-900 bg-slate-200 dark:bg-slate-900 overflow-hidden">
    <!-- Overlay -->
    <div v-if="indexStore.displayAuth.state" class="fixed z-50 top-0 bottom-0 w-full bg-black bg-opacity-75 flex justify-center items-center">
        <div @click="indexStore.hideAuth" class="cursor-pointer absolute top-4 w-12 h-12 bg-slate-400 bg-opacity-35 rounded-full flex items-center justify-center">
          <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
          </svg>
        </div>
        <div v-if="indexStore.displayAuth.target == 'login'" class="h-min">
          <login/>
        </div>
        <div v-if="indexStore.displayAuth.target == 'signup'" class="h-min">
          <signup/>
        </div>
    </div>

    <!-- header -->
    <div class="header h-full border-b border-slate-50 dark:border-slate-600">
      <header_view/>
    </div>

    <!-- main -->
    <div class="main sm:grid h-full">
      <div class="menu h-full w-64 bg-slate-300 dark:bg-slate-800">
        <menu_view/>
      </div>
      <div class="body h-full tiny-scroll overflow-y-auto">
        <router-view></router-view>
      </div>

      <!-- Right section -->
      <div class="summary border-l border-gray-800">

        <!-- Chats; When interract page is routed to -->
        <div v-if="$route.name == 'interract'" class="h-full overflow-y-auto scrollbar-none">
          <chats/>
        </div>

        <div v-else-if="$route.name == 'challenges'" class="h-full overflow-y-auto tiny-scroll">
          <challenges/>
        </div>

        <!-- App summary for other pages -->
        <div v-else class="h-full">
          In App summary
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import header_view from './components/header_view.vue';
  import menu_view from './components/menu_view.vue'
  import login from './components/login.vue';
  import signup from './components/signup.vue';
  import chats from './components/interract/chats.vue';
  import challenges from './components/challenges/tiles.vue';
  import { useIndexStore } from './store/index'

  const indexStore = useIndexStore()
</script>

<style>
.tiny-scroll{
  @apply scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent
}

.app{
  grid-template-columns: 100%;
  grid-template-rows: 10% 90%;
  grid-template-areas: "header" "main";
}  

.header {
  grid-area: header;
}

@media (min-width: 640px) {
  .main {
    grid-area: main;
    grid-template-columns: 18.77% 60% 21.23%;
    grid-template-areas: "menu-bar body-area summary";
  }
  .menu {
    grid-area: menu-bar;
  }
  .body {
    grid-area: body-area;
  }
  .summary {
    grid-area: summary;
  }
}

@media (max-width: 639px) {
  .main {
    grid-area: main;
  }
}
</style>