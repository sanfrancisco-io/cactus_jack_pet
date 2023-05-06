import { IBuildOptions } from './types/config';
import webpack from 'webpack';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolver } from './buildResolver';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(
    options: IBuildOptions
): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolver(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
