/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import html from '@web/rollup-plugin-html';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import * as path from 'path';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';

export default {
  plugins: [
    html({rootDir: path.join(process.cwd(), 'dev'), flattenOutput: false}),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    resolve(),
    minifyHTML(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    copy({
      target: [
        {src: 'src/assets/*', dest: 'dist/public/assets'},
      ],
    }),
    summary(),
  ],
  input: './**/*.html',
  output: {
    dir: 'dist',
    assetFileNames: `assets/[name].[ext]`,
  },
  preserveEntrySignatures: 'strict',
};