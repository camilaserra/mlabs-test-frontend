<template>
  <div class="modal-wrapper" v-if="open">
    <div @click="close" class="modal-overlay"></div>
    <div class="modal-content">
      <p>{{ data }}</p>

      <img :src="getImageSrc" alt="" />
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
      background-color: transparent;
      z-index: 1;
      width: 800px;
      height: 800px;
      display: grid;
      place-items: center;
      border-radius: 8px;
      box-shadow: 0 0 10px rgb(255, 255, 255);
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
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close", false);
    },

    getImageSrc() {
      if (!this.data || !this.data.media) {
        return ""; // return empty string if no media data
      }

      const reader = new FileReader();

      // Define a promise to handle the asynchronous reading of the blob
      const readBlob = new Promise((resolve, reject) => {
        reader.onload = () => {
          resolve(reader.result);
        };
        reader.onerror = reject;
      });

      reader.readAsDataURL(this.data.media); // Convert blob to data URL

      return readBlob;
    },
  },
};
</script>
