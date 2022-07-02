const esbuild = require('esbuild');
const { sassPlugin } = require('esbuild-sass-plugin');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

esbuild
  .build({
    entryPoints: ['src/index.ts'],
    outdir: 'dist',
    bundle: true,
    metafile: true,
    minify: true,
    external: ['react', 'react-dom'],
    plugins: [
      sassPlugin({
        async transform(source) {
          const { css } = await postcss([autoprefixer]).process(source);
          return css;
        },
      }),
    ],
  })
  .then(() => console.log('⚡ Build complete! ⚡'))
  .catch(() => process.exit(1));
