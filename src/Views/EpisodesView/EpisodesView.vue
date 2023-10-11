<template>
  <div class="episodes">
    <div class="cardsepisodes">
      <InformationCards
        :data="transformDataEpisodes(episode)"
        v-for="episode in episodes"
        :key="episode.id"
      />
    </div>
  </div>
</template>
<script>
import { getAllEpisodes } from "../../Services/HTTP/getEpisodes";
import InformationCards from "../../components/InformationCard/InformationCards.vue";

export default {
  name: "Episodes",
  data() {
    return {
      episodes: [],
    };
  },
  methods: {
    async fetchEpisodes() {
      try {
        const episodes = await getAllEpisodes();
        this.episodes = episodes;
        console.log(episodes);
      } catch (error) {
        console.log("error al obtener los episodios", error);
      }
    },
    transformDataEpisodes(episode) {
      return {
        name: episode.name,
        image: "",
        infoFirst: episode.air_date,
        infoSecond: episode.episode,
        infoThird: "",
      };
    },
  },
  components: {
    InformationCards,
  },
  async mounted() {
    await this.fetchEpisodes();
  },
};
</script>
<style lang=""></style>
