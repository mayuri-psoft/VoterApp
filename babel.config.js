module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['module:@react-native/babel-preset'],
    plugins: [
      [
        'babel-plugin-inline-import',
        {
          extensions: ['.svg'],
        },
      ],
      'react-native-reanimated/plugin', // This must be the last plugin
    ],
  };
};
