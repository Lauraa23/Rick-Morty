<template>
  <div class="card">
    <img :src="data.image" class="card__img" />
    <h3 class="card__name">{{ data.name }}</h3>
    <ul class="card__info">
      <li>{{ data.infoFirst }}</li>
      <li>{{ data.infoSecond }}</li>
      <li>{{ data.infoThird }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped src="./_InformationCards.scss"></style>
