<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card-title>
        <h1>{{ brandData.name }} </h1>
      </v-card-title>
      <v-card-text>
        <p v-if="brandData.core_or_seasonal === 'core'">
          Core
        </p>
        <p v-else>
          In Season
        </p>
        <h3>Availability</h3>
        <p>{{ brandData.available_date }}</p>

        <h3>State Registrations</h3>
        <p v-for="(item, i) in brandData.state_registrations" :key="i">
          Registrations: {{ item.state }} (RN# {{ item.registrationNumber }})
        </p>

        <h3>Supplier ID</h3>
        <p>{{ brandData.supplier_id }}</p>

        <h3>Entity ID</h3>
        <p>{{ brandData.entity_id }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {

    computed: {
      brandData() {
        return this.$store.state.currentBeerData;
      },
    },
    mounted() {
      this.$store.dispatch('fetchBeerBrands');

    },

  };
</script>

<style lang="scss" scoped>

</style>
