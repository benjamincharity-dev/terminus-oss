const addonConfigs = require('./utilities/addon-configs');

module.exports = {
  // Please do NOT commit any change to the `stories` array.
  // It is dynamically replaced with a list of NX affected projects during the CI process.
  stories: [STORIES],
  addons: [
    '@storybook/addon-essentials',
    ...addonConfigs.addonsNoEssentials,
  ],
};
