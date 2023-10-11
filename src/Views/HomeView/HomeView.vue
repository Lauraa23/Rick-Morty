<template>
  <div class="home"></div>
  <Login v-if="login" />
  <Register v-if="register" />
  <div class="buttons">
    <button v-if="register" @click="mostrarLogin">Mostrar Login</button>
    <button v-if="login" @click="mostrarRegister">Mostrar Registro</button>
  </div>
</template>
<script>
import Login from "../../components/Auth/Login.vue";
import Register from "../../components/Auth/Register.vue";
export default {
  name: "Home",
  components: { Login, Register },
  data() {
    return {
      login: true,
      register: false,
    };
  },
  methods: {
    mostrarLogin() {
      this.login = true;
      this.register = false;
    },
    mostrarRegister() {
      this.login = false;
      this.register = true;
    },
  },
};
</script>

<style lang="scss" scoped src="./_HomeView.scss"></style>
