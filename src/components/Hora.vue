<template>
  <div>
    <input type="time" v-model="horaSelecionada" @change="atualizarHora" />
    <p>A hora selecionada é: {{ horaSelecionada }}</p>
  </div>
</template>

<style lang="scss" scoped></style>

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
