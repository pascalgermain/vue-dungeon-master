<template>
  <div
    :class="['champion-name', {active}]"
    v-text="name"
    @mousedown.left="click()"
  ></div>
</template>

<script>
export default {
  name: 'champion-name',
  props: {
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../theme/_variables.scss';

$width: zoom(43px);
$height: zoom(7px);

.champion-name {
  width: $width;
  height: $height;
  padding: 0 zoom(1.5px); // TODO font
  background: $color-grey;
  color: $color-orange; // TODO font
  font-size: zoom(6px); // TODO font
  line-height: zoom(7px); // TODO font
  text-transform: uppercase; // TODO font
  cursor: default;

  &.active {
    color: $color-yellow; // TODO font
  }
}
</style>
