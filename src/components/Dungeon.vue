<template>
  <div class="dungeon"></div>
</template>

<script>
export default {
  name: 'dungeon'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.dungeon {
  position: absolute;
  left: 0;
  top: double(66px);
  width: double(448px);
  height: double(272px);
  background: $color-grey-dark;
}
</style>
