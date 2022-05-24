import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'dumi',
  mode: 'site',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  navs: [
    {
      title: '常用资源',
      path: '/resources',
    },
    {
      title: '框架插件',
      children: [
        { title: 'UI框架', path: 'https://d.umijs.org' },
        { title: '常用插件', path: '/guide' },
        { title: '字体图标', path: '/guide' },
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
      ],
    },
    {
      title: 'GitHub',
      path: 'https://github.com/umijs/dumi',
    },
  ],
});
