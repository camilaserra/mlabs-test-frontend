<template>
  <div class="schedule-list__wrapper">
    <div class="main_container">
      <div class="schedule-list__header">
        <p class="schedule-list__title">Listagem de Agendamentos</p>

        <FilterTable
          v-if="schedules"
          :schedules="schedules?.data"
          :statusData="status?.data"
          @update-schedules="updateSchedules"
        />
      </div>

      <table class="schedule-table">
        <thead class="schedule-table__head">
          <tr class="schedule-table__row">
            <th class="schedule-table__header schedule-table__header-title">
              Redes Sociais
            </th>
            <th class="schedule-table__header schedule-table__header-midia">
              <div>Mídia</div>
            </th>
            <th
              class="schedule-table__header schedule-table__header-description"
            >
              <div>Texto</div>
            </th>
            <th class="schedule-table__header schedule-table__header-data">
              <div>Data <i class="fas fa-arrow-down"></i></div>
            </th>
            <th class="schedule-table__header schedule-table__header-actions">
              <div>Ações</div>
            </th>
            <th class="schedule-table__header">Status</th>
          </tr>
        </thead>

        <tbody class="schedule-table__body">
          <tr
            class="schedule-table__row"
            v-for="schedule in filteredSchedules"
            :key="schedule.id"
          >
            <td class="schedule-table__cell">
              <div class="schedule-table__cell-social-networks">
                <i
                  v-for="icon in social_networks?.data.filter((icon) =>
                    schedule.social_network_key.includes(icon.id)
                  )"
                  :key="icon.id"
                  :class="[
                    `fab bg fa-${icon.icon}`,
                    icon.name === 'Instagram' && 'bg-instagram',
                    icon.name === 'Linkedin' && 'bg-linkedin',
                  ]"
                  aria-hidden="true"
                ></i>
              </div>
            </td>
            <td class="schedule-table__cell">
              <div class="schedule-table__cell-image">
                <img :src="schedule.media" :alt="schedule.media.alt" />
              </div>
            </td>
            <td class="schedule-table__cell">
              <div class="schedule-table__cell-description">
                {{ schedule.text }}
              </div>
            </td>
            <td class="schedule-table__cell">
              {{ formatDate(schedule.publication_date) }}
            </td>
            <td class="schedule-table__cell">
              <div class="schedule-table__cell-preview">
                <a href="#" @click.prevent="openModal(schedule.id)">Preview</a>
                <ModalPreview
                  :open="isModalOpen"
                  :data="{ id: currentSchedule }"
                  @close="isModalOpen = false"
                />
              </div>
            </td>
            <td class="schedule-table__cell schedule-table__cell-wrapper">
              <div class="schedule-table__cell-status">
                <div
                  class="badge"
                  :style="{
                    backgroundColor: status?.data.find(
                      (statusItem) => statusItem.id === schedule.status_key
                    ).color,
                  }"
                ></div>
                <p>
                  {{
                    status?.data.find(
                      (statusItem) => statusItem.id === schedule.status_key
                    ).name
                  }}
                </p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.schedule-list__wrapper {
  padding-top: 140px;

  @media (max-width: 767.98px) {
    padding-top: 50px;
  }

  .schedule-list__header {
    padding: 50px 0px 50px 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: 767.98px) {
      flex-direction: column;
      gap: 10px;
    }
  }

  .schedule-list__title {
    text-align: start;
    font-weight: 500;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .schedule-table {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid $gray-200;

    &__header {
      font-weight: bold;
      background-color: $white-100;
      text-align: center;
      color: $gray-100;
      font-weight: 500;
      border: 1px solid $gray-200;

      &-midia {
        div {
          text-align: center;
        }
      }

      &-description {
        width: 575px;
        div {
          text-align: start;
        }
      }

      &-data {
        div {
          display: flex;
          gap: 5px;
          align-items: center;
        }
      }

      &-actions {
        div {
          width: 70px;
          text-align: center;
        }
      }
    }

    &__header,
    &__cell {
      padding: 15px 10px;
      text-align: left;
      font-size: 16px;
      color: $gray-100;
      font-weight: 500;
    }

    &__cell {
      border-right: 1px solid $gray-200;
      font-size: 14px;

      &-social-networks {
        display: flex;
        gap: 20px;
        justify-content: center;

        .bg {
          padding: 5px;
          border-radius: 50%;
          color: $white-100;
          width: 33px;
          height: 33px;
          display: grid;
          place-items: center;

          &::before {
            font-size: 1.2rem;
          }

          &-linkedin {
            background-color: $blue-100;
            border: 1px solid $blue-100;
            transition: all 0.3s;

            &:hover {
              color: $orange-400;
              background-color: $orange-50;
              border: 1px solid $orange-400;
            }
          }

          &-instagram {
            border: 1px solid $pink-100;
            background-color: $pink-100;
            transition: all 0.3s;

            &:hover {
              color: $orange-400;
              background-color: $orange-50;
              border: 1px solid $orange-400;
            }
          }
        }
      }

      &-image {
        display: flex;
        justify-content: center;

        img {
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
      }

      &-preview {
        display: flex;
        justify-content: center;
        text-align: center;
        a {
          color: $blue-100;
          text-decoration: underline;
          transition: all 0.3s;

          &:hover {
            color: $orange-400;
          }
        }
      }

      &-wrapper {
        .schedule-table__cell-status {
          display: flex;
          align-items: center;

          .badge {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-right: 0.5rem;
          }
        }
      }
    }

    tbody {
      tr {
        &:nth-child(odd) {
          .schedule-table__cell {
            background-color: $white-100;
          }
        }

        &:nth-child(even) {
          .schedule-table__cell {
            background-color: $white-300;
          }
        }
      }
    }

    @media (max-width: 767.98px) {
      &,
      &__row,
      &__head {
        display: block;
      }

      &__header {
        display: none;
      }

      &__row {
        border-bottom: none;
      }

      &__cell {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;

        &-social-networks {
          padding: 10px 0;
        }

        &-image {
          img {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
}
</style>

<script>
import ModalPreview from "@/components/ModalPreview.vue";
import FilterTable from "@/components/FilterTable.vue";
import { format } from "date-fns";
import axios from "axios";

export default {
  components: {
    ModalPreview,
    FilterTable,
  },
  data() {
    return {
      isModalOpen: false,
      currentSchedule: null,
      schedules: null,
      filteredSchedules: null,
      status: null,
      social_networks: null,
    };
  },
  methods: {
    openModal(schedule) {
      this.currentSchedule = schedule;
      this.isModalOpen = true;
    },
    formatDate(dateString) {
      if (!dateString) return "";
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return "";
      return format(date, "dd/MM/yyyy 'às' HH:mm'h'");
    },
    updateSchedules(schedules) {
      this.filteredSchedules = schedules;
    },
  },
  mounted() {
    axios
      .all([
        axios.get("/api/schedules.json"),
        axios.get("/api/schedules-status.json"),
        axios.get("/api/social-networks.json"),
      ])
      .then(
        axios.spread(
          (responseSchedules, responseStatus, responseSocialNetworks) => {
            this.schedules = responseSchedules.data;
            this.status = responseStatus.data;
            this.social_networks = responseSocialNetworks.data;
            this.filteredSchedules = [...this.schedules.data];
          }
        )
      );
  },
};
</script>
