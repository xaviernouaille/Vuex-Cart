<template>
  <nav class="d-flex justify-space-between align-center px-3 px-md-10 py-3">
    <router-link
      to="/"
      class="black--text text-decoration-none font-weight-bold"
    >
      Brand
    </router-link>
    <!-- <v-list class="d-flex pa-0">
      <v-list-item class="mx-5">Test</v-list-item>
      <v-list-item class="mx-5">Test</v-list-item>
      <v-list-item class="mx-5">Test</v-list-item>
    </v-list> -->
    <div style="position: relative">
      <v-btn outlined depressed @click="isShow = !isShow"
        >Cart {{ totalCount }}</v-btn
      >
      <Cart class="cart mt-2" v-if="isShow" />
    </div>
  </nav>
</template>

<script>
import Cart from "./Cart";
import { mapGetters } from "vuex";

export default {
  name: "Nav",
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapGetters({
      count: "cart/count",
      totalCount: "cart/totalCount",
    }),
  },
  components: {
    Cart,
  },
  methods: {
    close(e) {
      !this.$el.contains(e.target) ? (this.isShow = false) : "";
    },
  },
  mounted() {
    document.addEventListener("click", this.close);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.close);
  },
};
</script>

<style>
.cart {
  display: block;
  position: absolute;
  z-index: 99;
  right: 0;
}
</style>