import { ResolveOptions } from 'webpack';
import { IBuildOptions } from './types/config';

export function buildResolver(options: IBuildOptions): ResolveOptions {
    return {
        // позволяет импортировать не указывая расширение файла
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {},
    };
}
