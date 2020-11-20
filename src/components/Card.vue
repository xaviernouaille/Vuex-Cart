<template>
  <v-card outlined class="card">
    <v-img src="https://picsum.photos/id/11/500/300"></v-img>
    <v-card-title class="d-flex justify-space-between">
      <router-link :to="'/product/' + id">{{ title }}</router-link>
      <p class="ma-0">{{ cost }}€</p>
    </v-card-title>
    <v-card-text>{{ text }}</v-card-text>
    <v-card-actions>
      <v-btn depressed outlined @click="add(item)">Ajouter au panier</v-btn>
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