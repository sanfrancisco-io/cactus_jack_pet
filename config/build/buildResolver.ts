import { ResolveOptions } from 'webpack';

export function buildResolver(): ResolveOptions {
    return {
        // позволяет импортировать не указывая расширение файла
        extensions: ['.tsx', '.ts', '.js'],
    };
}
