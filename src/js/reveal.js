import ScrollReveal from "scrollreveal";

ScrollReveal({ distance: "60px", duration: 1000, reset: true, mobile: false });
ScrollReveal().reveal(".header", { origin: "top" });
ScrollReveal().reveal(".discover__desc", { origin: "left", mobile: false });
ScrollReveal().reveal(".discover__picture", { origin: "right", mobile: false });
ScrollReveal().reveal(".popular", { origin: "right", mobile: false });
ScrollReveal().reveal(".services", { origin: "left", mobile: false });
ScrollReveal().reveal(".explore", { origin: "right", mobile: false });
