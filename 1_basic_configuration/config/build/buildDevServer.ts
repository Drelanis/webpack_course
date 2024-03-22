import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { BuildOptions } from "../types";


export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    const {port} = options;

    return {
        port: port ?? 3333,
        open: true,
        // если раздавать статику через nginx То надо делать проксирование на Index.html
        historyApiFallback: true,
    };
};