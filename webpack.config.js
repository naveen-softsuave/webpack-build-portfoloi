const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  // Check if we are in production or development mode
  const isProduction = argv.mode === "production";

  return {
    // 1. Mode
    mode: isProduction ? "production" : "development",

    // 2. Entry point - starting point of the application
    entry: "./src/index.js",

    // 3. Output - where bundled files to go
    output: {
      path: path.resolve(__dirname, "build"), // __dirname is the current directory, 'build' folder name
      filename: isProduction
        ? "static/js/[name].[contenthash:10].js" // Produtcion: with hash
        : "static/js/[name].js", // Development: simple name (Without hash)

      // Hash changes only when file content changes (good for caching)

      clean: true, // Automatically clean /build folder before each build
    },

    // 4. Loaders - Process different file types
    module: {
      rules: [
        // js/jsx
        {
          test: /\.(js|jsx)$/, // Match js and jsx files
          exclude: /node_modules/, // Don't process node_modules

          use: {
            loader: "babel-loader", // Transpiles modern JS to browser-compatibale JS
            options: {
              presets: [
                "@babel/preset-env", // ES6+ -> ES5
                "@babel/preset-react", // JSX -> JS
              ],
            },
          },
        },

        // CSS
        {
          test: /\.css$/, // Match css files
          use: [
            "style-loader", // Injects CSS into the DOM
            "css-loader", // Allows importing CSS in JS
          ],
          // Processed right to left: css-loader -> style-loader
        },

        // Images
        {
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          type: "asset/resource", // Webpack (5) built in - copies images to output folder
        },
      ],
    },

    // 5. plugins - Extra Functionality
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html", // Uses index.html as template and automatically injects <script> tags
      }),
    ],

    // 6. Resolve - How to find modules
    resolve: {
      extensions: [".js", ".jsx"], // Now you can: import App from './App' (no .js needed)
    },

    devServer: {
      static: "./public", // Serve static files from /public folder
      port: 3000, // Development server port
    //   open: true, // Auto-open browser
      hot: true, // Hot Module Replacement (auto-refresh on changes)
      historyApiFallback: true, // For React Router - all routes return index.html
    },

    // 8. Soure Maps - for debugging
    devtool: isProduction ? "source-map" : "eval-source-map", // Development: Fast rebuilds, Production: High-quality maps
  };
};
