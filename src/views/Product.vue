<template>
  <section>
    <div>
      {{ item }}
      <v-btn @click="add(item)">+</v-btn>
    </div>
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