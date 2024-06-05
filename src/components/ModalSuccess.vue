<template>
  <div class="modal-wrapper" v-if="open">
    <div @click="close" class="modal-overlay"></div>
    <div class="modal-content">
      <img src="/img/elements/success.png" alt="Image success" />
      <p>Agendado com sucesso!</p>
      <a href="/lista-de-agendamentos"
        ><button class="button-blue">Ok</button></a
      >
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
      background-color: $white-100;
      margin: 0 20px;
      padding: 20px;
      z-index: 1;
      max-width: 500px;
      width: 100%;
      display: grid;
      place-items: center;
      border-radius: 8px;
      box-shadow: 0 0 10px #0000002e;

      .button-blue {
        background-color: $blue-200;
        color: $white-100;
        padding: 10px 20px;
        border: 1px solid $blue-200;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s;
        &:hover {
          background-color: $white-100;
          color: $orange-200;
          border: 1px solid $orange-200;
        }
      }
    }
    .modal-overlay {
      background-color: rgba(33, 24, 24, 0.273);
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
