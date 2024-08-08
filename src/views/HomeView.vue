<template>
  <div class="flex h-screen overflow-hidden">
    <SideBar/>
    <div class="flex-1 bg-gray-200 p-4 h-full overflow-auto">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'HomeView',
  components: {
    SideBar
    // HelloWorld
  }
}
</script>
