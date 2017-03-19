<template>
  <div class="character-hand">
    <div :style="{backgroundImage: `url(${backgroundImage})`}"></div>
  </div>
</div>
</template>

<script>
import utils from '@/lib/utils'

export default {
  name: 'character-hand',
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
      if (this.item) return utils.imagePath(`character-item/character-item-${this.item}`)
      return utils.imagePath(`character-hand-${this.side}`)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-hand {
  float: left;
  left: double(6px);
  top: double(18px);
  width: double(36px);
  height: double(36px);
  margin-right: double(4px);
  border: double(2px) solid $color-grey;

  &:last-child {
    margin-right: 0;
  }

  > div {
    height: 100%;
    background-size: cover;
  }
}
</style>
