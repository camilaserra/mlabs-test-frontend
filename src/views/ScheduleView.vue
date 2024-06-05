<template>
  <div>
    <ModalSuccess :open="isModalOpen" @close="isModalOpen = false" />
    <div class="schedule-wrapper">
      <div class="main_container">
        <div class="schedule-grid">
          <div class="schedule-collumn-one">
            <div class="schedule-row">
              <SocialMediasButtons @socials="toggleCard" />

              <div class="schedule-date-wrapper">
                <div class="schedule-date-header">
                  <p class="schedule-date-title">Data de publicação</p>
                </div>
                <div class="shedule-dade-content">
                  <Data @update:date="updateDate" />
                  <Hora @hora-atualizada="receberHora" />
                </div>
              </div>
            </div>

            <div class="schedule-row-2">
              <TextArea @textAreaValue="handleTextAreaValue" />
              <ImageUpload @image-selected="handleImageSelected" />
            </div>
          </div>

          <div class="schedule-collum-two">
            <div class="schedule-preview-header">
              <p class="schedule-preview-title">Visualização do post</p>
            </div>

            <div class="schedule-preview-content">
              <ImagePreview v-if="!anyCardEnabled" />

              <div class="schedule-cards-wrapper">
                <div class="schedules-card-instagram" v-if="isCardEnabled(1)">
                  <div class="instagram__header">
                    <div class="instagran-icon">
                      <i class="fab fa-instagram"></i>
                    </div>
                    <p>Anselmo Carlos</p>
                  </div>

                  <div class="instagram__image">
                    <img
                      v-if="uploadedImage"
                      :src="uploadedImage"
                      alt="Imagem Post"
                    />
                  </div>

                  <div class="instagram__favorites">
                    <div>
                      <i class="far fa-heart"></i>
                      <i class="far fa-comment"></i>
                    </div>
                    <i class="far fa-bookmark"></i>
                  </div>
                  <div class="instagram__description">
                    <p>{{ textAreaValue }}</p>
                  </div>
                </div>

                <div class="schedules-card-linkedin" v-if="isCardEnabled(2)">
                  <div class="linkedin__header">
                    <div class="linkedin-icon">
                      <i class="fab fa-linkedin-in"></i>
                    </div>
                    <p>Anselmo Carlos</p>
                    <p>{{ formattedDate }}</p>
                  </div>

                  <div class="linkedin__description">
                    <p>{{ textAreaValue }}</p>
                  </div>

                  <div class="linkedin__image">
                    <img
                      v-if="uploadedImage"
                      :src="uploadedImage"
                      alt="Imagem Selecionada"
                    />
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
      </div>
      <div class="schedule-footer-wrapper">
        <div class="main_container">
          <div class="schedule-footer-buttons">
            <button class="button-white">Cancelar</button>
            <button class="button-blue-outlined">Salvar Rascunho</button>
            <a href="#" @click.prevent="openModal"> {{ toISODateTime }}</a>
            <button
              :class="{
                'button-blue': scheduleButtonRules,
                'button-disabled': !scheduleButtonRules,
              }"
              @click="submitSchedule"
              :disabled="!scheduleButtonRules"
            >
              Agendar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.schedule-wrapper {
  background-color: $white-200;
  padding-top: 140px;
  padding-bottom: 100px;

  .schedule-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }

    .schedule-collumn-one {
      display: grid;
      gap: 20px;
      .schedule-row {
        display: grid;
        grid-template-columns: repeat(2, 2fr);
        gap: 20px;

        @media screen and (max-width: 768px) {
          grid-template-columns: repeat(1, 1fr);
        }

        .schedule-date-wrapper {
          background-color: $white-100;
          border: 1px solid $gray-600;
          border-radius: 4px;

          .schedule-date-header {
            padding: 5px 10px;
            border-bottom: 1px solid $gray-600;

            .schedule-date-title {
              font-weight: 500;
              font-size: 16px;
              margin: 0px;
              text-align: start;
              color: $gray-300;
            }
          }

          .shedule-dade-content {
            position: relative;
            padding: 10px;
            display: flex;
            gap: 10px;

            @media screen and (max-width: 768px) {
              display: grid;
              grid-template-columns: repeat(2, 2fr);
            }
          }
        }
      }

      .schedule-row-2 {
        display: grid;
        grid-template-columns: repeat(1, 2fr);
        gap: 20px;
      }
    }

    .schedule-collum-two {
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      background-color: $white-100;
      border: 1px solid $gray-600;
      border-radius: 4px;

      .schedule-preview-header {
        padding: 5px 10px;
        border-bottom: 1px solid $gray-600;

        .schedule-preview-title {
          font-weight: 500;
          font-size: 16px;
          margin: 0px;
          text-align: start;
          color: $gray-300;
        }
      }

      .schedule-preview-content {
        padding: 10px;
        display: flex;
        align-items: center;
        flex: 1;
        height: 100%;
        gap: 20px;

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
              }
            }

            .instagram__image {
              width: 100%;
              aspect-ratio: 1/1;

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
              padding: 10px;
              display: flex;
              gap: 10px;
              align-items: center;
              border-bottom: 1px solid $gray-600;

              .linkedin-icon {
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
              }
            }

            .linkedin__description {
              p {
                margin: 0;
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
        }
      }
    }
  }
}

