<template>
  <section>
    <v-parallax
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-parallax>

    <section>
      <h2 class="text-center my-8">Best Seller</h2>
      <section class="d-flex flex-wrap justify-center">
        <Card
          class="mx-3 mb-8 mb-sm-0"
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :item="item"
          :title="item.title"
          :text="item.text"
          :cost="item.cost"
        />
      </section>
    </section>
  </section>
</template>

<script>
import Card from "../components/Card";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  computed: mapState({
    items: (state) => state.product.bestSeller,
  }),
  created() {
    this.$store.dispatch("product/getBestSeller");
  },
};
</script>
