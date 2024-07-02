import autoComplete from "@tarekraafat/autocomplete.js";
import countries from "./_countres.js";

const autoCompleteJS = new autoComplete({
  selector: "#location",
  placeHolder: "e.g Bali, Indonesia",
  data: {
    src: countries,
    cache: true,
  },
  resultItem: {
    highlight: true,
  },
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});
