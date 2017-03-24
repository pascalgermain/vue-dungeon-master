<template>
  <div class="list-item control">
    <div
      :style="{backgroundImage: `url(${backgroundImage})`}"
      @mousedown="active = true"
      @mouseup="active = false"
      @mouseout="active = false"
      @click="click"
    ></div>
  </div>
</template>

<script>
import utils from '@/lib/utils'

export default {
  name: 'control',
  props: {
    type: {
      type: String,
      required: true
    },
    direction: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    backgroundImage () {
      return utils.image(`control/control-${this.type}-${this.direction.name}${this.active ? '-active' : ''}`)
    }
  },
  methods: {
    click () {
      this.$emit(this.type, this.direction)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(29px);
$height: zoom(22px);

.control {
  width: $width;
  height: $height;
  border: zoom(0.5px) solid $color-blue-light; // TODO fix this

  &:nth-child(2),
  &:nth-child(5) {
    width: $width - zoom(1px); // TODO fix this
  }

  > div {
    position: static; // TODO fix this
    height: 100%; // TODO fix this
    background-size: cover; // TODO image size
    cursor: pointer; // TODO fix this
  }
}
</style>
