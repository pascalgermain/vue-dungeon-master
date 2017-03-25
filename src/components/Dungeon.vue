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
          v-for="(cell, x) in row"
          :class="cellClass(cell)"
        >
          <div
            v-for="cellWallItem in cellWallItems[y][x]"
            v-if="cellWallItem.type === 2"
            class="cell-wall-item mirror"
            :style="cellWallItemStyle(cellWallItem)"
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
import {helpers, propTypes} from '@/utils'
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
    position: propTypes.required.Object,
    rotation: propTypes.required.Number,
    cells: propTypes.required.Array,
    wallItems: propTypes.required.Array
  },
  computed: {
    cellsStyle () {
      return {
        width: `${(this.cells[0].length * 28) + 8}px`,
        height: `${(this.cells.length * 28) + 8}px`
      }
    }
  },
  methods: {
    cellClass (cell) {
      return [
        'list-item',
        'cell',
        {wall: cell === 0},
        {selected: cell === 2},
        {active: cell > 2}
      ]
    },
    cellWallItemStyle (cellWallItem) {
      return helpers.transformRotate(cellWallItem.rotation)
    }
  },
  created () {
    for (let y = 0; y < this.cells.length; ++y) {
      this.cellWallItems[y] = []
      for (let x = 0; x < this.cells[0].length; ++x) {
        this.cellWallItems[y][x] = []
        for (let i = 0; i < this.wallItems.length; ++i) {
          if (this.wallItems[i].position.x === x && this.wallItems[i].position.y === y) {
            this.cellWallItems[y][x].push(this.wallItems[i])
          }
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

.dungeon {
  top: zoom(33px);
  width: zoom(224px);
  height: zoom(136px);
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

.cell,
.cell-wall-item {
  width: zoom(7px);
  height: zoom(7px);
}

.cell {
  background: imageUrl('map/cell');
}

.cell-wall-item {
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
