<template>
  <div class="btn-group">
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: createPlayer }"
      @click="toggleCreatePlayer"
    >
      Создать
    </button>
    <button
      type="button"
      class="btn btn-outline-primary"
      :class="{ active: editPlayer }"
      @click="toggleEditPlayer"
      :disabled="!playersList.length"
    >
      Редактировать
    </button>
  </div>
  <CreatePlayer v-if="createPlayer" @players-list="createdPlayers" />
  <EditPlayers
    v-if="editPlayer && playersList.length"
    :playersList="playersList"
    @update-player="editPlayers"
  />
  <RatingPlayers v-if="playersList.length" :playersList="playersList" />
</template>

<script>
import CreatePlayer from "./components/CreatePlayer.vue";
import EditPlayers from "./components/EditPlayers.vue";
import RatingPlayers from "./components/RatingPlayers.vue";

export default {
  name: "App",
  components: {
    CreatePlayer,
    EditPlayers,
    RatingPlayers,
  },
  data() {
    return {
      createPlayer: false,
      editPlayer: false,
      playersList: [],
      currentId: 0,
    };
  },

  methods: {
    createdPlayers(newPlayer) {
      newPlayer.id = this.currentId + 1;
      this.playersList.push(newPlayer);
      this.currentId++;
    },
    editPlayers(item) {
      const index = this.playersList.findIndex(
        (player) => player.id === item.id
      );
      this.playersList[index] = { ...item };
    },
    toggleCreatePlayer() {
      this.createPlayer = !this.createPlayer;
      this.editPlayer = false;
    },
    toggleEditPlayer() {
      this.editPlayer = !this.editPlayer;
      this.createPlayer = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 600px;
}
h2 {
  text-align: left;
}
</style>
