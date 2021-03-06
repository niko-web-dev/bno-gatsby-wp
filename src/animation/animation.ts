export const pageAnimation = {
  pageInitial: {
    opacity: 0,
  },
  pageAnimate: {
    opacity: 1,
    transition: {
      delay: 0.1,
    },
  },
  displayNoneAnim: {
    show: {
      opacity: 1,
      display: 'flex',
    },
    hidden: {
      opacity: 0,
      display: 'none',
    },
  },

  opasityAnim: {
    show: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  },

  scaleAnim: {
    scale: {
      scale: 2.5,
    },
    norm: {
      scale: 1,
    },
  },
};
