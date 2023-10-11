<template lang="">
  <nav class="navbar">
   
    <ul class="navbar__list">
      <li><router-link class="navbar__list__item" to = /home>Home</router-link></li>
      <li><router-link class="navbar__list__item" to = /characters>Characters</router-link></li>
      <li><router-link class="navbar__list__item" to = /locations>Locations</router-link></li>
      <li><router-link class="navbar__list__item" to = /episodes>Episodes</router-link></li>
    </ul>
    <div class="navbar__social">
      <a href="https://github.com/Lauraa23" class="navbar__social__icon" target="_blank"><font-awesome-icon  icon="fa-brands fa-github" /></a>
      <a href="https://www.linkedin.com/in/laura-del-pino-figueroa-b0960b12b/" class="navbar__social__icon" target="_blank"><font-awesome-icon  icon="fa-brands fa-linkedin" /></a>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped src="./_NavBar.scss"></style>
