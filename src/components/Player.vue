<template>
  <div
    class="player"
    :style="style"
  ></div>
</template>

<script>
import utils from '@/lib/utils'

export default {
  name: 'player',
  props: {
    position: {
      type: Object,
      required: true
    },
    rotation: {
      type: Number,
      required: true
    }
  },
  computed: {
    style () {
      const left = (this.position.x * 64) + 2
      const top = (this.position.y * 64) + 2
      const imagePath = utils.imagePath('character-views')
      return {
        left: `${left}px`,
        top: `${top}px`,
        backgroundImage: `url(${imagePath})`,
        transform: `rotate(${this.rotation}deg)`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.player {
  position: absolute;
  width: double(30px);
  height: double(30px);
  background-size: 100% 100%;
}
</style>
