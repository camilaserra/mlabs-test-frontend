<template>
  <div class="image-preview-wrapper">
    <p>
      Aguardando conteúdo. Informe os canais e as mídias desejadas para
      visualização.
    </p>
    <img src="/img/elements/preview-data.png" alt="Image preview" />
  </div>
</template>

<style lang="scss" scoped>
.image-preview-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  p {
    margin: 0px;
    max-width: 100%;
    width: 500px;
    font-size: 20px;
    padding-bottom: 20px;
    padding-top: 20px;

    @media (max-width: 1020px) {
      font-size: 16px;
      width: 100%;
    }
  }

  img {
    height: 300px;
  }
}
</style>