.schedule-footer-wrapper {
  background: $white-100;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  .schedule-footer-buttons {
    display: flex;
    margin-top: 10px;
    padding: 20px;
    gap: 20px;
    align-items: center;
    justify-content: end;

    .button-white {
      background-color: $white-100;
      color: $blue-200;
      padding: 10px 20px;
      border: 1px solid $white-100;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
      &:hover {
        background-color: $white-100;
        border: 1px solid $blue-200;
      }
    }

    .button-blue-outlined {
      background-color: $white-100;
      color: $blue-200;
      padding: 10px 20px;
      border: 1px solid $blue-200;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
      &:hover {
        background-color: $blue-200;
        color: $white-100;
      }
    }

    .button-blue {
      background-color: $blue-200;
      color: $white-100;
      padding: 10px 20px;
      border: 1px solid $blue-200;
      border-radius: 5px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
      &:hover {
        background-color: $white-100;
        color: $orange-200;
        border: 1px solid $orange-200;
      }
    }

    .button-disabled {
      background-color: $gray-200;
      color: $white-100;
      padding: 10px 20px;
      border: 1px solid $gray-200;
      border-radius: 5px;
      cursor: not-allowed;
      font-size: 16px;
      transition: background-color 0.3s;
    }
  }
}
</style>

<script>
import SocialMediasButtons from "@/components/SocialMediasButtons.vue";
import Data from "@/components/Data.vue";
import Hora from "@/components/Hora.vue";
import TextArea from "@/components/TextArea.vue";
import ImageUpload from "@/components/ImageUpload.vue";
import ImagePreview from "@/components/ImagePreview.vue";
import moment from "moment";
import "moment/locale/pt-br";
import ScheduleService from "@/services/scheduleservice";
import ModalSuccess from "@/components/ModalSuccess.vue";

moment.locale("pt-br");

export default {
  components: {
    SocialMediasButtons,
    Data,
    Hora,
    TextArea,
    ImageUpload,
    ImagePreview,
    ModalSuccess,
  },

  data() {
    return {
      isModalOpen: false,
      enabledSocials: [],
      selectedDate: null,
      text: "",
      uploadedImage: null,
      timeReceived: "",
      textAreaValue: "",
    };
  },

  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    toggleCard(socialList) {
      this.enabledSocials = socialList;

      console.log({ enabledSocials: this.enabledSocials, socialList });
    },

    isCardEnabled(socialName) {
      return this.enabledSocials.includes(socialName);
    },

    updateDate(date) {
      this.selectedDate = date;
    },
    receberHora(hora) {
      this.timeReceived = hora;
    },

    dateTime() {
      return this.selectedDate && this.timeReceived;
    },

    handleImageSelected(image) {
      this.uploadedImage = image;
    },
    handleTextAreaValue(value) {
      this.textAreaValue = value;
    },

    submitSchedule() {
      let payload = {};

      let savedSchedules;

      let lastId;

      if (localStorage.getItem("schedules") === null) {
        ScheduleService.fetchAllData()
          .then(
            ([responseSchedules, responseStatus, responseSocialNetworks]) => {
              localStorage.setItem(
                "schedules",
                JSON.stringify(responseSchedules.data)
              );
              localStorage.setItem(
                "status",
                JSON.stringify(responseStatus.data)
              );
              localStorage.setItem(
                "social_networks",
                JSON.stringify(responseSocialNetworks.data)
              );
              savedSchedules = responseSchedules.data;
              lastId = savedSchedules.data[savedSchedules.data.length - 1]?.id;

              payload.id = lastId + 1;
              payload.media = this.uploadedImage;
              payload.publication_date = new Date(
                this.toISODateTime
              ).toISOString();
              payload.social_network_key = this.enabledSocials;
              payload.status_key = 1;
              payload.text = this.textAreaValue;

              savedSchedules.data.push(payload);

              localStorage.setItem("schedules", JSON.stringify(savedSchedules));

              this.openModal();
            }
          )
          .catch((error) => {
            console.error("Error fetching data:", error);
          });
      } else {
        savedSchedules = JSON.parse(localStorage.getItem("schedules"));
        lastId = savedSchedules.data[savedSchedules.data.length - 1]?.id;

        payload.id = lastId + 1;
        payload.media = this.uploadedImage;
        payload.publication_date = new Date(this.toISODateTime).toISOString();
        payload.social_network_key = this.enabledSocials;
        payload.status_key = 1;
        payload.text = this.textAreaValue;

        savedSchedules.data.push(payload);

        localStorage.setItem("schedules", JSON.stringify(savedSchedules));

        this.openModal();
      }
    },
  },

  computed: {
    formattedDate() {
      return this.selectedDate
        ? moment(this.selectedDate).format("DD [de] MMMM")
        : "selecione uma data";
    },

    /* toISODateTime() {
      return this.selectedDate && this.timeReceived
        ? moment(
            `${this.selectedDate} ${this.timeReceived}`,
            "YYYY-MM-DD HH:mm"
          ).toISOString()
        : null;
    }, */

    toISODateTime() {
      if (this.selectedDate && this.timeReceived) {
        const dateTimeString = `${this.selectedDate} ${this.timeReceived}`;
        const dateTime = moment(dateTimeString, "YYYY-MM-DD HH:mm");
        return dateTime.isValid() ? dateTime.toISOString() : null;
      }
      return null;
    },

    anyCardEnabled() {
      return this.enabledSocials.length > 0;
    },

    scheduleButtonRules() {
      return (
        this.enabledSocials.length > 0 &&
        Boolean(this.selectedDate) &&
        Boolean(this.timeReceived)
      );
    },
  },
};
</script>
