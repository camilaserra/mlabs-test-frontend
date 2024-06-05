<template>
  <div class="social-media-wrapper" v-if="socials.length">
    <div class="social-media-header">
      <h1 class="social-media-title">Redes Sociais</h1>
    </div>
    <div class="social-media-content">
      <button
        v-for="social in socials"
        :key="social.id"
        @click="toggleSocial(social.id)"
        :class="{ active: isEnabled(social.id) }"
        :disabled="social.status === 'disabled'"
      >
        <i :class="`fab fa-${social.icon}`"></i>
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.social-media-wrapper {
  background-color: $white-100;
  border: 1px solid $gray-600;
  border-radius: 4px;

  .social-media-header {
    padding: 5px 10px;
    border-bottom: 1px solid $gray-600;

    .social-media-title {
      font-weight: 500;
      font-size: 16px;
      margin: 0px;
      text-align: start;
      color: $gray-300;
    }
  }

  .social-media-content {
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      border: 1px solid $gray-200;

      &:not(:disabled) {
        cursor: pointer;
        transition: all 0.3s;

        &:not(.active):hover {
          color: $orange-400;
          background-color: $orange-50;
          border: 1px solid $orange-400;
        }
      }
    }

    button:disabled {
      background-color: $gray-400;
      border: 1px solid $gray-500;
    }
    .active {
      background-image: linear-gradient(290deg, $red-100, $orange-400);
      color: $white-100;
      border: 1px solid $orange-400;
    }
  }
}
</style>

<script>
import { fetchSocials } from "@/services/fetchSocials";
export default {
  data() {
    return {
      socials: [],
      enabledSocials: [],
    };
  },
  mounted() {
    this.fetchSocialsData();
  },
  methods: {
    async fetchSocialsData() {
      try {
        this.socials = await fetchSocials();
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    },
    toggleSocial(socialId) {
      const index = this.enabledSocials.indexOf(socialId);
      if (index !== -1) {
        this.enabledSocials.splice(index, 1);
      } else {
        this.enabledSocials.push(socialId);
      }
      this.$emit("socials", this.enabledSocials);
    },
    isEnabled(socialId) {
      return this.enabledSocials.includes(socialId);
    },
  },
  emits: ["socials"],
};
</script>
