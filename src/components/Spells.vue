<template>
  <div class="spells"></div>
</template>

<script>
export default {
  name: 'spells'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.spells {
  position: absolute;
  left: double(466px);
  top: double(84px);
  width: double(174px);
  height: double(66px);
  background: url(../assets/img/spells.png);
  background-size: cover;
}
</style>
