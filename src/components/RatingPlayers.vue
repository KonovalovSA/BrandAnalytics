<template>
  <h2>Рейтинг</h2>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Имя игрока</th>
        <th scope="col">Жизни</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in rating" :key="index">
        <th scope="row">{{ item.id }}</th>
        <td>{{ item.name }}</td>
        <td>{{ item.life }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "RatingPlayers",

  props: {
    playersList: {
      type: Array,
      required: true,
    },
  },

  computed: {
    rating() {
      return [...this.playersList].sort((a, b) => b.life - a.life);
    },
  },
};
</script>
