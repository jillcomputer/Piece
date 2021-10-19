import vue from "rollup-plugin-vue";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import styles from "rollup-plugin-styles";
import fs from "fs";
import path from "path";
import pack from "./package.json";

const babelConfig = {
  exclude: "node_modules/**",
  babelHelpers: "runtime",
  babelrc: false,
  presets: [["@babel/preset-env", { modules: false }]],
};

const bannerTxt = `/*! Hello Components 组件的 v${pack.version} | js备注 */`;
// 文件路径
const baseFolder = "./src/";
// 组件
const componentsFolder = "components/";

const components = fs
  .readdirSync(baseFolder + componentsFolder)
  .filter((f) =>
    fs.statSync(path.join(baseFolder + componentsFolder, f)).isDirectory()
  );

const entries = {
  index: "./src/index.js",
  helpers: "./src/utils/helpers.js",
  config: "./src/utils/ConfigComponent.js",
  ...components.reduce((obj, name) => {
    obj[name] = baseFolder + componentsFolder + name;
    return obj;
  }, {}),
};

const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const vuePluginConfig = {
  target: "browser",
  css: false,
  exposeFilename: false,
  preprocessStyles: true,
  template: {
    isProduction: true,
  },
};
//const typescriptConfig={
//tsconfig: false,
//    experimentalDecorators: true,
//module: 'es2015'
//};

export default () => {
  const mapComponent = (name) => {
    return [
      {
        // input: baseFolder + componentsFolder + `${name}/index.ts`,
        input:
          baseFolder + componentsFolder + `${name}/${capitalize(name)}.vue`,
        external: ["vue"],
        output: {
          format: "umd",
          // format: 'amd',
          name: capitalize(name),
          file: `dist/components/${name}/index.js`,
          banner: bannerTxt,
          exports: "named",
          globals: {
            vue: "Vue",
          },
        },
        plugins: [
          vue(vuePluginConfig),
          nodeResolve({
            extensions: [".vue", ".js", ".ts"],
          }),
          commonjs(),

          styles(),
          // postcss(),
          //typescript(typescriptConfig),
          babel(babelConfig),
        ],
      },
    ];
  };

  // const mapStati=(name)=>{
  //     return [
  //         {
  //             input: baseFolder + componentsFolder + `${name}/index.ts`,
  //             output: {
  //                 format: 'umd',
  //                 name: capitalize(name),
  //                 file: `dist/components/${name}/index.js`,
  //                 banner: bannerTxt,
  //             },
  //         }
  //     ]
  // }
  let config = [
    // {
    //     input: entries,
    //     external: ['vue'],
    //     output: {
    //         format: 'esm',
    //         dir: `dist/esm`
    //     },
    //     plugins: [
    //         nodeResolve({
    //             extensions: ['.vue', '.js','.ts']
    //         }),
    //         vue(vuePluginConfig),
    //         styles(),
    //         // postcss(),
    //         //typescript(typescriptConfig),
    //         babel(babelConfig),
    //         commonjs()
    //     ]
    // },
    // {
    //     input: entries,
    //     external: ['vue'],
    //     output: {
    //         format: 'cjs',
    //         dir: 'dist/cjs',
    //         exports: 'named'
    //     },
    //     plugins: [
    //         nodeResolve({
    //             extensions: ['.vue', '.js','.ts']
    //         }),
    //         vue(vuePluginConfig),
    //         styles(),
    //         // postcss(),
    //         //typescript(typescriptConfig),
    //         babel(babelConfig),
    //         commonjs()
    //     ]
    // },
    // {
    //     input: 'src/index.js',
    //     external: ['vue'],
    //     output: {
    //         format: 'umd',
    //         name: capitalize('buefy'),
    //         file: 'dist/dist1.js',
    //         exports: 'named',
    //         banner: bannerTxt,
    //         globals: {
    //             vue: 'Vue'
    //         }
    //     },
    //     plugins: [

    //         nodeResolve({
    //             extensions: ['.vue', '.js','.ts']
    //         }),
    //         vue(vuePluginConfig),
    //         styles(),
    //         // postcss(),
    //         //typescript(typescriptConfig),
    //         babel(babelConfig),
    //         commonjs()
    //     ]
    // },
    // {
    //     input: 'src/index.js',
    //     external: ['vue'],
    //     output: {
    //         format: 'esm',
    //         file: 'dist/dist1.esm.js',
    //         banner: bannerTxt
    //     },
    //     plugins: [
    //         nodeResolve({
    //             extensions: ['.vue', '.js','.ts']
    //         }),
    //         vue(vuePluginConfig),
    //         styles(),
    //         // postcss(),
    //         //typescript(typescriptConfig),
    //         babel(babelConfig),
    //         commonjs()
    //     ]
    // },
    // individual components
    ...components.map((f) => mapComponent(f)).reduce((r, a) => r.concat(a), []),
  ];

  if (process.env.MINIFY === "true") {
    config = config.filter((c) => !!c.output.file);
    config.forEach((c) => {
      c.output.file = c.output.file.replace(/\.js/g, ".min.js");
      c.plugins.push(
        terser({
          output: {
            comments: "/^!/",
          },
        })
      );
    });
  }
  return config;
};
