<template>
  <div class="character-bar">
    <div
      :class="'character-color-' + number"
      :style="{height: value + '%'}"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'character-bar',
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

.character-bar {
  float: left;
  position: relative;
  width: double(8px);
  height: double(50px);
  margin-right: double(6px);

  &:last-child {
    margin-right: 0;
  }

  > div {
    position: absolute;
    left: 0;
    bottom: 0;
    width: double(8px);
  }
}

.character-color-1 {
  background: $color-character-1;
}

.character-color-2 {
  background: $color-character-2;
}

.character-color-3 {
  background: $color-character-3;
}

.character-color-4 {
  background: $color-character-4;
}
</style>
