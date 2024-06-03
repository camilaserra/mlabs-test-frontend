<template>
  <div class="filter-container">
    <label for="filter" class="filter-header">Filtrar por:</label>
    <select
      id="filter"
      class="filter-select"
      @change="handleFilterChange"
      v-model="selectedOption"
    >
      <option value="date_desc">Mais Recente</option>
      <option value="date_asc">Mais Antiga</option>
      <option value="status">Agendado</option>
      <option value="status_not_approved">Não Aprovado</option>
      <option value="status_posted">Postado</option>
      <option value="status_posted_with_remarks">Postado com ressalvas</option>
    </select>
  </div>
</template>

<style lang="scss" scoped>
.filter-container {
  display: flex;
  align-items: flex-center;
  background-color: $white-100;
  border: 1px solid $gray-200;
  border-radius: 4px;

  .filter-header {
    padding: 5px 10px;
  }

  select {
    padding: 0px 10px;
    color: $orange-300;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    background-color: white;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='none' stroke='%23666' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' stroke-width='1.5' d='M2 4l6 6 6-6'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 10px;
    cursor: pointer;
  }

  select:focus {
    outline: none;
    color: #333;
  }
}
</style>

<script>
export default {
  props: {
    schedules: {
      type: Array,
      required: true,
    },
    statusData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedOption: "date_desc",
    };
  },
  watch: {
    selectedOption() {
      this.handleFilterChange();
    },
  },
  methods: {
    handleFilterChange() {
      let filteredSchedules = [];
      if (this.selectedOption === "date_desc") {
        filteredSchedules = this.sortByDate([...this.schedules], false);
      } else if (this.selectedOption === "date_asc") {
        filteredSchedules = this.sortByDate([...this.schedules], true);
      } else if (this.selectedOption === "status") {
        filteredSchedules = this.filterByStatus("Agendado");
      } else if (this.selectedOption === "status_not_approved") {
        filteredSchedules = this.filterByStatus("Não aprovado");
      } else if (this.selectedOption === "status_posted") {
        filteredSchedules = this.filterByStatus("Postado");
      } else if (this.selectedOption === "status_posted_with_remarks") {
        filteredSchedules = this.filterByStatus("Postado com ressalvas");
      }
      this.$emit("update-schedules", filteredSchedules);
    },
    sortByDate(schedules, ascending) {
      schedules.sort((a, b) => {
        if (ascending) {
          return new Date(a.publication_date) - new Date(b.publication_date);
        } else {
          return new Date(b.publication_date) - new Date(a.publication_date);
        }
      });
      return schedules;
    },
    filterByStatus(statusName) {
      return this.schedules.filter((schedule) => {
        return (
          this.statusData.find((status) => status.id === schedule.status_key)
            ?.name === statusName
        );
      });
    },
  },
  mounted() {
    this.handleFilterChange();
  },
};
</script>
