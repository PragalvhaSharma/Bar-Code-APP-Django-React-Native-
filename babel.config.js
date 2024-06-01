// Babel is primarily used to transform modern JavaScript (ES6+) into a version of JavaScript that is compatible with older environments, such as older browsers or older versions of Node.js. It can also be used to transform JSX syntax used in React into JavaScript that can be understood by these environments.


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};
