<template>
  <section>
    <v-parallax
      src="https://images.pexels.com/photos/2330137/pexels-photo-2330137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    >
      <h1 class="display-1 font-weight-thin text-center">
        Brand : Computer Shop
      </h1>
    </v-parallax>

    <!-- <section class="mb-16">
      <h2 class="text-center my-8">Vous avez récemment visité</h2>
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
          :img="item.img"
        />
      </section>
    </section> -->
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
          :img="item.img"
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
