<template>
  <div class="planets">
    <div class="cardsplanets">
      <InformationCards
        :data="transformDataLocations(location)"
        v-for="location in locations"
        :key="location.id"
      />
    </div>
  </div>
</template>
<script>
import { getAllLocations } from "../../Services/HTTP/getLocations";
import InformationCards from "../../components/InformationCard/InformationCards.vue";

export default {
  name: "Locations",
  data() {
    return {
      locations: [],
    };
  },
  methods: {
    async fetchLocations() {
      try {
        const locations = await getAllLocations();
        this.locations = locations;
        console.log(locations);
      } catch (error) {
        console.log("error al obtener los planetas", error);
      }
    },
    transformDataLocations(location) {
      return {
        name: location.name,
        image: "",
        infoFirst: location.dimension,
        infoSecond: location.type,
        infoThird: "",
      };
    },
  },
  components: {
    InformationCards,
  },
  async mounted() {
    await this.fetchLocations();
  },
};
</script>
<style lang=""></style>
