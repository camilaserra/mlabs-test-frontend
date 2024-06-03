<template>
  <div class="social-media-wrapper">
    <div class="social-media-header">
      <h2 class="social-media-title">Redes Sociais</h2>
    </div>
    <div class="social-media-content">
      <button
        @click="toggleSocial('instagram')"
        :class="{ active: isEnabled('instagram') }"
        :disabled="!isClickable('instagram')"
      >
        <i class="fab fa-instagram"></i>
      </button>
      <button
        @click="toggleSocial('linkedin')"
        :class="{ active: isEnabled('linkedin') }"
        :disabled="!isClickable('linkedin')"
      >
        <i class="fab fa-linkedin-in"></i>
      </button>
      <button
        @click="toggleSocial('youtube')"
        :class="{ active: isEnabled('youtube') }"
        :disabled="true"
      >
        <i class="fab fa-youtube"></i>
      </button>
      <button
        @click="toggleSocial('pinterest')"
        :class="{ active: isEnabled('pinterest') }"
        :disabled="true"
      >
        <i class="fab fa-pinterest"></i>
      </button>
      <button
        @click="toggleSocial('x')"
        :class="{ active: isEnabled('x') }"
        :disabled="true"
      >
        <i class="fab fa-pinterest"></i>
      </button>
      <button
        @click="toggleSocial('facebook')"
        :class="{ active: isEnabled('facebook') }"
        :disabled="true"
      >
        <i class="fab fa-facebook-f"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enabledSocials: [],
    };
  },
  methods: {
    toggleSocial(social) {
      const index = this.enabledSocials.indexOf(social);
      if (index !== -1) {
        this.enabledSocials.splice(index, 1);
      } else {
        this.enabledSocials.push(social);
      }
      this.$emit("socials", this.enabledSocials);
    },
    isEnabled(social) {
      return this.enabledSocials.includes(social);
    },
    isClickable(social) {
      return social === "instagram" || social === "linkedin";
    },
  },
  emits: ["socials"],
};
</script>

<style lang="scss" scoped>
.social-media-wrapper {
  background-color: $white-100;
  border: 1px solid $gray-200;
  border-radius: 4px;

  .social-media-header {
    padding: 5px 10px;
    border-bottom: 1px solid $gray-200;

    .social-media-title {
      font-weight: 500;
      font-size: 16px;
      margin: 0px;
      text-align: start;
      color: $gray-300;
    }
  }

  .social-media-content {
    padding: 5px 10px;
    display: flex;
    justify-content: space-around;

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
