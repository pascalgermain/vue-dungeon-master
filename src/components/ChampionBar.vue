<template>
  <div class="list-item champion-bar">
    <div
      :class="`champion-color-${number}`"
      :style="{height: `${value}%`}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'champion-bar',
  props: {
    number: {
      type: Number,
      required: true
    },
    value: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(4px);
$height: zoom(25px);

.champion-bar {
  width: $width;
  height: $height;
  margin-right: zoom(3px);

  > div {
    bottom: 0;
    width: 100%;
  }
}

.champion-color-1 {
  background: $color-champion-1;
}

.champion-color-2 {
  background: $color-champion-2;
}

.champion-color-3 {
  background: $color-champion-3;
}

.champion-color-4 {
  background: $color-champion-4;
}
</style>
