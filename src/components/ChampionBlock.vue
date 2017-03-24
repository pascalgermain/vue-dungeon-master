<template>
  <div class="list-item champion-block">
    <champion-name
      :name="champion.name"
      :active="active"
      @click="setActiveChampionIndex()"
    ></champion-name>
    <champion-hands :hands="champion.hands"></champion-hands>
    <champion-bars
      :index="index"
      :params="champion.params"
    ></champion-bars>
  </div>
</div>
</template>

<script>
import ChampionName from './ChampionName'
import ChampionHands from './ChampionHands'
import ChampionBars from './ChampionBars'

export default {
  name: 'champion-block',
  components: {
    ChampionName,
    ChampionHands,
    ChampionBars
  },
  props: {
    index: {
      type: Number,
      required: true
    },
    champion: {
      type: Object,
      required: true
    }
  },
  computed: {
    active () {
      return this.index === this.$store.state.activeChampionIndex
    }
  },
  methods: {
    setActiveChampionIndex () {
      this.$store.dispatch('setActiveChampionIndex', {index: this.index})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(67px);
$height: zoom(29px);

.champion-block {
  width: $width;
  height: $height;
  margin-right: zoom(2px);
  background: $color-grey-dark;
  cursor: pointer;
}
</style>
