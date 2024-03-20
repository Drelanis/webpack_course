// лучше всего использывать стандартный модуль пас из нодджс для того что бы более корректно обрабатывать все пути на разных ОС
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")

module.exports = (env) => {
    return  {
        // мод определяет в каком формате у нас идёт зборка
        // значение нужно передавать с env
        mode: env.mode ?? "development",
        // зборка - откуда
        // можна указывать несколько точек входа
        entry: path.resolve(__dirname, "src", "index.ts"),
        // зборка - куда
        output: {
            path: path.resolve(__dirname, 'build'),
            // проблема статичных файлов в том? что браузер их кеширует и двже если их изменять, то браузер остаёт их из кеша
            // [contenthash] решают эту проблему - когда изменяется содержимое - изменяется хеш файла
            filename: '[name].[contenthash].js',
            // удаляет файл перед новой сборки
            clean: true,
          },
          // template - ссылкуа до нашего хтмл файла
          plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, "public", "index.html")}),
            // не рекомендуется использовать в продакшн так это может сильно замедлять зборку
            new webpack.ProgressPlugin()
        ],
        module: {
          // порядок важен (смотреть ноутс)
          rules: [
            {
              test: /\.tsx?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
        resolve: {
          // порядок важен
          extensions: ['.tsx', '.ts', '.js'],
        },
      };
};