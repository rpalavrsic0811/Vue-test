import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

const getAllBrandUrl = "https://private-anon-2615f06602-brewoptixv2.apiary-mock.com/brands";
const getBrandByIdUrl = "https://private-anon-2615f06602-brewoptixv2.apiary-mock.com/brands/";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appName: 'Vue Test',
    menuItems: [
      { title: 'Brand', link: '/' },
      // { title: 'Product', link: '/' },
      { title: 'About', link: '/about' },
    ],
    beerBrands: [],
    currentBeerData: { // mock data
      user_id: '5d26bc028fc6c70caaa8fa7d',
      supplier_id: 'ad51d5ac-17bb-4240-8648-c483b224b2aa',
      name: 'Carlsberg',
      core_or_seasonal: 'core',
      is_active: true,
      has_logo: true,
      abv: 0.75,
      available_date: '2019-10-21',
      state_registrations: [
        { state: 'AL', registrationNumber: '5934JF-6Y' },
        { state: 'NJ', registrationNumber: 'HG89-MW-5QA' },
      ],
      entity_id: 'dbaf41b6-8a50-40d4-b443-14aeb0e6d049',
      version: '245f4a8c-a266-4b13-80d4-a5ae3293df5a',
      changed_on: '2019-07-19T21:47:40Z',
    },
  },
  mutations: {
    SET_BEER_BRANDS(state, payload) {
      state.beerBrands = payload;
    },
    SET_BEER_CURRENT_PAGE(state, payload) {
      state.currentBeerData = payload;
    },
  },
  actions: {
    async fetchBeerBrands({ commit }) {

      try {
        let { data } = await axios.get(getAllBrandUrl);

        if (data.length === 0) {
          throw new Error('No brands fetched');
        }

        commit('SET_BEER_BRANDS', data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }
    },
    async fetchBeerBrandById({ commit }, supplierId) {
      const config = {
        headers: {
          'x-supplier-id': supplierId,
        },
      };

      try {
        let { data } = await axios.get(getBrandByIdUrl, config);

        if (data.length === 0) {
          throw new Error('Unable to fetch Brand Data');
        }

        commit('SET_BEER_CURRENT_PAGE', data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
      }

    },
  },
});
