<template>
  <div class="modal-wrapper" v-if="open">
    <div @click="close" class="modal-overlay"></div>
    <div class="modal-content">
      {{ data }}
      <div class="schedule-cards-wrapper">
        <div
          class="schedules-card-linkedin"
          v-if="data.social_network_key.includes(1)"
        >
          <div class="linkedin__header">
            <div class="linkedin-icon">
              <i class="fab fa-linkedin-in"></i>
            </div>
            <div class="linkedin-name">
              <p>Anselmo Carlos</p>
              <p class="instagram-date">{{ formattedDate }}</p>
            </div>
          </div>

          <div class="linkedin__description">
            <p>{{ data.text }}</p>
          </div>

          <div class="linkedin__image">
            <img :src="data.media" alt="Imagem do post" />
          </div>
          <div class="linkedin__comments">
            <p>5 comentarios</p>
          </div>
          <div class="linkedin__favorites">
            <i class="far fa-thumbs-up"></i>
            <i class="far fa-comment-alt"></i>
            <i class="far fa-share-square"></i>
          </div>
        </div>

        <div
          class="schedules-card-instagram"
          v-if="data.social_network_key.includes(2)"
        >
          <div class="instagram__header">
            <div class="instagran-icon">
              <i class="fab fa-instagram"></i>
            </div>
            <p>Anselmo Carlos</p>
          </div>

          <div class="instagram__image">
            <img :src="data.media" alt="Imagem Post" />
          </div>

          <div class="instagram__favorites">
            <div>
              <i class="far fa-heart"></i>
              <i class="far fa-comment"></i>
            </div>
            <i class="far fa-bookmark"></i>
          </div>
          <div class="instagram__description">
            <p>{{ data.text }}</p>
          </div>
        </div>
      </div>
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
      background-color: $white-100;
      margin: 0 20px;
      padding: 20px;
      z-index: 1;
      max-width: 500px;
      width: 100%;
      display: grid;
      place-items: center;
      border-radius: 8px;
      box-shadow: 0 0 10px #0000002e;
      overflow-x: auto;

      .schedule-cards-wrapper {
        display: flex;
        gap: 20px;

        .schedules-card-instagram {
          background-color: $white-100;
          border: 1px solid $gray-600;
          border-radius: 4px;
          width: 368px;
          height: 100%;

          .instagram__header {
            padding: 10px;
            display: flex;
            gap: 10px;
            align-items: center;
            border-bottom: 1px solid $gray-600;

            .instagran-icon {
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              background-image: linear-gradient(180deg, #ef2ea2, #e0a22b);
              i {
                font-size: 20px;
                color: $white-100;
              }
            }
            p {
              font-weight: 500;
              color: $black-100;
              margin: 0;
            }
          }

          .instagram__image {
            width: 100%;
            aspect-ratio: 1/1;
            background-color: #00000011;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .instagram__favorites {
            padding: 5px 10px 0 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;

            div {
              display: flex;
              gap: 10px;
            }

            i {
              font-size: 20px;
              color: $gray-300;
            }
          }

          .instagram__description {
            padding: 5px 10px 10px 10px;

            p {
              text-align: start;
              font-size: 14px;
              color: $gray-100;
              margin: 0px;
            }
          }
        }

        .schedules-card-linkedin {
          background-color: $white-100;
          border: 1px solid $gray-600;
          border-radius: 4px;
          width: 368px;
          height: 100%;

          .linkedin__header {
            padding: 10px 10px 0 10px;
            display: flex;
            gap: 10px;
            align-items: center;

            .linkedin-icon {
              width: 40px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 50%;
              background-color: $blue-100;
              i {
                font-size: 20px;
                color: $white-100;
              }
            }

            .linkedin-name {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              p {
                font-weight: 500;
                color: $black-100;
                margin: 0;
              }
              p.instagram-date {
                font-size: 12px;
                color: $gray-300;
                margin: 0;
              }
            }
          }

          .linkedin__description {
            p {
              margin: 0;
              text-align: start;
              padding: 10px;
              font-size: 14px;
            }
          }

          .linkedin__image {
            width: 100%;
            aspect-ratio: 1;
            background-color: #00000011;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .linkedin__comments {
            padding: 10px;
            p {
              margin: 0;
              font-size: 14px;
              color: $gray-100;
              text-align: start;
            }
          }

          .linkedin__favorites {
            padding: 0 10px 10px 10px;
            display: flex;
            align-items: flex-start;
            gap: 10px;

            i {
              font-size: 20px;
              color: $gray-300;
            }
          }

          .instagram__description {
            padding: 5px 10px 10px 10px;

            p {
              text-align: start;
              font-size: 14px;
              color: $gray-100;
              margin: 0px;
            }
          }
        }
      }
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
import moment from "moment";
import "moment/locale/pt-br";
moment.locale("pt-br");
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
  watch: {
    "data.media": {
      immediate: true,
      handler(newVal, oldVal) {
        if (newVal && newVal !== oldVal) {
          this.convertBlobToBase64(newVal);
        }
      },
    },
  },
  methods: {
    close() {
      this.$emit("close", false);
    },
    async convertBlobToBase64(blobUrl) {
      try {
        const response = await fetch(blobUrl);
        const blob = await response.blob();
        const base64Image = await this.blobToBase64(blob);
        this.imageSrc = base64Image;
      } catch (error) {
        console.error("Erro ao converter blob para base64:", error);
      }
    },
    blobToBase64(blob) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    },
  },
  computed: {
    getImageSrc() {
      return this.data.image_url;
    },

    formattedDate() {
      return this.data.publication_date
        ? moment(this.data.publication_date).format("DD [de] MMMM")
        : "";
    },
  },
};
</script>
