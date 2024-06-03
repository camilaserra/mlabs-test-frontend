<template>
  <div class="image-uploader-wrapper" @dragover.prevent @drop="handleDrop">
    <div class="image-uploader-header">
      <p class="image-uploader-title">Upload de imagem</p>
    </div>
    <div class="image-uploader-content">
      <div
        class="image-uploader"
        @click="openFileInput"
        :class="{ 'image-uploader-dragover': dragOver }"
      >
        <input
          type="file"
          @change="handleImageUpload"
          accept="image/*"
          ref="fileInput"
          style="display: none"
        />
        <div v-if="!selectedImage">
          <img
            src="/img/elements/mdi_cloud_upload.png"
            alt="Icone uploader"
            class="image-uploader-img"
          />
          <p class="image-uploader-text">
            Arraste e solte uma imagem aqui ou clique no botão abaixo
          </p>
          <button class="image-post-button">Pesquisar imagem</button>
        </div>
        <div v-else>
          <p>{{ selectedImage.name }}</p>
          <button class="image-post-button">{{ buttonText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.image-uploader-wrapper {
  background-color: $white-100;
  border: 1px solid $gray-600;
  border-radius: 4px;

  .image-uploader-header {
    padding: 5px 10px;
    border-bottom: 1px solid $gray-600;

    .image-uploader-title {
      font-weight: 500;
      font-size: 16px;
      margin: 0px;
      text-align: start;
      color: $gray-300;
    }
  }

  .image-uploader-content {
    padding: 10px;
    .image-uploader {
      border: 2px dashed #ccc;
      padding: 20px;
      text-align: center;
      cursor: pointer;

      .image-uploader-img {
        @media (max-width: 768px) {
          display: none;
        }
      }

      .image-uploader-text {
        @media (max-width: 768px) {
          display: none;
        }
      }

      .image-post-button {
        background-color: $white-100;
        color: $blue-100;
        font-weight: 500;
        border: none;
        font-size: 16px;
        padding: 10px 20px;
        border-radius: 4px;
        border: 1px solid $blue-200;
        cursor: pointer;
        margin-top: 10px;
      }
    }
  }
}

.image-uploader-dragover {
  border-color: blue;
}
</style>

<script>
export default {
  name: "ImageUploader",
  data() {
    return {
      selectedImage: null,
      dragOver: false,
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
      this.handleFile(file);
    },
    handleDrop(event) {
      event.preventDefault();
      this.dragOver = false;
      const file = event.dataTransfer.files[0];
      this.handleFile(file);
    },
    handleFile(file) {
      if (!file) return;

      if (!file.type.startsWith("image/")) {
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
