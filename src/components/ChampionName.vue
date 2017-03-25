<template>
  <div
    :class="['champion-name', {active}]"
    v-text="name"
    @mousedown.left="click()"
  ></div>
</template>

<script>
import {propTypes} from '@/utils'

export default {
  name: 'champion-name',
  props: {
    name: propTypes.required.String,
    active: propTypes.required.Boolean
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

$width: zoom(43px);
$height: zoom(7px);

.champion-name {
  width: $width;
  height: $height;
  padding: 0 zoom(1.5px); // TODO font
  background: $color-grey;
  color: $color-orange; // TODO font
  font-size: zoom(6px); // TODO font
  line-height: zoom(7px); // TODO font
  text-transform: uppercase; // TODO font
  cursor: default;

  &.active {
    color: $color-yellow; // TODO font
  }
}
</style>
