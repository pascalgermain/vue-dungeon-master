<template>
  <div class="controls"></div>
</template>

<script>
export default {
  name: 'controls'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.controls {
  position: absolute;
  left: double(466px);
  top: double(248px);
  width: double(174px);
  height: double(90px);
  background: url(../assets/img/controls.png);
  background-size: cover;
}
</style>
