<template>
  <div
    class="list-item control"
    :style="style"
    @mousedown="click()"
    ></div>
  </div>
</template>

<script>
import {helpers, propTypes} from '@/utils'

export default {
  name: 'control',
  props: {
    type: propTypes.required.String,
    direction: propTypes.required.Object
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    style () {
      return helpers.backgroundImage(`control/control-${this.type}-${this.direction.name}${this.active ? '-active' : ''}`)
    }
  },
  methods: {
    click () {
      this.active = true
      setTimeout(() => { this.active = false }, 100)
      this.$emit(this.type, this.direction)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

$width: zoom(28px);
$height: zoom(21px);

.control {
  width: $width;
  height: $height;
  margin-right: zoom(1px);
  margin-bottom: zoom(1px);

  &:nth-child(2),
  &:nth-child(5) {
    width: $width - zoom(1px);
  }

  &:nth-child(3) {
    margin-right: 0;
  }

  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6) {
    margin-bottom: 0;
  }
}
</style>
