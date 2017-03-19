<template>
  <div class="character-views"></div>
</template>

<script>
export default {
  name: 'character-views'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-views {
  position: absolute;
  left: double(562px);
  top: 0;
  width: double(78px);
  height: double(58px);
  background: url(../assets/img/character-views.png);
  background-size: cover;
}
</style>
