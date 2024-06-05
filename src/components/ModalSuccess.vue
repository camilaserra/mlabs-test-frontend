<template>
  <div class="modal-wrapper" v-if="open">
    <div @click="close" class="modal-overlay"></div>
    <div class="modal-content">
      <img src="/img/elements/success.png" alt="Image success" />
      <p>Agendado com sucesso!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: grid;
    place-items: center;
    z-index: 1000;

    .modal-content {
      background-color: $orange-100;
      z-index: 1;
      width: 800px;
      height: 800px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      box-shadow: 0 0 10px rgb(255, 255, 255);
    }
    .modal-overlay {
      background-color: rgba(33, 24, 24, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: grid;
      place-items: center;
      cursor: pointer;
    }
  }
}
</style>

<script>
export default {
  name: "ModalPreview",
  components: {},
  data() {
    return {};
  },
  emits: ["close"],
  props: {
    open: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
    },
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
