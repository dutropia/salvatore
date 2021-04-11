
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['e5Y1qPNxVwb2apgoHrg5Hs'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  