import axios from "axios";

const ScheduleService = {
  fetchAllData() {
    return axios.all([
      axios.get("/api/schedules/schedules.json"),
      axios.get("/api/schedules/schedules-status.json"),
      axios.get("/api/networks/social-networks.json"),
    ]);
  },
};

export default ScheduleService;
