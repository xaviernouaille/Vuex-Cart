<template>
  <section class="cart white pa-8">
    <section v-if="items.length > 0">
      <div class="mb-6" v-for="item in items" :key="item.id">
        <div class="d-flex justify-space-between">
          <p>{{ item.title }} x {{ item.qty }}</p>
          <p>{{ item.cost * item.qty }}</p>
        </div>
        <v-btn @click="add(item)">+</v-btn>
        <v-divider class="mt-5"></v-divider>
      </div>
      <div>Total : {{ totalCost }}</div>
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
  width: 300px;
  border-radius: 10px;
  max-height: 400px;
  overflow-y: scroll;
}
</style>