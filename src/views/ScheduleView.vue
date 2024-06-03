<template>
  <div class="schedule-wrapper">
    <div class="main_container">
      <div class="schedule-grid">
        <div class="schedule-collumn">
          <div class="schedule-row">
            <div class="coluna">
              <SocialMediasButtons @socials="toggleCard" />
            </div>
            <div class="coluna">
              <Data @update:date="updateDate" />
              <Hora @hora-atualizada="receberHora" />
            </div>
          </div>
          <div class="linha">
            <div class="schedule-row-2">
              <TextArea v-model="text" />
              <ImageUpload @image-selected="handleImageSelected" />
              {{ text }}
            </div>
          </div>
        </div>
        <div class="schedule-collumn">
          <div class="schedule-preview-wrapper">
            <div class="schedule-preview-header">
              <p class="schedule-preview-title">Visualização do post</p>
            </div>
            <div v-if="!anyCardEnabled">
              <img
                src="/img/elements/preview-data.png"
                style="height: 100px"
                alt="preview"
              />
            </div>

            <div class="cards-wrappers">
              <div
                class="card-wrapper-instagram"
                v-if="isCardEnabled('instagram')"
              >
                <div>
                  <div>
                    <i class="fab fa-instagram"></i>
                  </div>
                  <p>Camila</p>
                </div>
                <div v-if="uploadedImage">
                  <p>Imagem selecionada:</p>
                  <img :src="uploadedImage" alt="Imagem Selecionada" />
                </div>
                <div>
                  <div>
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                  </div>
                  <i class="far fa-bookmark"></i>
                </div>
                <div>
                  <p>{{ text }}</p>
                </div>
              </div>

              <div
                class="card-wrapper-linkedin"
                v-if="isCardEnabled('linkedin')"
              >
                <div>
                  <div>
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                  <p>Camila</p>
                  <p>
                    {{ formattedDate }}
                  </p>
                </div>
                <div>
                  <p>
                    A hora recebida do componente filho é: {{ horaRecebida }}
                  </p>
                  <p>{{ text }}</p>
                </div>
                <div v-if="uploadedImage">
                  <p>Imagem selecionada:</p>
                  <img :src="uploadedImage" alt="Imagem Selecionada" />
                </div>
                <div>
                  <p>5 comentarios</p>
                </div>
                <div>
                  <div>
                    <i class="far fa-thumbs-up"></i>
                    <i class="far fa-comment-alt"></i>
                  </div>
                  <i class="far fa-share-square"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <button>Cancelar</button>
        <button>Salvar</button>
        <button>Agendar</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.schedule-wrapper {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: $white-200;

  .schedule-grid {
    display: grid;
    grid-template-columns: repeat(2, 2fr);
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .schedule-collumn {
      .schedule-row {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        gap: 20px;
      }

      .schedule-row-2 {
        display: grid;
        grid-template-columns: repeat(1, 2fr);
        gap: 20px;
      }
    }
  }
}

.schedule-preview-wrapper {
  background-color: $white-100;
  border: 1px solid $gray-200;
  border-radius: 4px;

  .schedule-preview-header {
    padding: 5px 10px;
    border-bottom: 1px solid $gray-200;
    .schedule-preview-title {
      font-weight: 500;
      font-size: 16px;
      margin: 0px;
      text-align: start;
      color: $gray-300;
    }
  }
}

.cards-wrappers {
  display: flex;
  gap: 20px;
  overflow: scroll;
  .card-wrapper {
    padding: 10px;
    border-radius: 5px;
    background-color: white;
    border: 1px solid $gray-200;
  }
}
</style>

<script>
import SocialMediasButtons from "@/components/SocialMediasButtons.vue";
import Data from "@/components/Data.vue";
import Hora from "@/components/Hora.vue";
import TextArea from "@/components/TextArea.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import moment from "moment";
import "moment/locale/pt-br";

moment.locale("pt-br");

export default {
  components: {
    SocialMediasButtons,
    Data,
    Hora,
    TextArea,
    ImageUpload,
  },

  data() {
    return {
      enabledSocials: [],
      selectedDate: null,
      text: "",
      uploadedImage: null,
      horaRecebida: "",
    };
  },

  methods: {
    toggleCard(socialList) {
      this.enabledSocials = socialList;
    },

    isCardEnabled(socialName) {
      return this.enabledSocials.includes(socialName);
    },

    updateDate(date) {
      this.selectedDate = date;
    },

    handleImageSelected(image) {
      this.uploadedImage = image;
    },
    receberHora(hora) {
      this.horaRecebida = hora;
    },
  },

  computed: {
    formattedDate() {
      return this.selectedDate
        ? moment(this.selectedDate).format("DD [de] MMMM")
        : "selecione uma data";
    },

    anyCardEnabled() {
      return this.enabledSocials.length > 0;
    },
  },
};
</script>
