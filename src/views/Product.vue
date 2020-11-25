<template>
  <section class="d-flex flex-column flex-md-row align-center justify-center">
    <section>
      <v-img :src="item.img" height="400px" width="400px"></v-img>
    </section>
    <section class="ml-md-8">
      <h2 class="display-3 mb-5">{{ item.title }}</h2>
      <p class="red--text">{{ item.cost }}€</p>
      <p>
        Référence : <strong>{{ item.id }}</strong>
      </p>
      <p>{{ item.text }}</p>
      <div class="d-flex flex-column flex-md-row align-md-center">
        <v-btn
          depressed
          class="mr-md-5 mb-md-0 mb-5 white--text"
          @click="add(item)"
          color="green"
          ><v-icon>mdi-cart-arrow-down</v-icon></v-btn
        >
        <v-btn depressed @click="add(item)" color="orange" class="white--text"
          >Achat direct <v-icon>mdi-arrow-right</v-icon></v-btn
        >
      </div>
    </section>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Product",
  computed: mapState({
    item: (state) => state.product.item,
  }),
  methods: {
    ...mapActions({
      add: "cart/addToCart",
    }),
  },
  created() {
    this.$store.dispatch("product/getProduct", this.$route.params.id);
  },
};
</script>

<style>
</style>