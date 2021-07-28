module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['*.ts', '*.tsx'],
      },
    ],
    ['@babel/plugin-transform-typescript'],
  ],
};
