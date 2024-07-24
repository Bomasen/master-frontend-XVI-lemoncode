import { merge } from "webpack-merge";
import WebpackProd from "./webpack.prod.js";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export default merge(WebpackProd, {
  plugins: [new BundleAnalyzerPlugin()],
});
