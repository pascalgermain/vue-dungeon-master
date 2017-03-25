<template>
  <div
    class="list-item champion-hand"
    :style="style">
  </div>
</template>

<script>
import {helpers, propTypes} from '@/utils'

export default {
  name: 'champion-hand',
  props: {
    side: propTypes.required.String,
    item: propTypes.required.Number
  },
  computed: {
    style () {
      if (this.item) return helpers.backroundImage(`champion-item/champion-item-${this.item}`)
      return helpers.backroundImage(`champion-hand/champion-hand-${this.side}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

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
