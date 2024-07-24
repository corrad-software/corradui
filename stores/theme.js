import { defineStore } from "pinia";

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: "light",
    layoutType: "vertical",
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
    },
    setLayoutType(layoutType) {
      this.layoutType = layoutType;
    },
  },
});
