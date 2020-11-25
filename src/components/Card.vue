<template>
  <v-card outlined class="card">
    <v-img :src="img" height="200px"></v-img>
    <v-card-title class="d-flex justify-space-between">
      <router-link :to="'/product/' + id">{{ title }}</router-link>
      <p class="ma-0">{{ cost }}€</p>
    </v-card-title>
    <v-card-text>{{ text }}</v-card-text>
    <v-card-actions>
      <v-btn depressed @click="add(item)" color="green" class="white--text"
        ><v-icon>mdi-cart-arrow-down</v-icon></v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Card",
  props: {
    id: String,
    item: Object,
    title: String,
    text: String,
    cost: Number,
    img: String,
  },
  methods: {
    ...mapActions({
      add: "cart/addToCart",
    }),
  },
};
</script>

<style>
.card {
  width: 325px;
}
</style>