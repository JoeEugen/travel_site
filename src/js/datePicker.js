import { easepick } from "@easepick/bundle";

const picker = new easepick.create({
  element: "#date",
  css: ["https://cdn.jsdelivr.net/npm/@easepick/bundle@1.2.1/dist/index.css"],
  zIndex: 10,
  format: "DD MMMM YYYY",
});
