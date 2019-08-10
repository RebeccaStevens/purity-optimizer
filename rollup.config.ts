/**
 * Rollup Config.
 */

import { basename } from 'path';
import { RollupOptions } from 'rollup';
import rollupPluginCommonjs from 'rollup-plugin-commonjs';
import rollupPluginNodeResolve from 'rollup-plugin-node-resolve';
import rollupPluginTypescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

const common: Partial<RollupOptions> = {
  input: 'src/index.ts',

  external: (id) =>
    // Not a Local File?
    !(id.startsWith('.') || id.startsWith('/')),

  treeshake: {
    annotations: true,
    propertyReadSideEffects: false
  }
};

const cjs: RollupOptions = {
  ...common,

  output: {
    dir: './lib',
    entryFileNames: basename(pkg.main),
    chunkFileNames: 'common/[hash].js',
    format: 'cjs',
    sourcemap: false
  },

  plugins: [
    rollupPluginNodeResolve(),
    rollupPluginCommonjs(),
    rollupPluginTypescript({
      tsconfigOverride: { compilerOptions: { target: 'es5' } }
    })
  ]
};

const esm: RollupOptions = {
  ...common,

  output: {
    dir: './lib',
    entryFileNames: basename(pkg.module),
    chunkFileNames: 'common/[hash].mjs',
    format: 'esm',
    sourcemap: false
  },

  plugins: [
    rollupPluginNodeResolve(),
    rollupPluginCommonjs(),
    rollupPluginTypescript({
      tsconfigOverride: { compilerOptions: { target: 'es2017' } }
    })
  ]
};

export default [cjs, esm];
