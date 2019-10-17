<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase mr-5">
        <span>{{ $store.state.appName }}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <v-btn v-for="(item, i) in $store.state.menuItems"
          :key="i"
          class="ml-5"
          :to="item.link"
          text
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-btn class="hidden-md-and-up" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in $store.state.menuItems"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
      };
    },

  };
</script>

<style lang="scss" scoped>

</style>
