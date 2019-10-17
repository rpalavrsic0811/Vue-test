<template>
  <v-container>
    <v-card>
      <v-card-title>
        <h1>Brands List</h1>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col v-for="(item, i) in beerBrands"
            :key="i"
            cols="12"
            sm="6"
            lg="3"
          >
            <v-card>
              <v-card-title primary-title>
                {{ item.name }}
              </v-card-title>
              <v-card-text>
                {{ item.available_date }}
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn text :to="'/brand/' + item.supplier_id">
                  See Details <v-icon>mdi-arrow-right-bold-hexagon-outline</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    components: {

    },
    data() {
      return {
        brands: [],
      };
    },
    computed: {
      beerBrands() {
        return this.$store.state.beerBrands;
      },
    },
    mounted() {
      this.$store.dispatch('fetchBeerBrands');
    }
  };
</script>
