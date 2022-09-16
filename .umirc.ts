import { defineConfig } from 'dumi';

// 自定义全局样式
const baseStyle = `
img[alt=img] {box-shadow: 0px 0px 16px #e2e2e2;border-radius: 8px;margin-top: 16px;}
`;

export default defineConfig({
  title: 'dumi',
  mode: 'site',
  base: '/note',
  publicPath: '/note/',
  locales: [['zh-CN', '中文']],
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  dynamicImport: {
    loading: '@/Loading',
  },
  styles: [baseStyle],
  hash: true,
  // algolia: {
  //   appId: 'SIZ4S3LOST',
  //   apiKey: '3f58dca05e25408fbd309428058efcfc',
  //   indexName: 'fy996icu',
  // },
  // sitemap: {
  //   hostname: 'https://fy996icu.github.io/note/',
  // },
  // 配置antd按需加载
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  navs: [
    {
      title: '常用资源',
      path: '/resources',
    },
    {
      title: '框架插件',
      children: [
        { title: 'UI框架', path: '/ui' },
        { title: '常用插件', path: '/plugins' },
        { title: '字体图标', path: '/fonticon' },
      ],
    },
    {
      title: '项目配置',
      children: [{ title: 'Vue项目配置', path: '/vueconfig' }],
    },
    {
      title: '技术文档',
      children: [
        { title: 'React', path: '/react' },
        { title: 'Redux', path: '/redux' },
        { title: 'Vue3.x', path: '/vue3' },
        { title: 'Pinia', path: '/pinia' },
        { title: 'Git', path: '/git' },
      ],
    },
    {
      title: '代码片段',
      children: [
        { title: 'JavaScript', path: '/code_js' },
        { title: 'CSS', path: '/code_css' },
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/fy996icu/note_umi',
    },
  ],
});
