<template>
  <div class="authMain">
    <h2 class="authMain__title">Login</h2>
    <form name="login-form" class="authMain__form">
      <label class="authMain__form__label" for="username"></label>
      <input
        class="authMain__form__input"
        id="username"
        type="text"
        v-model="input.username"
        placeholder="Username*"
      />
      <label class="authMain__form__label" for="password"></label>
      <input
        class="authMain__form__input"
        type="password"
        id="password"
        v-model="input.password"
        placeholder="Password*"
      />
      <div class="authMain__form__buttons">
        <button
          class="authMain__form__buttons__button"
          v-on:click.prevent="login"
          type="submit"
        >
          Login
        </button>
        <button
          class="authMain__form__buttons__button"
          v-on:click.prevent="resetForm"
          type="reset"
        >
          Reset
        </button>
        <button
          class="authMain__form__buttons__button"
          v-on:click.prevent="logout"
        >
          Logout
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      if (
        localStorage.getItem("username") === this.input.username &&
        localStorage.getItem("password") === this.input.password
      ) {
        localStorage.setItem("active", "true");
        console.log("Login ok");
      } else {
        console.log("Login ko");
      }
    },
    resetForm() {
      this.input.username = "";
      this.input.password = "";
    },
    logout() {
      localStorage.removeItem("active");
      console.log("Logout");
    },
  },
};
</script>
<style lang="scss" scope src="./_AuthStyles.scss"></style>
