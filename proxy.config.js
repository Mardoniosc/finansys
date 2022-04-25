const proxy = [
  {
    context: "/api",
    // target: 'https://core-base-springboot-api.herokuapp.com',
    target: "http://api.finansys.com.br/v1",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    pathRewrite: { "^/api": "" },
  },
];
module.exports = proxy;
