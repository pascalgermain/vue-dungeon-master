<template>
  <div class="champion-blocks">
    <champion-block
      v-for="(champion, index) in champions"
      :key="index"
      :index="index"
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
  computed: {
    champions () {
      return this.$store.state.champions
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
