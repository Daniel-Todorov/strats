<template>
  <div id="app" class="flex">
    <router-view></router-view>
    <notification></notification>
  </div>
</template>

<script>
  import Notification from '@/components/Notification';

  export default {
    name: 'App',
    components: {
      Notification
    }
  }
</script>
