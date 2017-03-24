<template>
  <div
    class="list-item control"
    :style="{backgroundImage: `url(${backgroundImage})`}"
    @mousedown="click"
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
      this.active = true
      setTimeout(() => { this.active = false }, 100)
      this.$emit(this.type, this.direction)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

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
