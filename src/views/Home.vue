<template>
  <div class="flex flex-col w-full">
    <main-header></main-header>
    <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import MainHeader from '@/components/Header';
  import MainFooter from '@/components/Footer';

  export default {
    name: "Home",
    components: {
      MainHeader,
      MainFooter
    }
  }
</script>
