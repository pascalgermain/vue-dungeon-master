<template>
  <div class="champion-views"></div>
</template>

<script>
export default {
  name: 'champion-views'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(39px);
$height: zoom(29px);

.champion-views {
  left: zoom(281px);
  width: $width;
  height: $height;
  background: imageUrl('champion-views');
  background-size: cover; // TODO image size
}
</style>
