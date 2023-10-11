<template>
  <div class="character">
    <div class="cards">
      <InformationCards
        :data="transformData(character)"
        v-for="character in characters"
        :key="character.id"
      />
    </div>
  </div>
</template>
<script>
import { getAllCharacters } from "../../Services/HTTP/getCharacters";
import InformationCards from "../../components/InformationCard/InformationCards.vue";

export default {
  name: "Characters",
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async fetchCharacters() {
      try {
        const characters = await getAllCharacters();
        this.characters = characters;
        console.log(characters);
      } catch (error) {
        console.log("error al obtener los personajes", error);
      }
    },
    transformData(character) {
      return {
        name: character.name,
        image: character.image,
        infoFirst: character.gender,
        infoSecond: character.origin.name,
        infoThird: character.location.name,
      };
    },
  },
  components: {
    InformationCards,
  },
  async mounted() {
    await this.fetchCharacters();
  },
};
</script>
<style lang="scss" scoped src="./_CharactersView.scss"></style>
