import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import path from 'path';
import { BuildOptions } from "../types";


export const buildPlugins = (options: BuildOptions): Configuration["plugins"] => {
    const {mode, paths} = options

    const isDev = mode === "development";
    const isProd = mode === "production";

    const plugins: Configuration["plugins"] = [
        new HtmlWebpackPlugin({template: paths.html}),
    ]

    if (isDev) {
        plugins.push(new webpack.ProgressPlugin());
    };

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
          }));
    };

    return plugins;
};