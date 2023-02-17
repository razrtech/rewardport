exports.createPages = ({ actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/`,
    toPath: `/loyalty-program-campaigns`,
    redirectInBrowser: true,
    isPermanent: true,
  });
};
