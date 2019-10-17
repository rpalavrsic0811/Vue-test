<template>
  <v-app>
    <TheMenu></TheMenu>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
  import TheMenu from './components/TheMenu';
  export default {
    name: 'App',
    components: {
      TheMenu,
    },
    data: () => ({
    //
    }),
  };
</script>
