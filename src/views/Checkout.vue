<template>
  <section class="d-flex flex-column align-center">
    <section v-if="totalCount > 0">
      <h2 class="mb-10 mt-3 text-center">Checkout</h2>
      <div
        v-for="item in items"
        :key="item.id"
        class="d-flex flex-column flex-md-row align-center"
      >
        <v-img class="mb-5 mb-md-0 product-img" contain :src="item.img"></v-img>
        <div class="ml-md-10">
          <p class="display-3 mb-5">{{ item.title }}</p>
          <p class="mb-2">
            Référence : <strong>{{ item.id }}</strong>
          </p>
          <p class="mb-2">
            Qté : x{{ item.qty }} | Prix unitaire : {{ item.cost }}
          </p>
          <p class="mb-2">Total : {{ item.qty * item.cost }}</p>
          <v-btn
            small
            depressed
            @click="add(item)"
            color="green"
            class="white--text mr-2"
            ><v-icon>+</v-icon></v-btn
          >
          <v-btn
            small
            depressed
            v-if="item.qty > 1"
            @click="decrementQty(item)"
            class="mr-2"
            >-</v-btn
          >

          <v-btn small depressed @click="remove(item)" class="grey--text"
            ><v-icon>mdi-delete</v-icon></v-btn
          >
        </div>
      </div>
      <v-divider class="mt-5"></v-divider>
      <section
        class="my-10 d-flex flex-md-row flex-column align-center justify-space-between"
      >
        <p class="display-1 text-center mb-5 mb-md-0 mr-5">
          {{ items.length > 1 ? "Totaux" : "Total" }} : {{ totalCost }}€
        </p>
        <v-btn color="purple" outlined>Paiement sécurisé</v-btn>
      </section>
    </section>
    <section class="d-flex flex-column justify-center my-5" v-else>
      <v-icon x-large class="mb-7">mdi-alert</v-icon>
      <h2 class="mb-5">Oops, aucun article trouvé..</h2>
      <router-link class="text-center" to="/"
        >Reprendre mon shopping</router-link
      >
    </section>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Checkout",
  computed: {
    ...mapState({
      items: (state) => state.cart.items,
    }),
    ...mapGetters({
      totalCost: "cart/totalCost",
      totalCount: "cart/totalCount",
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

<style scoped>
.product-img {
  height: 300px;
  width: 300px;
}
</style>