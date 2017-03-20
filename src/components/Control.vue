<template>
  <div class="control">
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
      return utils.imagePath(`control/control-${this.type}-${this.direction.name}${this.active ? '-active' : ''}`)
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

$width: 58px;

.control {
  float: left;
  width: double($width);
  height: double(44px);
  border: double(1px) solid $color-blue-light;

  &:nth-child(2),
  &:nth-child(5) {
    width: double($width - 2);
  }

  > div {
    height: 100%;
    background-size: cover;
    cursor: pointer;
  }
}
</style>
