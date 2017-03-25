<template>
  <div class="controls">
    <control
      v-for="(control, index) in controls"
      :key="index"
      :type="control.type"
      :direction="control.direction"
      @move="move($event)"
      @turn="turn($event)"
    ></control>
  </div>
</template>

<script>
import {propTypes} from '@/utils'
import Control from './Control'

export default {
  name: 'controls',
  components: {
    Control
  },
  props: {
    position: propTypes.required.Object,
    rotation: propTypes.required.Number
  },
  data () {
    return {
      directions: [
        {name: 'north', move: {x: 0, y: -1}, rotate: 0},
        {name: 'east', move: {x: 1, y: 0}, rotate: 1},
        {name: 'south', move: {x: 0, y: 1}, rotate: 2},
        {name: 'west', move: {x: -1, y: 0}, rotate: 3}
      ],
      controls: [
        {type: 'turn', direction: {name: 'left', value: -1}},
        {type: 'move', direction: {name: 'up', value: 0}},
        {type: 'turn', direction: {name: 'right', value: 1}},
        {type: 'move', direction: {name: 'left', value: 3}},
        {type: 'move', direction: {name: 'down', value: 2}},
        {type: 'move', direction: {name: 'right', value: 1}}
      ]
    }
  },
  methods: {
    move (direction) {
      const position = {
        x: this.position.x + this.directions[direction.value].move.x,
        y: this.position.y + this.directions[direction.value].move.y
      }
      this.$emit('move', position)
    },
    turn (direction, init) {
      switch (direction.value) {
        case -1:
          this.directions.unshift(this.directions.pop())
          break
        case 1:
          this.directions.push(this.directions.shift())
          break
      }
      if (init === undefined) this.$emit('rotate', this.directions[0].rotate)
    }
  },
  created () {
    let turns = 0
    while (turns < this.directions.length && this.directions[0].rotate !== this.rotation) {
      this.turn({value: 1}, true)
      ++turns
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

$width: zoom(87px);
$height: zoom(45px);

.controls {
  position: absolute;
  left: zoom(233px);
  top: zoom(124px);
  width: $width;
  height: $height;
  border: zoom(1px) solid $color-blue-light;
  background: $color-blue-light;
  cursor: pointer;
}
</style>
