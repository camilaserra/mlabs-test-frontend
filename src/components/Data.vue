<template>
  <div>
    <DatePicker
      v-model="selectedDate"
      format="DD/MM/YYYY"
      placeholder="DD/MM/YYYY"
    ></DatePicker>
  </div>
</template>

<style lang="scss" scoped></style>

<script>
import "vue2-datepicker/index.css";
import DatePicker from "vue2-datepicker";

export default {
  name: "DataPicker",
  components: {
    DatePicker,
  },
  data() {
    return {
      selectedDate: null,
      enabledDate: "",
    };
  },
  watch: {
    selectedDate() {
      this.$emit("update:date", this.selectedDate);
    },
  },
  emits: ["update:date"],
};
</script>
