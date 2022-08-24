const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = () => {
  return {
      plugins: [
        // new wpa plugins
        new HtmlWebpackPlugin({
          template: "./index.html",
          title: "JATE",
        }),
        // src sw injector
        new InjectManifest({
          swSrc: "./src-sw.js",
          swDest: "src-sw.js",
        }),
        //manifesting 
        new WebpackPwaManifest({
          fingerprints: false,
          inject: true,
          name: "text editor thing",
          short_name: "JATE",
          description: "Text Editor",
          background_color: "#ADD8E6",
          theme_color: "#ADD8E6",
          start_url: "/",
          publicPath: "/",
          icons: [
            {src: path.resolve("src/images/logo.png"), sizes: [96, 128, 192, 256, 384, 512], 
            destination: path.join("assets", "icons")}]
        }),
      ],
      mode: 'development',
      entry: {
        main: './src/js/index.js',
        install: './src/js/install.js'
      },
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
      },
      module: {
        rules: [
          {test: /\.css$/,use: ['style-loader', 'css-loader']},
          {test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
                plugins: [
                  "@babel/plugin-proposal-object-rest-spread",
                  "@babel/transform-runtime"]}},
          }]
    },
  };
};