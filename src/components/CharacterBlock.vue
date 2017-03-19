<template>
  <div class="character-block">
    <character-name
      :name="character.name"
      :active="character.active"
    ></character-name>
    <character-hands :hands="character.hands"></character-hands>
    <character-bars
      :number="number"
      :params="character.params"
    ></character-bars>
  </div>
</div>
</template>

<script>
import CharacterName from './CharacterName'
import CharacterHands from './CharacterHands'
import CharacterBars from './CharacterBars'

export default {
  name: 'character-block',
  components: {
    CharacterName,
    CharacterHands,
    CharacterBars
  },
  props: {
    number: {
      type: Number,
      required: true
    },
    character: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-block {
  float: left;
  position: relative;
  width: double(134px);
  height: double(58px);
  margin-right: double(4px);
  background: $color-grey-dark;

  &:last-child {
    margin-right: 0;
  }
}
</style>
