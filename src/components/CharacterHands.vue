<template>
  <div class="character-hands">
    <character-hand
      v-for="(item, side) of hands"
      :key="side"
      :side="side"
      :item="item"
    ></character-hand>
  </div>
</template>

<script>
import CharacterHand from './CharacterHand'

export default {
  name: 'character-hands',
  components: {
    CharacterHand
  },
  props: {
    hands: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-hands {
  position: absolute;
  left: double(6px);
  top: double(18px);
  width: double(76px);
  height: double(36px);
}
</style>
