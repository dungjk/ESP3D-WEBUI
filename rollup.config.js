import rollupCommonjs from '@rollup/plugin-commonjs';
import rollupResolve from '@rollup/plugin-node-resolve';
import rollupTs from '@rollup/plugin-typescript';
import rollupPostScss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import { html, makeHtmlAttributes } from './build/plugin-html';
import { extname } from 'path';

function toString(source) {
  if (typeof source === 'string') return source;
  if (source instanceof Buffer) return source.toString('utf8');
  return source;
}

function generateInlineElements(bundle) {
  const files = Object.values(bundle).filter(
    (file) => file.isEntry || (typeof file.type === 'string' ? file.type === 'asset' : file.isAsset)
  );
  var scripts = [];
  var styles = [];
  for (const file of files) {
    const { fileName } = file;
    const extension = extname(fileName).substring(1);
    if (extension === 'js') {
      scripts.push(`<script>${file.code}</script>`);
    } else if (extension === 'css') {
      styles.push(`<style>${toString(file.source)}</style>`);
    }
  }
  return { scripts, styles };
}

function generateHtmlBundle({ attributes, files, meta, publicPath, title, bundle }) {
  const { scripts, styles } = generateInlineElements(bundle);
  const scriptElements = scripts.join('\n');
  const styleElements = styles.join('\n');

  const metas = meta
    .map((input) => {
      const attrs = makeHtmlAttributes(input);
      return `<meta${attrs}>`;
    })
    .join('\n');

  return `
<!doctype html>
<html${makeHtmlAttributes(attributes.html)}>
<head>
${metas}
<title>${title}</title>
${styleElements}
</head>
<body>
${scriptElements}
</body>
</html>`;
}

const plugins = [
  rollupResolve(),
  rollupCommonjs(),
  rollupTs(),
  rollupPostScss({
    extract: true,
    modules: false,
  }),
];
export default [
  // {
  //   input: './src/index.tsx',
  //   plugins: [
  //     ...plugins,
  //     html({
  //       title: 'ESP3D',
  //     }),
  //   ],
  //   output: {
  //     file: './dist/bundle.js',
  //     format: 'iife',
  //   },
  // },
  {
    input: './src/index.tsx',
    plugins: [
      ...plugins,
      // terser(),
      html({
        title: 'ESP3D',
        fileName: 'index.html',
        template: generateHtmlBundle,
      }),
    ],
    output: {
      file: './dist/bundle.min.js',
      format: 'iife',
    },
  },
];
