<template>
  <v-app>
    <header>
      <Nav />
    </header>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer class="mt-16">a</v-footer>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Nav,
  },
};
</script>
