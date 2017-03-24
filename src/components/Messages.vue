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

.messages {
  position: absolute;
  left: 0;
  top: zoom(173px);
  width: zoom(320px);
  height: zoom(27px);
}
</style>
