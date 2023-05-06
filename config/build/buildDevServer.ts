import { IBuildOptions } from './types/config';
import { Configuration as WebpackDevServerConfigs } from 'webpack-dev-server';

export function buildDevServer(
    options: IBuildOptions
): WebpackDevServerConfigs {
    return {
        port: options.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
