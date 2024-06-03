<template>
  <div class="image-uploader">
    <input
      type="file"
      @change="handleImageUpload"
      accept="image/*"
      ref="fileInput"
      style="display: none"
    />
    <div v-if="!selectedImage">
      <p>Arraste uma imagem aqui ou clique no botão abaixo</p>
      <button @click="openFileInput">Pesquisar imagem</button>
    </div>
    <div v-else>
      <p>{{ selectedImage.name }}</p>
      <button @click="openFileInput">{{ buttonText }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-uploader {
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  cursor: pointer;
}
</style>

<script>
export default {
  name: "ImageUploader",
  data() {
    return {
      selectedImage: null,
    };
  },
  computed: {
    buttonText() {
      return this.selectedImage
        ? "Selecionar outra imagem"
        : "Pesquisar imagem";
    },
  },
  methods: {
    openFileInput() {
      this.$refs.fileInput.click();
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      if (event.target.files.length > 1 || !file.type.startsWith("image/")) {
        alert("Por favor, selecione apenas uma imagem.");
        return;
      }

      this.selectedImage = file;
      const imageUrl = URL.createObjectURL(file);
      this.$emit("image-selected", imageUrl);
    },
  },
};
</script>
