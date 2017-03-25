<template>
  <div class="spells"></div>
</template>

<script>
export default {
  name: 'spells'
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/common.scss';

.spells {
  left: zoom(233px);
  top: zoom(42px);
  width: zoom(87px);
  height: zoom(33px);
  background: imageUrl('spells');
  background-size: cover; // TODO image size
}
</style>
