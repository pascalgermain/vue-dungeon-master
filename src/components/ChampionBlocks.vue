<template>
  <div class="champion-blocks">
    <champion-block
      v-for="(champion, key) in champions"
      v-if="champion"
      :key="key"
      :number="key + 1"
      :champion="champion"
    ></champion-block>
  </div>
</template>

<script>
import ChampionBlock from './ChampionBlock'

export default {
  name: 'champion-blocks',
  components: {
    ChampionBlock
  },
  props: {
    champions: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(274px);
$height: zoom(29px);

.champion-blocks {
  width: $width;
  height: $height;
}
</style>
