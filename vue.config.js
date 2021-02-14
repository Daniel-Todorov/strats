module.exports = {
  lintOnSave: false,
  outputDir: './server/public',

  pluginOptions: {
    i18n: {
      locale: 'bg',
      fallbackLocale: 'en',
      localeDir: 'translations',
      enableInSFC: true
    }
  }
};
