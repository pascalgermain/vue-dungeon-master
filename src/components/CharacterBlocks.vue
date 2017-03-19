<template>
  <div class="character-blocks">
    <character-block
      v-for="(character, key) in characters"
      v-if="character"
      :key="key"
      :number="key + 1"
      :character="character"
    ></character-block>
  </div>
</template>

<script>
import CharacterBlock from './CharacterBlock'

export default {
  name: 'character-blocks',
  components: {
    CharacterBlock
  },
  props: {
    characters: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-blocks {
  position: absolute;
  left: 0;
  top: 0;
  width: double(548px);
  height: double(58px);
}
</style>
