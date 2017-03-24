<template>
  <div
    class="list-item champion-hand"
    :style="{backgroundImage: `url(${backgroundImage})`}">
  </div>
</template>

<script>
import utils from '@/lib/utils'

export default {
  name: 'champion-hand',
  props: {
    side: {
      type: String,
      required: true
    },
    item: {
      type: Number,
      required: true
    }
  },
  computed: {
    backgroundImage () {
      if (this.item) return utils.image(`champion-item/champion-item-${this.item}`)
      return utils.image(`champion-hand-${this.side}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(18px);
$height: zoom(18px);

.champion-hand {
  width: $width;
  height: $height;
  margin-right: zoom(2px);
  border: zoom(1px) solid $color-grey;
  background-size: cover; // TODO image size
}
</style>
