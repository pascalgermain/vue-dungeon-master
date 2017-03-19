<template>
  <div class="items"></div>
</template>

<script>
export default {
  name: 'items'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.items {
  position: absolute;
  left: double(466px);
  top: double(172px);
  width: double(172px);
  height: double(70px);
  background: url(../assets/img/items.png);
  background-size: cover;
}
</style>
