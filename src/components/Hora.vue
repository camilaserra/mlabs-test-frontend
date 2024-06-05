<template>
  <div>
    <input type="time" v-model="horaSelecionada" @change="atualizarHora" />
  </div>
</template>

<style lang="scss" scoped>
input {
  height: -webkit-fill-available;
  flex: 1;
  padding: 0px 5px;
  border: 1px solid $gray-600;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-family: inherit;
  color: $gray-800;
  background-color: $white-100;
  background-clip: padding-box;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  @media screen and (max-width: 768px) {
    width: -webkit-fill-available;
  }
}
</style>

<script>
export default {
  name: "SelecionarHora",
  data() {
    return {
      horaSelecionada: "",
    };
  },
  methods: {
    atualizarHora() {
      this.$emit("hora-atualizada", this.horaSelecionada);
    },
  },
};
</script>
