<template>
  <h2>Редактирование игроков</h2>
  <div v-for="item in usersLife" :key="item.id">
    <div class="input-group mb-3">
      <span class="input-group-text">Имя</span>
      <input
        type="text"
        class="form-control"
        v-model="item.name"
        placeholder="Введите имя"
      />
      <span class="input-group-text">Жизни</span>
      <button
        class="btn btn-outline-primary"
        type="button"
        @click="minusLife(item)"
      >
        -
      </button>
      <input
        type="number"
        min="1"
        class="form-control life"
        v-model="item.life"
      />
      <button
        class="btn btn-outline-danger"
        type="button"
        @click="plusLife(item)"
      >
        +
      </button>
      <button
        class="btn btn-outline-success"
        type="button"
        @click="saveEditPlayer(item)"
      >
        Сохранить
      </button>
    </div>
  </div>
</template>

<script>
import { checkName, checkLife } from "../utils/checkValid.js";

export default {
  name: "EditPlayers",

  props: {
    playersList: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      usersLife: this.playersList.map((player) => ({ ...player })),
    };
  },

  methods: {
    plusLife(item) {
      item.life++;
    },

    minusLife(item) {
      if (item.life > 0) item.life--;
    },

    saveEditPlayer(item) {
      if (!checkName(item.name) || !checkLife(item.life)) {
        return;
      }

      this.$emit("update-player", item);
    },
  },
};
</script>

<style lang="scss" scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.life {
  width: 100px !important;
  flex: none !important;
}
</style>
