<template>
  <div class="dungeon">
    <div
      v-for="row in cells"
      class="row"
    >
      <div
        v-for="cell in row"
        :class="['list-item', 'cell', {wall: !!cell}]"
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
    cells: {
      type: Array,
      required: true
    },
    position: {
      type: Object,
      required: true
    },
    rotation: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(224px);
$height: zoom(136px);

.dungeon {
  top: zoom(33px);
  width: $width;
  height: $height;
  background: $color-grey-dark;
}

.row {
  position: static;
}

.cell {
  width: zoom(16px);
  height: zoom(16px);
  border: zoom(0.5px) solid $color-black; // TODO fix this
}

.wall {
  background: $color-grey;
}
</style>
