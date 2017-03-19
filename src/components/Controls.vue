<template>
  <div class="controls">
    <control
      v-for="(control, key) in controls"
      :key="key"
      :type="control.type"
      :direction="control.direction"
    ></control>
  </div>
</template>

<script>
import Control from './Control'

export default {
  name: 'controls',
  components: {
    Control
  },
  data () {
    return {
      controls: [
        {type: 'turn', direction: 'left'},
        {type: 'move', direction: 'up'},
        {type: 'turn', direction: 'right'},
        {type: 'move', direction: 'left'},
        {type: 'move', direction: 'down'},
        {type: 'move', direction: 'right'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.controls {
  position: absolute;
  left: double(466px);
  top: double(248px);
  width: double(174px);
  height: double(90px);
  border: double(1px) solid $color-blue-light;
}
</style>
