<template>
  <div class="home-wrapper">
    <img
      src="/img/elements/vetorPhone.png"
      alt="Vetor Phone"
      class="home-image"
    />
    <router-link to="/agendamento">
      <ButtonOrange>Agendar post</ButtonOrange>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.home-wrapper {
  padding-top: 150px;
  padding-bottom: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: $white-200;

  .home-image {
    width: 300px;
  }
}
</style>

<script>
import ButtonOrange from "@/components/buttons/ButtonOrange.vue";

export default {
  components: {
    ButtonOrange,
  },
};
</script>
