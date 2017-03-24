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

$width: zoom(86px);
$height: zoom(35px);

.items {
  left: zoom(233px);
  top: zoom(86px);
  width: $width;
  height: $height;
  background: imageUrl('items');
  background-size: cover; // TODO image size
}
</style>
