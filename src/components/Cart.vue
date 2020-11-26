<template>
  <section class="cart pa-8 rounded-lg">
    <section v-if="items.length > 0">
      <div class="mb-6" v-for="item in items" :key="item.id">
        <div class="d-flex justify-space-between align-center">
          <div class="d-flex">
            <router-link :to="'/product/' + item.id">{{
              item.title
            }}</router-link>
            <p class="ml-4 mb-0" v-if="item.qty">x{{ item.qty }}</p>
          </div>
          <p class="mb-0">{{ item.cost * item.qty }}€</p>
        </div>
        <div class="d-flex justify-space-between mt-2">
          <v-btn small @click="add(item)" color="green" class="white--text"
            >+</v-btn
          >
          <v-btn small depressed v-if="item.qty > 1" @click="decrementQty(item)"
            >-</v-btn
          >

          <v-btn small depressed @click="remove(item)" class="grey--text"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </div>
      </div>
      <v-divider class="mb-5"></v-divider>
      <div class="d-flex justify-space-between align-center">
        <p class="ma-0">
          Total : <strong>{{ totalCost }}€</strong>
        </p>
        <v-btn small color="purple" outlined to="/checkout">Check-out</v-btn>
      </div>
    </section>

    <section v-else>
      <div>
        <p class="mb-0">Aucun article dans votre panier</p>
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      items: (state) => state.cart.items,
    }),
    ...mapGetters({
      totalCost: "cart/totalCost",
    }),
  },
  methods: {
    ...mapActions({
      add: "cart/addToCart",
      decrementQty: "cart/decrementQty",
      remove: "cart/removeToCart",
    }),
  },
};
</script>

<style>
.cart {
  width: 320px;
  border-radius: 10px;
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #eeeeee !important;
  background-color: white;
}
</style>