<template>
  <div
    :class="['character-name', {active}]"
    v-text="name"
  ></div>
</template>

<script>
export default {
  name: 'character-name',
  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

.character-name {
  position: absolute;
  left: 0;
  top: 0;
  width: double(86px);
  height: double(14px);
  padding: 0 double(3px);
  background: $color-grey;
  color: $color-grey-light;
  font-size: double(11px);
  line-height: double(15px);
  text-transform: uppercase;

  &.active {
    color: $color-orange;
  }
}
</style>
