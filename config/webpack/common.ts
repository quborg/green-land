import { Configuration } from 'webpack';
import PATHS from '../paths';

const IS_PROD = process.env.NODE_ENV === 'production';
const mode = IS_PROD ? 'production' : 'development';

const common: Configuration = {
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: PATHS.nodeModules,
      },
    ],
  },
  output: {
    filename: `index.${mode}.cjs`,
    path: IS_PROD ? PATHS.dist : PATHS.build,
  },
  resolve: {
    extensions: ['.ts', '.js', 'json'],
    alias: {
      config: PATHS.config,
      src: PATHS.src,
      types: PATHS.types,
    },
    modules: ['node_modules'],
  },
  target: 'node',
  mode,
};

export default common;
