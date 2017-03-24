<template>
  <div class="messages"></div>
</template>

<script>
export default {
  name: 'messages'
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(320px);
$height: zoom(27px);

.messages {
  top: zoom(173px);
  width: $width;
  height: $height;
}
</style>
