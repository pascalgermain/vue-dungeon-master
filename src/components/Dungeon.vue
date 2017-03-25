<template>
  <div class="dungeon">
    <div
      class="cells"
      :style="cellsStyle"
    >
      <div
        v-for="(row, y) in cells"
        class="row"
      >
        <div
          v-for="(col, x) in row"
          :class="['list-item', 'col', {wall: col === 0}, {selected: col === 2}, {active: col > 2}]"
        >
          <div
            v-for="wallItem in cellWallItems[y][x]"
            v-if="wallItem.type === 2"
            class="wall-item mirror"
            :style="{transform: `rotate(${wallItem.rotation * 90}deg)`}"
          >
          </div>
        </div>
      </div>
      <player
        :position="position"
        :rotation="rotation"
      ></player>
    </div>
  </div>
</template>

<script>
import Player from './Player'

export default {
  name: 'dungeon',
  components: {
    Player
  },
  data () {
    return {
      cellWallItems: []
    }
  },
  props: {
    position: {
      type: Object,
      required: true
    },
    rotation: {
      type: Number,
      required: true
    },
    cells: {
      type: Array,
      required: true
    },
    wallItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    cellsStyle () {
      return {
        width: `${(this.cells[0].length * 28) + 8}px`,
        height: `${(this.cells.length * 28) + 8}px`
      }
    }
  },
  created () {
    const cellWallItems = []
    for (let y = 0; y < this.cells.length; ++y) {
      cellWallItems[y] = []
      for (let x = 0; x < this.cells[0].length; ++x) {
        cellWallItems[y][x] = []
        for (let i = 0; i < this.wallItems.length; ++i) {
          if (this.wallItems[i].position.x === x && this.wallItems[i].position.y === y) {
            cellWallItems[y][x].push(this.wallItems[i])
          }
        }
      }
    }
    this.cellWallItems = cellWallItems
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

.cells {
  position: relative;
  margin: zoom(0.5px) auto; // TODO fix this
  border: zoom(1px) solid $color-black;
}

.row {
  position: relative;
}

.col,
.wall-item {
  width: zoom(7px);
  height: zoom(7px);
}

.col {
  background: imageUrl('map/cell');
}

.wall-item {
  &.mirror {
      background: imageUrl('map/mirror');
      background-size: cover;
  }
}

.wall {
  background: $color-black;
}

.selected {
  background: $color-orange;
}

.active {
  background: $color-yellow;
}
</style>
