import path from "node:path"

export default {
    mode: "development",
    entry: './stc/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(import.meta.dirname, 'dist'),
        clean: true
    },
    devtool: "eval-source-map",
    debServer: {
        watchFiles: ['./src/template.html']
    }
}