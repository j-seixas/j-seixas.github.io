module.exports = {
  chainWebpack: config => {
    config.module.rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader').loader('file-loader')

    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'João Seixas, Informatics and Computing Engineering Student'
        return args
      })
  }
}