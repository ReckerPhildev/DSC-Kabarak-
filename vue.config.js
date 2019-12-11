module.exports = {
  productionSourceMap: false,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/' + process.env.CI_PROJECT_NAME + '/'
    : '/',
  pwa: {
    name: 'DSC Kabarak web app',
    workboxPluginMode: 'InjectManifest',
    themeColor: '#4A90E2',
    workboxOptions: {
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
    },
  }
}
