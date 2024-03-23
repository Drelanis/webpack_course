import { Configuration } from 'webpack';
import path from 'path';
import {
  BuildMode,
  BuildPaths,
  BuildPlatform,
  buildWebpack,
} from '@packages/build-config';
import webpack from 'webpack';
import packageJson from './package.json';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
  platform?: BuildPlatform;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: Configuration = buildWebpack({
    port: env.port ?? 3001,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
  });

  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      // название микрофронтенда
      name: 'shop',
      // файл который будет отдалённо подключаться в хост контейнер (по умолчание так и называем)
      filename: 'remoteEntry.js',
      // указываем, что мы хотим предоставить приложению контейнеру, в нашем наружу мы отда]м на роутер
      exposes: {
        './Router': './src/router/Router.tsx',
      },
      // какие библиотеки у нас общие, а какие должны шариться
      shared: {
        ...packageJson.dependencies,
        react: {
          // эту библиотеку необходимо будет подгрузить сразу (обратное к лези лоудингу)
          eager: true,
          requiredVersion: packageJson.dependencies['react'],
        },
        'react-router-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-router-dom'],
        },
        'react-dom': {
          eager: true,
          requiredVersion: packageJson.dependencies['react-dom'],
        },
      },
    }),
  );

  return config;
};
