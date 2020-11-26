<template>
  <v-app>
    <header>
      <Nav />
    </header>
    <v-main>
      <transition name="page" appear mode="out-in">
        <router-view></router-view>
      </transition>
    </v-main>

    <v-footer class="mt-16">
      <Footer />
    </v-footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Nav,
    Footer,
  },
};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.5s ease;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>