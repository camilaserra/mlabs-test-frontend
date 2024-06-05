<template>
  <button class="button-orange">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-orange {
  background-color: $orange-200;
  color: $white-100;
  padding: 10px 20px;
  border: 1px solid $orange-300;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  &:hover {
    background-color: $orange-100;
  }
}
</style>
