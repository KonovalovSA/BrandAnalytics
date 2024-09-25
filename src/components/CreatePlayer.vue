<template>
  <h2>Добавить нового игрока</h2>
  <div class="input-group mb-3">
    <span class="input-group-text">Имя</span>
    <input
      type="text"
      class="form-control"
      v-model="players_name"
      placeholder="Введите имя"
    />
    <span class="input-group-text">Жизни</span>
    <input
      type="number"
      min="0"
      class="form-control"
      v-model="players_life"
      placeholder="Введите число"
    />
    <button class="btn btn-outline-success" type="button" @click="createPlayer">
      Создать
    </button>
  </div>
</template>

<script>
import { checkName, checkLife } from "../utils/checkValid.js";

export default {
  name: "CreatePlayer",

  data() {
    return {
      players_name: "",
      players_life: null,
    };
  },

  methods: {
    createPlayer() {
      if (!checkName(this.players_name) || !checkLife(this.players_life)) {
        return;
      }

      this.$emit("players-list", {
        name: this.players_name,
        life: this.players_life,
      });

      this.players_name = "";
      this.players_life = null;
    },
  },
};
</script>
