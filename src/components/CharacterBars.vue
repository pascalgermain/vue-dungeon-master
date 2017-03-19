<template>
  <div class="character-bars">
    <character-bar
      v-for="(value, name) of params"
      :key="name"
      :number="number"
      :value="value"
    ></character-bar>
  </div>
</template>

<script>
import CharacterBar from './CharacterBar'

export default {
  name: 'character-bars',
  components: {
    CharacterBar
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    params: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-bars {
  position: absolute;
  left: double(92px);
  top: double(4px);
  width: double(36px);
  height: double(50px);
}
</style>
