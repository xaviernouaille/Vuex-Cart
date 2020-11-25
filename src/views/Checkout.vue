<template>
  <section class="d-flex flex-column align-center">
    <h2 class="mb-10 mt-3">Checkout</h2>
    <div
      v-for="item in items"
      :key="item.id"
      class="d-flex flex-column flex-md-row align-center"
    >
      <v-img
        class="mb-5 mb-md-0"
        height="300px"
        width="300px"
        contain
        :src="item.img"
      ></v-img>
      <div class="ml-md-10">
        <p class="display-3 mb-5">{{ item.title }}</p>
        <p class="mb-2">
          Référence : <strong>{{ item.id }}</strong>
        </p>
        <p class="mb-2">
          Qté : x{{ item.qty }} | Prix unitaire : {{ item.cost }}
        </p>
        <p class="mb-2">Total : {{ item.qty * item.cost }}</p>
        <v-btn depressed @click="add(item)" color="green" class="white--text"
          ><v-icon>+</v-icon></v-btn
        >
      </div>
    </div>
    <v-divider class="mt-5"></v-divider>
    <section class="my-10 d-flex flex-md-row flex-column align-center">
      <p class="display-1 text-center mb-5 mb-md-0 mr-5">
        Totaux : {{ totalCost }}€
      </p>
      <v-btn color="purple" outlined>Paiement sécurisé</v-btn>
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
    }),
  },
  methods: {
    ...mapActions({
      add: "cart/addToCart",
    }),
  },
};
</script>