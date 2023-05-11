import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import homeEn from "./lenguages/global/en.json";
import homePt from "./lenguages/global/pt.json";

const pt = {
  translation: {
    ...homePt,
  },
};

const en = {
  translation: {
    ...homeEn,
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en: { ...en },
    pt: { ...pt },
  },
  lng: "pt",
});
