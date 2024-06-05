<template>
  <div>
    <ButtonWhite>Cancelar</ButtonWhite>
    <ButtonBlueOutlined>Salvar rascunho</ButtonBlueOutlined>
    <ButtonBlue>Agendar</ButtonBlue>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  margin-top: 10px;
  padding: 20px;
  gap: 20px;
  align-items: center;
  justify-content: end;
  background: $white-100;
}
</style>

<script>
import ButtonWhite from "@/components/buttons/ButtonWhite.vue";
import ButtonBlue from "@/components/buttons/ButtonBlue.vue";
import ButtonBlueOutlined from "@/components/buttons/ButtonBlueOutlined.vue";

export default {
  components: {
    ButtonWhite,
    ButtonBlue,
    ButtonBlueOutlined,
  },
};
</script>
