import { defineStore } from 'pinia';
import { useAuth } from "./auth";
import { useStats } from "./stats"

export const usePlayer = defineStore('player', {

  state: () => ({
    display_name: "",
    email: "",
    display_image: "",
  }),

  getters: {
    stats: () => useStats(),
    auth: () =>  useAuth(),
    team: () => useTeam(),
    matches: () => useMatches(),
  }
});
