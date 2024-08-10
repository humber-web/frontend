<template>
  <router-link :to="to" :class="{ active: isActive }" class="capitalize">
    <div class="p-2   text-black  hover:bg-black hover:text-white rounded-lg">
      <font-awesome-icon :icon="icon" class="mr-6" />
      {{ to }}
    </div>
  </router-link>

</template>
<script>

export default {
  name: 'SideBarLink',
  props: {
    to: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: 'home'
    }
  },
  computed: {
    isActive() {
      return this.$route.path === this.to;
    }
  }
}

</script>