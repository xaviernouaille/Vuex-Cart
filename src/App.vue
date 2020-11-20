<template>
  <v-app>
    <header>
      <Nav />
    </header>
    <v-main>
      <router-view></router-view>
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
