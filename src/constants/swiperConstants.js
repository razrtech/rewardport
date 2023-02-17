export const workSlider = (desktopPerView = 4, mobilePerView = 1.2) => {
  return {
    observer: true,
    observeParents: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: mobilePerView,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: desktopPerView,
        spaceBetween: 10,
      },
    },
  };
};

export const brandsSlider = {
  observer: true,
  observeParents: true,
  slidesPerView: 1.6,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
};
