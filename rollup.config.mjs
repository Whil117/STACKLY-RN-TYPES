import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
const config = [
  {
    input: "main.ts",
    external: ["react", "react-native", "react-dom"],
    output: [
      {
        file: "build/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      nodeResolve({
        browser: true,
      }),
      commonjs(),
      json(),
      typescript({
        outputToFilesystem: true,
        tsconfig: "./tsconfig-rollup.json",
      }),
    ],
  },
];

export default config;
