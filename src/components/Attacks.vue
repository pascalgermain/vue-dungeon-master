<template>
  <div class="attacks"></div>
</template>

<script>
export default {
  name: 'attacks'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(86px);
$height: zoom(35px);

.attacks {
  left: zoom(233px);
  top: zoom(86px);
  width: $width;
  height: $height;
  background: imageUrl('attacks');
  background-size: cover; // TODO image size
}
</style>
