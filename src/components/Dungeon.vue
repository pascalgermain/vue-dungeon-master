<template>
  <div class="dungeon">
    <div v-for="row in cells">
      <div
        class="cell"
        v-for="col in row"
      ></div>
    </div>
    <player
      :position="position"
      :rotation="rotation"
    ></player>
  </div>
</template>

<script>
import Player from './Player'

export default {
  name: 'dungeon',
  components: {
    Player
  },
  props: {
    position: {
      type: Object,
      required: true
    },
    rotation: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      cells: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.dungeon {
  position: absolute;
  left: 0;
  top: double(66px);
  width: double(448px);
  height: double(272px);
  background: $color-grey-dark;
}

.cell {
  float: left;
  width: double(32px);
  height: double(32px);
  border: double(1px) solid $color-grey;
}
</style>
