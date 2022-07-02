# Starter kit to create React libraries with ESBuild, TypeScript, StoryBook and Sass support

## Setup:

```
git clone https://github.com/flaviodelgrosso/react-esbuild-typescript-scss-starter-kit.git
cd react-esbuild-typescript-scss-starter-kit
yarn
```

## Development:

You can run it launching StoryBook with the command `yarn storybook`. It will start a development server on port 3000 where you can preview, test and document isolated components you're going to create.
Check https://storybook.js.org/ for additional informations.

## Build:

The build process is performed with ESBuild for bundling and minifying. https://esbuild.github.io/
Here there's a basic configuration you can customize to your needs:

```javascript
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
```
