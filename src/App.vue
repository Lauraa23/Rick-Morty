<template>
  <div class="main">
    <TituloComp></TituloComp>
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>
<script>
import TituloComp from "./components/Title/TituloComp.vue";
import NavBar from "./components/NavBar/NavBar.vue";

export default {
  name: "App",
  components: {
    TituloComp,
    NavBar,
  },
};
</script>
<style lang="scss" scope src="./assets/base.scss"></style>
