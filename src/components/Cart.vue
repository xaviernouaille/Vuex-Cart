<template>
  <section class="cart white pa-8">
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
          <v-btn @click="add(item)" color="green" class="white--text">+</v-btn>
        </div>
        <v-divider class="mt-5"></v-divider>
      </div>
      <div class="d-flex justify-space-between align-center">
        <p class="ma-0">Total : {{ totalCost }}€</p>
        <v-btn small color="purple" outlined to="/checkout">Check-out</v-btn>
      </div>
    </section>
    <section v-else>
      <div>
        <p>Aucun article dans votre panier</p>
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
}
</style>